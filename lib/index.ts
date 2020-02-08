import { ConfigInterface } from './interfaces/config.interface';

// Heart of Cement
export default class Cement {
    public data: object;
    public methods: object;
    public element: string;

    public initialRoot: any;

    constructor(private config: ConfigInterface) {
        this.data = <object> config['data'];
        this.methods = <object> config['methods'];
        this.element = <string> config['el'];
        this.initialRoot = document.querySelector(this.element);
        
        this.makeReactive();
        this.renderData();

        delete this.config;
    }

    renderData(): void {
        let root = document.querySelector(this.element);
        let children = [...root.childNodes];

        children.forEach((e: any) => {
            // if child is an element
            if(e.nodeType === 1) {
                
                let dataWrapper = e.innerHTML.match('{{(.*)}}')[0]; 
                let dataName = e.innerHTML.match('{{(.*)}}')[1].trim();
                let value = this.data[dataName]; 

                if(dataName.includes('.')) {

                    // getDescendantProp from https://gist.github.com/jasonrhodes/2321581#gistcomment-1813156
                    const getDescendantProp = (obj, path) => (
                        path.split('.').reduce((acc, part) => acc && acc[part], obj)
                    );
                    let deep = getDescendantProp(this.data, dataName);

                    if(deep !== undefined) {
                        e.innerHTML = e.innerHTML.replace(dataWrapper, deep);
                    }  else {
                        console.error(`${dataName} not found`);
                    }
                } else {
                    if(value !== undefined) {
                        e.innerHTML = e.innerHTML.replace(dataWrapper, value);
                    } else {
                        console.error(`${dataName} not found`);
                    }

                }

            }
        });
        
    }

    makeReactive() {
        for(let property in this.data) {
            let value = this.data[property];
            let self  = this;

            Object.defineProperty(this.data, property, {
                get: function cementGetter() {
                    return value;
                },
                set: function cementSetter(newValue) {
                    self.renderData(); // doesn't work yet
                    return value = newValue;
                }
            })
        
        }
    }
}
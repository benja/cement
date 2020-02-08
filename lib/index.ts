import get from 'lodash.get';
import set from 'lodash.set';

import { IConfig, IAnyDictionary } from './types';
import { NoRootException, UndefinedDataReferencedException } from './exceptions';

// Heart of Cement
export default class Cement<Data extends IAnyDictionary = {}, Methods extends IAnyDictionary = {}> {
    public data: Data;
    public methods: Methods;
    public config: IConfig<Data, Methods>;

    constructor(config: IConfig<Data, Methods>) {
        this.config = config;
        this.data = config.data;
        this.methods = config.methods;
        this.makeReactive();
        this.renderData();
    }

    private get $root() {
        const root = typeof this.config.el === 'string' ? document.querySelector<HTMLElement>(this.config.el) : this.config.el;
        if (!root) throw new NoRootException();
        return root;
    }

    renderData() {
        const children = [...this.$root.children];

        const isHTMLElement = (e: Element): e is HTMLElement => (e instanceof HTMLElement);

        children.filter(isHTMLElement).forEach((e) => {
            const match = e.innerHTML.match(/{{(.*?)}}/);
            if (match && match.length > 1) {
                const dataName = match[1].trim();
                if (!this.data.hasOwnProperty(dataName)) throw new UndefinedDataReferencedException();
                const value = get(this.data, dataName);
                if (value !== undefined && value !== null) {
                    e.innerHTML = e.innerHTML.replace(match[0], value);
                }
            }
        });
        
    }

    makeReactive() {
        for(let property in this.data) {
            Object.defineProperty(this.data, property, {
                get: () => {
                    return get(this.data, property);
                },
                set: (newValue) => {
                    set(this.data, property, newValue);
                    this.renderData();
                }
            })
        
        }
    }
}
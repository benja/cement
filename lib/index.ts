import get from 'lodash.get';
import set from 'lodash.set';

import { IConfig, IAnyDictionary } from './types';
import { NoRootException, UndefinedDataReferencedException } from './exceptions';

export default class Cement<
    Data extends IAnyDictionary = {},
    Methods extends IAnyDictionary = {}
> {
    private _data: Data;
    public data: Data;
    public methods: Methods;
    public config: IConfig<Data, Cement['methods']>;

    constructor(config: IConfig<Data, Methods>) {
        this.config = config;
        this.data = new Proxy<Data>(
            { ...config.data },
            {
                set: (obj, prop: keyof Data, value) => {
                    obj[prop] = value;
                    this.render();
                    return true;
                }
            },
        );
        this.methods = config.methods;
        this.render();
    }

    private get $root() {
        const root = typeof this.config.el === 'string' ? document.querySelector<HTMLElement>(this.config.el) : this.config.el;
        if (!root) throw new NoRootException();
        return root;
    }

    render() {
        const children = [...this.$root.children];

        const isHTMLElement = (e: Element): e is HTMLElement => (e instanceof HTMLElement);
        children.filter(isHTMLElement).forEach((e) => {
            const match = e.innerHTML.match(/{{(.*?)}}/);
            if (match && match.length > 1) {
                const dataName = match[1].trim();
                const value = get(this.data, dataName);
                if (value === undefined) throw new UndefinedDataReferencedException();
                e.innerHTML = e.innerHTML.replace(match[0], value);
            }
        });
        
    }
}
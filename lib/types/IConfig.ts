import { IAnyDictionary } from './IAnyDictionary';

export interface IConfig<Data extends IAnyDictionary = {}, Methods extends IAnyDictionary = {}> {
    el: string | HTMLElement;
    data: Data,
    methods: Methods
}
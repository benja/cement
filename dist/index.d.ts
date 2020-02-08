import { ConfigInterface } from './interfaces/config.interface';
export default class Cement {
    private config;
    data: object;
    methods: object;
    element: string;
    initialRoot: any;
    constructor(config: ConfigInterface);
    renderData(): void;
    makeReactive(): void;
}

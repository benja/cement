// Cement's heart
export default class Cement {
    public data: object;
    public methods: object;

    // Create Cemenet instance
    constructor(...args: any) {
        this.data = <object> args[0]['data'];
        this.methods = <object> args[0]['methods'];
    }
}
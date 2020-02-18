export class NoRootException extends Error {
    constructor() {
        super('No root element');
    }
}
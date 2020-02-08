export class UndefinedDataReferencedException extends Error {
    constructor() {
        super('Referenced undefined data during render');
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(anylizer, outputTarget) {
        this.anylizer = anylizer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.anylizer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;

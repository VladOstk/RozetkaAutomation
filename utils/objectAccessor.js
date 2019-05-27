import { expect } from "../tests/index";

export class ObjectAccessor {
    compareActualAndExpectedProperties(expectedPropertiesList, actualResponseObjItem) {
        for(let actualProperty in actualResponseObjItem) {
            const idx = expectedPropertiesList.indexOf(actualProperty);
            expect(idx).not.to.eql(-1, `Response item\'s property with name \'${actualProperty}\' is not expected!`);
            expectedPropertiesList.splice(idx, 1);
        }
        expect(expectedPropertiesList.length).to.eql(0, `Expected props list is not empty, but should be. Length is ${expectedPropertiesList.length}`);
    }
}
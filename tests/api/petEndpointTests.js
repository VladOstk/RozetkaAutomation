import { expect, PetEndpoint, ObjectAccessor } from "../index";

describe("Pet endpoint api tests", () => {
    let petEndpoint = new PetEndpoint();
    let objectAccessor = new ObjectAccessor();
    let petEndpointResponse = {};

    before(async () => {
        petEndpointResponse = await petEndpoint.getPet("-9223372036854775808");
    });
    it("ensure GET pet return success status", async () => {
        expect(petEndpointResponse.status).to.eql(200, `status code is ${petEndpointResponse.status}`);
    });

    it("Ensure GET pet contract", async () => {
        const expectedProps = ["id", "category", "name", "photoUrls", "tags", "status"];
        objectAccessor.compareActualAndExpectedProperties(expectedProps, petEndpointResponse.data);
    });


});

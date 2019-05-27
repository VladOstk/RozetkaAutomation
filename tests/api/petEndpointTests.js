import { expect } from "../index";
import { PetEndpoint } from "../index";

describe("Pet endpoint api tests", () => {
    let petEndpoint = new PetEndpoint();
    let petEndpointResponse = {};
    before(async() => {
        petEndpointResponse = await petEndpoint.getPet("-9223372036854775808");
    });
        it("ensure GET pet return success status", async() => {
            expect(petEndpointResponse.status).to.eql(200, `status code is ${petEndpointResponse.status}`);
        });
    });
    
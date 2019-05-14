import {
    expect,
    BaseService
} from "../index";

describe.only("Basic page functionality tests", () => {
let baseService = new BaseService();
let baseServiceResponse = {};

before(async() => {
    baseServiceResponse = await baseService.basicGet();
});
    it("ensure '/' return success status", async() => {
        expect(baseServiceResponse.status).to.eql(200, `status code is ${baseServiceResponse.status}`);
    });
});
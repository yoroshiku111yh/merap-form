const { postAPIProfile } = require("../../__mocks__/api");
const { formBodyProfile, formBodyProfileMissingField, formBodyProfileDuplicateIdCustomer } = require("../../__mocks__/testDataApi");

jest.mock('../../api');


describe("API profile call", () => {
    it("Should resolve with valid body profile", async () => {
        expect.assertions(1);
        await expect(postAPIProfile({body : formBodyProfile, suffixUrl : '/profiles'})).resolves.toStrictEqual(formBodyProfile);
    });

    it("Should reject with missing field", async () => {
        expect.assertions(1);
        await expect(postAPIProfile({body : formBodyProfileMissingField, suffixUrl : '/profiles'})).rejects.toStrictEqual({"error" : "Missing required field"});
    });

    it("Should reject with duplicate id_customer", async () => {
        expect.assertions(1);
        await expect(postAPIProfile({body : formBodyProfileDuplicateIdCustomer, suffixUrl : '/profiles'})).rejects.toStrictEqual({"error" : "Already exists"});
    });
})
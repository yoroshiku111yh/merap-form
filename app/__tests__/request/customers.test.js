import { getAPIWithQueryCustomer, postAPICustomer } from '../../api';
import { customers, formBodyRegisterDuplicatePhoneNumber, formBodyRegister, formBodyRegisterMissingField } from '../../__mocks__/testDataApi';
jest.mock('../../api');

describe("API customer call", () => {
    it("should resolve with right phone number and rejects with wrong phone number", async () => {
        expect.assertions(2);
        const rightPhoneNumber = "0123456789";
        const wrongPhoneNumber = "0123456700";
        await expect(getAPIWithQueryCustomer({query : {"phone" : rightPhoneNumber}, suffixUrl : "/customers"})).resolves.toStrictEqual(customers[0]);
        await expect(getAPIWithQueryCustomer({query : {"phone" : wrongPhoneNumber}, suffixUrl : "/customers"})).rejects.toStrictEqual({"error" : "not found"});
    });


    it("Should reject with phone number already registered", async () => {
        expect.assertions(1);
        await expect(postAPICustomer({body : formBodyRegisterDuplicatePhoneNumber, suffixUrl : "/customers"})).rejects.toStrictEqual({"error" : "Already exists"});
    });

    it("Should resolve with right form data", async () => {
        expect.assertions(1);
        await expect(postAPICustomer({body : formBodyRegister, suffixUrl : "/customers"})).resolves.toStrictEqual(formBodyRegister);
    });

    it("Should reject with missing field", async () => {
        expect.assertions(1);
        await expect(postAPICustomer({body : formBodyRegisterMissingField, suffixUrl : "/customers"})).rejects.toStrictEqual({"error" : "Missing required field"});
    })
})
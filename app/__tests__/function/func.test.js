import { REGEX_PHONE, REGEX_EMAIL, REGEX_NUMBER } from '../../initialize';
describe("Regex :", () => {
    it("should match to uri", () => {
        const uriRegex = REGEX_PHONE;
        const uri = '0123456789';
        expect(uri).toMatch(uriRegex); 
    });

    it("should not match to uri with text in string", () => {
        const uriRegex = REGEX_PHONE;
        const uri = '0123456789a';
        expect(uri).not.toMatch(uriRegex); 
    });

    it("should not match to uri with length below 10", () => {
        const uriRegex = REGEX_PHONE;
        const uri = '012345678';
        expect(uri).not.toMatch(uriRegex); 
    });

    it("should not match to uri with length 10 and text inside", () => {
        const uriRegex = REGEX_PHONE;
        const uri = '01234a5678';
        expect(uri).not.toMatch(uriRegex); 
    });

    it("Should match to uri with contain only number", () => {
        const uriRegex = REGEX_NUMBER;
        const uri = "0123456";
        expect(uri).toMatch(uriRegex);
    });

    it("Should not match to uri with contain only number", () => {
        const uriRegex = REGEX_NUMBER;
        const uri = "012a3";
        expect(uri).not.toMatch(uriRegex);
    });

    it("Should match to uri with Email valid", () => {
        const uriRegex = REGEX_EMAIL;
        const uri = "1245@gmai.com";
        expect(uri).toMatch(uriRegex);
    });

    it("Should not match to uri with Email invalid", () => {
        const uriRegex = REGEX_EMAIL;
        const uri = "1245@.com";
        expect(uri).not.toMatch(uriRegex);
    });
})
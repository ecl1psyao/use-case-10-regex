export const validateString = (str, maxLength) => {
    // First, check if the string length is within the acceptable range
    if (str.length > maxLength) {
        return false;
    }

    // Define the regular expression
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{1,}$/;

    // Check if the string matches the regular expression and return boolean value
    return regex.test(str);
}

export const testValidateString = () => {
    const maxLength = 20;

    const runTest = (input, expectedResult, message) => {
        console.assert(validateString(input, maxLength) === expectedResult, `${message}. Input: ${input}`);
    }

    // Too short input
    runTest("A1a#", true, "Expected true, string length is within limit");

    // Too long input
    runTest("ThisIsAVeryLongStringThatExceedsTheMaxLength123!", false, "Expected false, string length exceeds limit");

    // Matching input length
    runTest("MatchedLength123#$%", true, "Expected true, string length is exactly 20");

    // Missing uppercase
    runTest("missinguppercase1#", false, "Expected false, missing uppercase");

    // Missing lowercase
    runTest("MISSINGLOWERCASE1#", false, "Expected false, missing lowercase");

    // Missing special character
    runTest("MissingSpecial1", false, "Expected false, missing special character");

    // Missing digit
    runTest("MissingDigit!@", false, "Expected false, missing digit");

    // Excess whitespace characters in various positions
    runTest(" A1a# ", false, "Expected false, whitespace at start and end");
    runTest("A 1a#", false, "Expected false, whitespace in the middle");
    runTest("A1a# ", false, "Expected false, whitespace at the end");
    runTest(" A1a#", false, "Expected false, whitespace at the start");
}

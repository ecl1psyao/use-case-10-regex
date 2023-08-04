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

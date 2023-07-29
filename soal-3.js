function validatePhoneNumber(phoneNumber) {
    // Regular expression to match the allowed formats
    var phonePattern = /^(\(\d{3}\)-\d{6})|(0\d{2}\d{6})|(0\d{2}\s\d{6})$/;

    // Test the input phoneNumber against the pattern
    return phonePattern.test(phoneNumber);
}

// Example usage:
var phoneNumber1 = "(021)-676767";
var phoneNumber2 = "021676767";
var phoneNumber3 = "021 676767";

console.log(validatePhoneNumber(phoneNumber1)); // Output: true
console.log(validatePhoneNumber(phoneNumber2)); // Output: true
console.log(validatePhoneNumber(phoneNumber3)); // Output: true

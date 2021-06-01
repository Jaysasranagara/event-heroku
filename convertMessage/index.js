/**
 * Encoding String to Base 64bit
 * @param {String} str 
 */
const encodingMessage = (str) => {
    return Buffer.from(str).toString('base64');
};


/**
 * Decoding message from base 64 to string.
 * @param {String} str 
 */
const decodingMessage = (str) => {
    return Buffer.from(str, 'base64').toString();
}


const testCaseConvertMsg = (testingValue, expectedResult) => {
    return console.log(testingValue == expectedResult ? true :  false);
}

// Test encoding String to Base 64
testCaseConvertMsg(encodingMessage('Hello World'), 'SGVsbG8gV29ybGQ=');
testCaseConvertMsg(encodingMessage('The quick brown fox'), 'VGhlIHF1aWNrIGJyb3duIGZveA==');
// Test Decoding base 64 to String
testCaseConvertMsg(decodingMessage('SGVsbG8sIEdsaW50cyBBcm15ISE='), 'Hello, Glints Army!!');
testCaseConvertMsg(decodingMessage('SG9XIGlTIHlPdVIgSm9Vck5lWSBhVCBHbEluVHMgQWNBZEVtWT8='), 'HoW iS yOuR JoUrNeY aT GlInTs AcAdEmY?');
function transformString(str) {
    let len = str.length;
    let result = str;

    // Check if length is divisible by 15
    if (len % 15 === 0) {
        // Reverse the string
        result = result.split('').reverse().join('');
        // Replace each character with its ASCII code
        result = result.split('').map(char => char.charCodeAt(0)).join('');
    } else if (len % 3 === 0) {
        // Reverse the string
        result = result.split('').reverse().join('');
    } else if (len % 5 === 0) {
        // Replace each character with its ASCII code
        result = result.split('').map(char => char.charCodeAt(0)).join('');
    }

    return result;
}


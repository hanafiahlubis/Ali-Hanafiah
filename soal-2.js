function getRandomNumber(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
var minNumber = 5;
var maxNumber = 10;
var randomNumber = getRandomNumber(minNumber, maxNumber);
console.log(randomNumber);

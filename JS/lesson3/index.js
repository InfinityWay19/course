const myPin = 1234;
let pinCodes = [1111, 5678, 1234, 9999];
for (let i = 0; i < pinCodes.length; i++) {
    if (pinCodes[i] === myPin) {
        console.log(`Пин-код ${pinCodes[i]} подходит, доступ разрешен.`);
        break;
    } else {
        console.log(`Пин-код ${pinCodes[i]} не подходит, пробуем другой.`);
    }
}
/* const formatSize = (bytes) => {
    if (bytes < 1024) {
        return `bytes: ${bytes} B`;
    }

    const mbytes = (bytes / 1024 / 1024);
    return `${mbytes} MB`;
};

const filesSize = [500, 50000000, 500000];

for (const fileSize of filesSize) {
    console.log(formatSize(fileSize));
} */

/* const usdToRub = (usd) => usd * 80;

console.log(usdToRub(10)); */

const personAge = (age) => {
    if (age >= 18) {
        return ("Человек совершеннолетний");
    }
    else {
        return ("Человек ещё маленький :)");
    }
};

console.log(personAge(17));

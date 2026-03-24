const ages = [10, 18, 23, 7, 19]
const personAge = (age) => {
    if (age >= 18) {
        return ("Человек совершеннолетний");
    }
    else {
        return ("Человек ещё маленький :)");
    }
};

for (const age of ages) {
    console.log(personAge(age))
}
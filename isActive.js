function checkAge(age) {
    if (age === 0) return "I'm a baby!";
    else if (age < 10) return "I'm a children!";
    else if (age < 15) return "I'm a teenager!";
    else return "I'm an adult!";
}

const AGE = 30;

let result = checkAge(8);
console.log(result);
"use strict";
const calculateBmi = (height, weight) => {
    const height_m = height / 100;
    const bmi = weight / (height_m * height_m);
    if (bmi > 25) {
        const result = "Overweight";
        return result;
    }
    else if (bmi < 25 && bmi > 18.5) {
        const result = "Normal range";
        return bmi;
    }
    else if (bmi < 18.5) {
        const result = "Underweight";
        return bmi;
    }
    return "Something else";
};
try {
    console.log(calculateBmi(180, 74));
}
catch (error) {
    let errorMessage = 'Something went wrong: ';
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}

const isNotNumber = (argument) => isNaN(Number(argument));
const calculateBmi = (height, weight) => {
    const height_m = height / 100;
    const bmi = weight / (height_m * height_m);
    if (bmi > 25) {
        const result = "Overweight";
        return result;
    }
    else if (bmi < 25 && bmi > 18.5) {
        const result = "Normal range";
        return result;
    }
    else if (bmi < 18.5) {
        const result = "Underweight";
        return result;
    }
    return "Something else";
};
try {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        throw new Error("Missing arguments. Usage: npm run calculateBmi <height> <weight>");
    }
    const heightStr = args[0];
    const weightStr = args[1];
    if (isNotNumber(heightStr) || isNotNumber(weightStr)) {
        throw new Error("Height and weight must be valid numbers");
    }
    const height = Number(heightStr);
    const weight = Number(weightStr);
    if (height <= 0 || weight <= 0) {
        throw new Error("Height and weight must be positive numbers");
    }
    console.log(calculateBmi(height, weight));
}
catch (error) {
    let errorMessage = 'Something went wrong: ';
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}
export {};

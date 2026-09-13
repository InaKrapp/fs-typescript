const isNotNumber = (argument: any): boolean =>
  isNaN(Number(argument));


const calculateBmi = (height: number, weight: number): string => {
  const height_m: number = height/100
  const bmi: number =  weight/(height_m*height_m)
  if (bmi > 25) {
    const result: string = "Overweight"
    return result ;
  } else if (bmi < 25 && bmi > 18.5) {
    const result: string = "Normal range"
    return result;
  } else if (bmi < 18.5) {
    const result: string = "Underweight"
    return result;}
    return "Something else"
  }


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
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
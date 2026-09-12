const calculateBmi = (height: number, weight: number): any => {
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
  console.log(calculateBmi(180, 74));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
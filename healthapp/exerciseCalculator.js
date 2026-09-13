const isNotNumber = (argument) => isNaN(Number(argument));
function calculateExercises(dailyHours, target) {
    const periodLength = dailyHours.length;
    // Calculate training days (days where exercise hours > 0)
    const trainingDays = dailyHours.filter(hours => hours > 0).length;
    // Calculate average
    const sum = dailyHours.reduce((acc, val) => acc + val, 0);
    const average = periodLength > 0 ? sum / periodLength : 0;
    // Determine if target was reached
    const success = average >= target;
    // Rating between 1-3
    // Metric: compare average to target
    // If average >= target * 1.5 => rating 3 (excellent)
    // If average >= target => rating 2 (meets target)
    // If average >= target * 0.5 => rating 1 (below target but not too bad)
    // If average < target * 0.5 => rating 1 (but different description?)
    let finalRating;
    let finalDescription;
    if (target === 0) {
        if (average > 0) {
            finalRating = 3;
            finalDescription = 'excellent, well above target';
        }
        else {
            finalRating = 1;
            finalDescription = 'no exercise, no target';
        }
    }
    else {
        const ratio = average / target;
        if (ratio >= 1.2) {
            finalRating = 3;
            finalDescription = 'excellent, well above target';
        }
        else if (ratio >= 0.8) {
            finalRating = 2;
            finalDescription = 'not too bad but could be better';
        }
        else {
            finalRating = 1;
            finalDescription = 'significantly below target';
        }
    }
    return {
        periodLength,
        trainingDays,
        success,
        rating: finalRating,
        ratingDescription: finalDescription,
        target,
        average,
    };
}
try {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        throw new Error("Missing arguments. Usage: npm run calculateExercises <target> <hour1> <hour2> ...");
    }
    const targetStr = args[0];
    if (isNotNumber(targetStr)) {
        throw new Error("Target must be a valid number");
    }
    const target = Number(targetStr);
    if (target < 0) {
        throw new Error("Target must be a non-negative number");
    }
    const hoursArgs = args.slice(1);
    if (hoursArgs.length === 0) {
        throw new Error("At least one daily exercise hour is required");
    }
    const dailyHours = [];
    for (const arg of hoursArgs) {
        if (isNotNumber(arg)) {
            throw new Error(`Invalid exercise hour value: ${arg}. Must be a valid number`);
        }
        const hour = Number(arg);
        if (hour < 0) {
            throw new Error("Exercise hours must be non-negative numbers");
        }
        dailyHours.push(hour);
    }
    const result = calculateExercises(dailyHours, target);
    console.log(result);
}
catch (error) {
    let errorMessage = 'Something went wrong: ';
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}
export {};

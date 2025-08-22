// Function: launchBrowser

console.log("=====Launch Browser Function=====");

function launchBrowser(browserName) 
{
    if (browserName.toLowerCase() === "chrome")
         {
        console.log("Launching Chrome browser...");

    } else if (browserName.toLowerCase() === "firefox") 
        {
        console.log("Launching Firefox browser...");
    } else {
        console.log(`Browser "${browserName}" is not supported. Launching default browser...`);
    }
}

// Calling the function with examples

launchBrowser("Chrome"); 
launchBrowser("Firefox");  
launchBrowser("Safari");


//Run Tests Function

console.log("=====Run Tests Function======");

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests...");
            break;
        case "sanity":
            console.log("Running sanity tests...");
            break;
        case "regression":
            console.log("Running regression tests...");
            break;
        default:
            console.log(`Unknown test type: ${testType}. Running default test suite...`);
    }
}
runTests("smoke"); // calls the function to run smoke tests
runTests("sanity"); // calls the function to run sanity tests
runTests("regression"); // calls the function to run regression tests
runTests("performance"); // Unknown test type: performance. Running default test suite...

// Calculate Grade Function
console.log("=====Calculate Grade Function=====");
let grade = "";
function calculateGrade(score) {
    let grade;
    switch (true) {
        case (score > 95):
            grade = "A+";
            break;
        case (score > 90):
            grade = "A";
            break;
        case (score > 70):
            grade = "B";
            break;
        case (score > 50):
            grade = "C";
            break;
        case (score > 40):
            grade = "D";
            break;
        case (score > 20):
            grade = "E";
            break;
        default:
            grade = "F";
    }
    return grade;
}
const scores = [96, 91, 72, 52, 45, 25];
for (const score of scores) {
    console.log(`Grade for score ${score}:`, calculateGrade(score));
}

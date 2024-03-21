import inquirer from "inquirer";
const ans = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select your desire operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (ans.operator === "addition") {
    console.log(ans.firstNumber + ans.secondNumber);
}
else if (ans.operator === "subtraction") {
    console.log(ans.firstNumber - ans.secondNumber);
}
else if (ans.operator === "multiplication") {
    console.log(ans.firstNumber * ans.secondNumber);
}
else if (ans.operator === "division") {
    console.log(ans.firstNumber / ans.secondNumber);
}
else {
    console.log("please chose a valid operator");
}

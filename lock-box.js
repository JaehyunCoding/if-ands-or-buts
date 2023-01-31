const prompt = require("prompt-sync")({sigint: true})

let pincode = 1994
let userinput = Number(prompt("Enter the passcode: "))

if(userinput === pincode){
    console.log("Success")
}
else {
    console.log("Failure")
}
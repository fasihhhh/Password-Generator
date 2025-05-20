document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("inputBox"); // adjust ID/class as needed
  const generatenBtn = document.getElementById("generateBtn");
  const copyIcon = document.getElementById("copyIcon");
  const yearsH1Tag = document.getElementById("yearsH1Tag");

  let arr = [];
  let passwordString = "";
  let arrLenght = 17;

  let upperCaseGenerator = () => {
    arr.push(Math.floor(Math.random() * (91 - 64) + 64));
  };
  let lowerCaseGenerator = () => {
    arr.push(Math.floor(Math.random() * (123 - 97) + 97));
  };
  let specialCharGenrator = () => {
    arr.push(Math.floor(Math.random() * (39 - 35) + 35));
  };
  let numberGenerator = () => {
    arr.push(Math.floor(Math.random() * (58 - 47) + 47));
  };

  const passwordGeneratorFunction = () => {
    arr = [];
    inputBox.value = "";
    passwordString = "";
    yearsH1Tag.innerHTML = "0 Seconds";
    upperCaseGenerator();
    lowerCaseGenerator();
    specialCharGenrator();
    specialCharGenrator();
    upperCaseGenerator();
    lowerCaseGenerator();
    lowerCaseGenerator();
    specialCharGenrator();
    numberGenerator();
    numberGenerator();
    lowerCaseGenerator();
    upperCaseGenerator();
    upperCaseGenerator();
    numberGenerator();
    specialCharGenrator();
    lowerCaseGenerator();
    numberGenerator();

    for (let i = 0; i < arrLenght; i++) {
      passwordString = passwordString + String.fromCharCode(arr[i]);
    }

    console.log(passwordString);
    passwordInsideInputBox();
    hackingYearCalculation();
  };

  const passwordInsideInputBox = () => {
    inputBox.value = passwordString;
  };

  const copyFunction = () => {
    inputBox.select();
    inputBox.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(inputBox.value);
    alert("Password Copied!");
  };

  let hackingYearCalculation = () => {
    let totalCombination = Math.pow(67, arrLenght);
    let guessPerSecond = 1_000_000_000_000; //1,000,000,000,000 1T
    let timeInSeconds = totalCombination / guessPerSecond;
    let timeInYears = timeInSeconds / (60 * 60 * 24 * 365);
    let answer = "";

    if (timeInYears >= 1_000_000_000) {
      answer = (timeInYears / 1_000_000_000).toFixed(2) + " billion years";
    } else if (timeInYears >= 1_000_000) {
      answer = (timeInYears / 1_000_000).toFixed(2) + " million years";
    } else if (timeInYears >= 1_000) {
      answer = (timeInYears / 1_000).toFixed(2) + " thousand years";
    } else {
      answer = timeInYears.toFixed(2) + " years";
    }

    console.log(answer);
    yearsH1Tag.innerHTML = `${answer}`;
  };

  generatenBtn.addEventListener("click", passwordGeneratorFunction);
  copyIcon.addEventListener("click", copyFunction);
});

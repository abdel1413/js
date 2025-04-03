const inputValue = document.getElementById("user-input");

const check = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");
let resultDiv = document.getElementById("results-div");

const checkNumberValidation = () => {
  if (!inputValue.value) {
    alert("Please provide a phone number");
  } else {
    const regex = /([1?(?\d{1-3})?])-?([\d{1-3}])-?([\d{1-4}])/;
    const reg2 = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    const reg3 = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/;

    const patt =
      /^(^\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    const patt2 = /^[^2-9|0]?[\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;

    const p = document.createElement("p");
    p.setAttribute("class", "p-tag");
    //p.textContent = innerText

    if (patt2.test(inputValue.value)) {
      const splitted = inputValue.value.split("");
      p.innerText = `Valid US number: ${inputValue.value}`;

      if (
        checkParentheses(splitted).length == 1 ||
        (splitted[0] == "(" && splitted[splitted.length - 1] == ")")
      ) {
        p.innerText = `Invalid US number:  ${inputValue.value}`;
      } else {
        p.innerText = `Valid US number: ${inputValue.value}`;
      }
    } else {
      p.innerText = `Invalid US number:  ${inputValue.value}`;
    }

    p.innerText == `Invalid US number:  ${inputValue.value}`
      ? p.classList.add("danger-color")
      : p.classList.remove("danger-color");

    resultDiv.appendChild(p);

    console.log("patt2", patt2.test(inputValue.value));
    inputValue.value = "";
  }
};

const checkParentheses = (array) => {
  const checkPoint = [];
  array.forEach((val) => {
    if (val === "(" || val === ")") {
      checkPoint.push(val);
    }
  });

  return checkPoint;
};

const clearAll = () => {
  resultDiv.innerHTML = "";
};
check.addEventListener("click", checkNumberValidation);

clearBtn.addEventListener("click", clearAll);

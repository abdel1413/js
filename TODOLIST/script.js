const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

// add task but if the title field is empty alert the user

// const updateTask = () => {
//     if()
// }

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

const addOrUpdateTask = () => {
  if (!titleInput.value.trim()) {
    alert("You should enter a title");
    return;
  }
  //before adding a task to the tasktadata, check if it
  // already exists in the array
  // get the index first and use index to check

  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${
      dateInput.value
    }`,
    title: titleInput.value,
    date: dateInput.value,
    descritption: descriptionInput.value,
  };

  const taskArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  if (taskArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[taskArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer();
  taskForm.classList.toggle("hidden");
};

// rerreice data  form taksdata and display on the screen
const updateTaskContainer = () => {
  let container = ``;

  taskData.forEach((task) => {
    container += `<p>${task.title}</p>
           <p>${task.date}</p
            <p>${task.descritption}</p>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
            `;
  });

  tasksContainer.innerHTML = container;
};

addOrUpdateTaskBtn.addEventListener("click", addOrUpdateTask);

// const taskData = JSON.parse(localStorage.getItem("data")) || [];
// let currentTask = {};

// const removeSpecialChars = (val) => {
//   return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
// };

// const addOrUpdateTask = () => {

//   if (!titleInput.value.trim()) {
//     alert("Please provide a title");
//     return;
//   }
//   const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

// //     const taskObj = {
//     id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
//     title: removeSpecialChars(titleInput.value),
//     date: dateInput.value,
//     description: removeSpecialChars(descriptionInput.value)
//   };

//   if (dataArrIndex === -1) {
//     taskData.unshift(taskObj);
//   } else {
//     taskData[dataArrIndex] = taskObj;
//   }

//   localStorage.setItem("data", JSON.stringify(taskData));
//   updateTaskContainer();
//   reset();
// };

// const updateTaskContainer = () => {
//   tasksContainer.innerHTML = "";

//   taskData.forEach(({ id, title, date, description }) => {
//     tasksContainer.innerHTML += `
//         <div class="task" id="${id}">
//           <p><strong>Title:</strong> ${title}</p>
//           <p><strong>Date:</strong> ${date}</p>
//           <p><strong>Description:</strong> ${description}</p>
//           <button onclick="editTask(this)" type="button" class="btn">Edit</button>
//           <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
//         </div>
//       `;
//   });
// };

// const deleteTask = (buttonEl) => {
//   const dataArrIndex = taskData.findIndex(
//     (item) => item.id === buttonEl.parentElement.id
//   );

//   buttonEl.parentElement.remove();
//   taskData.splice(dataArrIndex, 1);
//   localStorage.setItem("data", JSON.stringify(taskData));
// };

// const editTask = (buttonEl) => {
//   const dataArrIndex = taskData.findIndex(
//     (item) => item.id === buttonEl.parentElement.id
//   );

//   currentTask = taskData[dataArrIndex];

//   titleInput.value = currentTask.title;
//   dateInput.value = currentTask.date;
//   descriptionInput.value = currentTask.description;

//   addOrUpdateTaskBtn.innerText = "Update Task";

//   taskForm.classList.toggle("hidden");
// };

// const reset = () => {
//   addOrUpdateTaskBtn.innerText = "Add Task";
//   titleInput.value = "";
//   dateInput.value = "";
//   descriptionInput.value = "";
//   taskForm.classList.toggle("hidden");
//   currentTask = {};
// };

// if (taskData.length) {
//   updateTaskContainer();
// }

// openTaskFormBtn.addEventListener("click", () =>
//   taskForm.classList.toggle("hidden")
// );

// closeTaskFormBtn.addEventListener("click", () => {
//   const formInputsContainValues =
//     titleInput.value || dateInput.value || descriptionInput.value;
//   const formInputValuesUpdated =
//     titleInput.value !== currentTask.title ||
//     dateInput.value !== currentTask.date ||
//     descriptionInput.value !== currentTask.description;

//   if (formInputsContainValues && formInputValuesUpdated) {
//     confirmCloseDialog.showModal();
//   } else {
//     reset();
//   }
// });

// cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

// discardBtn.addEventListener("click", () => {
//   confirmCloseDialog.close();
//   reset();
// });

// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   addOrUpdateTask();
// });



 //BINARAY PART
 //1st way
/**
 * const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === 0) {
    result.innerText = "0";
    return;
  }

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  result.innerText = remainders.reverse().join("");
};


//2nd way

const decimalToBinary = (input) => {
  let binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};

3rd way with recursive call

  
if (input === 0) {
    return "0";
  } else if (input === 1) {
    return "1";
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }

REFACTOR THE IF STATEMENT
...
if(input ==0 || input == 1){
  return String(input)
}else{
  ...
}

 */


//RECURSIVE 
/**
 * const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log('n',number);
  }
};

countDownAndUp(3);

3
2
1
0
Reached base case"
1,
2,
3
 //this 1,upto 3 after the recursive call means the fcn keep runnig 
 //after the recursive call;
 */
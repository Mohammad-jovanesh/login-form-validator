// // const UserNameInput = document.querySelector("input[id='username']");
// // const Form = document.getElementById("Form");
// // Form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   console.log("Hello");
// // });
// // console.log(UserNameInput);
// // const CheckEmty = () => {
// //   if (UserNameInput.value.length) {
// //   }
// // };
// // CheckEmty();

// const Form = document.querySelector("#Form");
// const UserName = document.querySelector("#username");
// const ErrMessage = UserName.nextElementSibling;
// console.log(ErrMessage);
// Form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fileds = {
//     username: {
//       element: document.getElementById("username"),
//       validation(value) {
//         if (value.length == 0) {
//           return "Username cannot be empty";
//         }
//         if (value.length < 5) {
//           return "sername must be at least 5 characters";
//         }
//         if (value.length > 10) {
//           return "Username must be at most 10 characters";
//         }
//         return null;
//       },
//     },
//   };

//   console.log(Object.keys(fileds));
//   console.log(Object.values(fileds));
//   Object.keys(fileds).forEach((filed) => {
//     console.log(filed);
//     console.log(fileds[filed].element);
//     console.log(fileds[filed].validation(fileds[filed].element.value.trim()));
//   });

//   //   value with out space
//   //   let value = UserName.value.trim();
//   //   if (value.length == 0) {
//   //     console.log("its empty!");
//   //     ErrMessage.textContent = "its empty";
//   //     ErrMessage.className = "err_message";
//   //     UserName.className = "err_border";
//   //   } else if (value.length <= 5) {
//   //     console.log("its less than 5");
//   //     ErrMessage.textContent = "its less than 5";
//   //     ErrMessage.className = "err_message";
//   //     UserName.className = "err_border";
//   //   } else if (value.length > 10) {
//   //     console.log("its more than 10 charachter");
//   //     ErrMessage.textContent = "its more than 10 charachter";
//   //     ErrMessage.className = "err_message";
//   //     UserName.className = "err_border";
//   //   }
// });

// const Obj = {
//   name: "mohammad",
//   age: 22,
//   sayHello: () => {
//     console.log("hello");
//   },
// };

// Obj.sayHello();
// console.log(Obj.name);
// console.log(Object.keys(Obj));
// console.log(Object.values(Obj));
// console.log(Obj.name);
// console.log(Obj["name"]);

// const getJsonPlaceHolder = async () => {
//   try {
//     let response = await fetch("https://api.escuelajs.co/api/v1/products");
//     let data = await response.json();
//     console.log(data);
//     data.forEach((item) => {
//       console.log(item);
//       Object.keys(item).forEach((info) => {
//         console.log(info);
//         console.log(item[info]);
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// getJsonPlaceHolder();

// const FormElemnt = document.getElementById("Form");

// FormElemnt.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const AllElement = {
//     username: {
//       element: document.getElementById("username"),
//       valid: (value) => {
//         if (value.length == 0) return "username cannot be empty";
//         if (value.length < 5) return "username must be more than 5";
//         if (value.length > 10) return "username must be less than 10 ";
//         return null;
//       },
//     },
//     email: {
//       element: document.getElementById("email"),
//       valid: (value) => {
//         if (value.length == 0) return "email cannot be empty";
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           return "Valid email needed";
//         return "Email Corect";
//       },
//     },
//     password: {
//       element: document.getElementById("password"),
//       valid: (value) => {
//         if (value.length === 0) return "Password cannot be empty";
//         const passwordRegex =
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_$!%*?&])[A-Za-z\d@_$!%*?&]{8,}$/;
//         if (!passwordRegex.test(value)) {
//           return "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol";
//         }
//         return "ok";
//       },
//     },
//   };

//   Object.keys(AllElement).forEach((elm) => {
//     let element = AllElement[elm];
//     console.log(element.element.value);
//     let Message = element.element.nextElementSibling;
//     Message.textContent = element.valid(element.element.value);
//     console.log(element.valid(element.element.value));
//   });
// });

const PasswordInput = document.getElementById("password");
const FormElemnt = document.getElementById("FormElement");
const EmailInput = document.getElementById("email");
FormElemnt.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
});

const CheckValidat_email = () => {
  let parentElm = EmailInput.parentElement;
  let inputValue = EmailInput.value.trim();
  let Error_Msg_Elm = EmailInput.nextElementSibling;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (parentElm.classList.contains("Success")) {
    parentElm.classList.remove("Success");
  }
  if (inputValue === "") {
    parentElm.classList.add("Error");
    Error_Msg_Elm.textContent = "email cannot be Empty";
  } else if (!emailRegex.test(inputValue)) {
    parentElm.classList.add("Error");
    Error_Msg_Elm.textContent = "Invalid email";
  } else {
    if (parentElm.classList.contains("Error")) {
      parentElm.classList.replace("Error", "Success");
    } else {
      parentElm.classList.add("Success");
    }
    Error_Msg_Elm.textContent = "";
  }
};
let typingTimer;
EmailInput.addEventListener("input", () => {
  // clear previous timer

  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    CheckValidat_email();
    console.log("hello"); // your validation function
  }, 250);
});

// Check the  password  valid

const ValidPassword = () => {
  let parentElm_Password = PasswordInput.parentElement;
  let valuePassword = PasswordInput.value.trim();
  let Error_Msg_password = PasswordInput.nextElementSibling;
  console.log(Error_Msg_password);
  let Password_regx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{4,10}$/;
  if (valuePassword == "") {
    parentElm_Password.classList.add("Error");
    Error_Msg_password.textContent = "Password cannot be Empty";
  } else if (!Password_regx.test(valuePassword)) {
    parentElm_Password.classList.add("Error");
    Error_Msg_password.textContent =
      "password can not be less then 3 and more then 10";
  } else {
    if (parentElm_Password.classList.contains("Error")) {
      parentElm_Password.classList.replace("Error", "Success");
    } else {
      parentElm_Password.classList.add("Success");
    }
    Error_Msg_Elm.textContent = "";
  }
};

PasswordInput.addEventListener("input", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    ValidPassword();
    console.log("hello"); // your validation function
  }, 250);
});

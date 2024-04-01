const loginForm = document.querySelector(".login-form");
const email = document.querySelector('input[name="email"]');
const pass = document.querySelector('input[name="password"]');

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "" || pass.value === "") {
    alert("All fields must be filled in");
  } else {
    const userAccount = {
      email: email.value,
      password: pass.value,
    };
    console.log(userAccount);
  }

  loginForm.reset();
});

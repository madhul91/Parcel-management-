import { handleRegistration } from "./modules/registration.js";
import { handleLogin } from "./modules/login.js";

const registerTab =
document.getElementById("registerTab");

const loginTab =
document.getElementById("loginTab");

const registrationForm =
document.getElementById("registrationForm");

const loginForm =
document.getElementById("loginForm");

registerTab.addEventListener("click", () => {

    registrationForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    registerTab.classList.add("active");
    loginTab.classList.remove("active");
});

loginTab.addEventListener("click", () => {

    loginForm.classList.remove("hidden");
    registrationForm.classList.add("hidden");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");
});

registrationForm.addEventListener(
    "submit",
    handleRegistration
);

loginForm.addEventListener(
    "submit",
    handleLogin
);
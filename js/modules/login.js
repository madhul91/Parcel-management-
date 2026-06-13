import { loginCustomer } from "../services/api.js";

export async function handleLogin(event) {

    event.preventDefault();

    const roleElement = document.getElementById("loginRole");

    const data = {
        customerId: document
            .getElementById("loginCustomerId")
            .value
            .trim(),

        password: document
            .getElementById("loginPassword")
            .value,

        role: roleElement ? roleElement.value : "Customer"
    };

    const message =
        document.getElementById("loginMessage");

    try {

        const user =
            await loginCustomer(data);

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );

        message.className = "success";
        message.innerText = "Login Successful";

        setTimeout(() => {

            if (user.role === "Officer") {

                window.location.href =
                    "officer-dashboard.html";

            } else {

                window.location.href =
                    "dashboard.html";

            }

        }, 1000);

    } catch (error) {

        message.className = "error";
        message.innerText = error.message;
    }
}
import { loginCustomer } from "../services/api.js";

export async function handleLogin(event){

    event.preventDefault();

    const data = {
        customerId:
            document.getElementById("loginCustomerId")
            .value
            .trim(),

        password:
            document.getElementById("loginPassword")
            .value
    };

    const message =
        document.getElementById("loginMessage");

    try{

        await loginCustomer(data);

        window.location.href =
            "dashboard.html";

    }
    catch(error){

        message.className = "error";
        message.innerText = error.message;
    }
}
// // export function handleRegistration(event) {

// //     event.preventDefault();

// //     const formData = {
// //         customerName: document.getElementById("customerName").value,
// //         email: document.getElementById("email").value,
// //         countryCode: document.getElementById("countryCode").value,
// //         mobile: document.getElementById("mobile").value,
// //         address: document.getElementById("address").value,
// //         password: document.getElementById("password").value,
// //         confirmPassword: document.getElementById("confirmPassword").value,
// //         notification: document.getElementById("notification").checked
// //     };

// //     const message = document.getElementById("message");

// //     if (formData.customerName.trim() === "") {
// //         message.className = "error";
// //         message.innerText = "Customer Name is required";
// //         return;
// //     }

// //     if (!/^\d{10}$/.test(formData.mobile)) {
// //         message.className = "error";
// //         message.innerText = "Mobile Number must contain 10 digits";
// //         return;
// //     }

// //     if (formData.password !== formData.confirmPassword) {
// //         message.className = "error";
// //         message.innerText = "Passwords do not match";
// //         return;
// //     }

// //     document.getElementById("registrationForm")
// //         .style.display = "none";

// //     document.getElementById("ackScreen")
// //         .classList.remove("hidden");

// //     document.getElementById("customerInfo")
// //         .innerHTML = `
// //             <strong>Name:</strong> ${formData.customerName}<br>
// //             <strong>Email:</strong> ${formData.email}<br>
// //             <strong>Mobile:</strong> ${formData.countryCode} ${formData.mobile}<br>
// //             <strong>Address:</strong> ${formData.address}
// //         `;
// // }
// export function handleRegistration(event) {

//     event.preventDefault();

//     const formData = {
//         customerName: document.getElementById("customerName").value,
//         email: document.getElementById("email").value,
//         countryCode: document.getElementById("countryCode").value,
//         mobile: document.getElementById("mobile").value,
//         address: document.getElementById("address").value,
//         password: document.getElementById("password").value,
//         confirmPassword: document.getElementById("confirmPassword").value,
//         notification: document.getElementById("notification").checked
//     };

//     const message = document.getElementById("message");

//     if (formData.customerName.trim() === "") {
//         message.className = "error";
//         message.innerText = "Customer Name is required";
//         return;
//     }

//     if (!/^\d{10}$/.test(formData.mobile)) {
//         message.className = "error";
//         message.innerText = "Mobile Number must contain 10 digits";
//         return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//         message.className = "error";
//         message.innerText = "Passwords do not match";
//         return;
//     }

//     document.getElementById("registrationForm")
//         .style.display = "none";

//     document.getElementById("ackScreen")
//         .classList.remove("hidden");

//     document.getElementById("customerInfo")
//         .innerHTML = `
//             <strong>Name:</strong> ${formData.customerName}<br>
//             <strong>Email:</strong> ${formData.email}<br>
//             <strong>Mobile:</strong> ${formData.countryCode} ${formData.mobile}<br>
//             <strong>Address:</strong> ${formData.address}
//         `;
// }
export function handleRegistration(event) {

    event.preventDefault();

    const formData = {
        customerName: document.getElementById("customerName").value.trim(),
        email: document.getElementById("email").value.trim(),
        countryCode: document.getElementById("countryCode").value,
        mobile: document.getElementById("mobile").value.trim(),
        address: document.getElementById("address").value.trim(),
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
        notification: document.getElementById("notification").checked,
        // role: document.getElementById("role").value
        role : document.getElementById("loginRole").value
    };

    const message = document.getElementById("message");
    message.innerText = "";

    // Customer Name Validation
    if (formData.customerName === "") {
        message.className = "error";
        message.innerText = "Customer Name is required";
        return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
        message.className = "error";
        message.innerText = "Invalid Email Address";
        return;
    }

    // Mobile Validation
    if (!/^\d{10}$/.test(formData.mobile)) {
        message.className = "error";
        message.innerText = "Mobile Number must contain exactly 10 digits";
        return;
    }
    if (formData.address.trim() === "") {

    message.className = "error";
    message.innerText =
        "Complete mailing address is required";

    return;
}

// ZIP / Postal Code Validation
const zipRegex = /\b\d{5,6}\b/;

if (!zipRegex.test(formData.address)) {

    message.className = "error";
    message.innerText =
        "Address must include ZIP/Postal Code";

    return;
}

    // Password Validation
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{1,30}$/;

    if (!passwordRegex.test(formData.password)) {
        message.className = "error";
        message.innerText =
            "Password must contain uppercase, lowercase and special character";
        return;
    }

    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
        message.className = "error";
        message.innerText = "Passwords do not match";
        return;
    }

    // Auto-generated Customer ID
    const customerId =
        "CUST" + Math.floor(10000 + Math.random() * 90000);

    formData.customerId = customerId;

    // Save customer
    localStorage.setItem(
        "customer",
        JSON.stringify(formData)
    );

    // Hide registration form
    document.getElementById("registrationForm")
        .style.display = "none";

    // Show acknowledgement screen
    document.getElementById("ackScreen")
        .classList.remove("hidden");

    document.getElementById("customerInfo")
        .innerHTML = `
            <p><strong>Customer ID:</strong> ${customerId}</p>
            <p><strong>Name:</strong> ${formData.customerName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Mobile:</strong> ${formData.countryCode} ${formData.mobile}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
        `;
}
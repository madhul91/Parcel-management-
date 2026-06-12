export function validateRegistration(formData){

    if(formData.customerName.length < 3){
        return "Name should contain minimum 3 characters";
    }

    if(formData.password !== formData.confirmPassword){
        return "Passwords do not match";
    }

    if(!/^\d{10}$/.test(formData.mobile)){
        return "Invalid mobile number";
    }

    return null;
}
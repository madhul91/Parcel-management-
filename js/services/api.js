export async function loginCustomer(data){

    const customer =
        JSON.parse(localStorage.getItem("customer"));

    if(!customer){
        throw new Error("Customer not registered");
    }

    if(customer.customerId !== data.customerId){
        throw new Error("Invalid Customer ID");
    }

    if(customer.password !== data.password){
        throw new Error("Invalid Password");
    }

    return {
        success:true
    };
}
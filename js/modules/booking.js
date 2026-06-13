const customer =
    JSON.parse(
        localStorage.getItem("customer")
    );

document.getElementById("custName")
    .innerText =
    customer.customerName;

document.getElementById("custAddress")
    .innerText =
    customer.address;

document.getElementById("custMobile")
    .innerText =
    customer.mobile;

function calculateCost(){

    const weight =
        Number(
            document.getElementById(
                "parcelWeight"
            ).value
        );

    const deliveryType =
        document.getElementById(
            "deliveryType"
        ).value;

    const packingType =
        document.getElementById(
            "packingType"
        ).value;

    const baseRate = 50;

    const weightCharge =
        weight * 0.02;

    const deliveryCharge =
        deliveryType === "Express"
        ? 80
        : 30;

    const packingCharge =
        packingType === "Premium"
        ? 50
        : 20;

    const total =
        baseRate +
        weightCharge +
        deliveryCharge +
        packingCharge;

    document.getElementById(
        "serviceCost"
    ).innerText =
        total.toFixed(2);
}

document
.getElementById("parcelWeight")
.addEventListener(
    "input",
    calculateCost
);

document
.getElementById("deliveryType")
.addEventListener(
    "change",
    calculateCost
);

document
.getElementById("packingType")
.addEventListener(
    "change",
    calculateCost
);

document
.getElementById("bookingForm")
.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        document
        .getElementById(
            "bookingMessage"
        )
        .innerHTML =
        "<span style='color:green'>Parcel Booking Successful</span>";
    }
);
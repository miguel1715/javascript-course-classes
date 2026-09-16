const getFullName = document.getElementById("full-name");
const getEmail = document.getElementById("email");
const getOrderNo = document.getElementById("order-no");
const getProductCode = document.getElementById("product-code");
const getQuantity = document.getElementById("quantity");

const getComplaintsGroup = Array.from(document.querySelectorAll('#complaints-group input[type="checkbox"]'));
const getFieldset = document.getElementById("complaints-group");
const getOtherCheckbox = document.getElementById("other-complaint");
const getComplaintDescription = document.getElementById("complaint-description-container");
const getComplaintText = document.getElementById("complaint-description");

const getSolutionsGroup = Array.from(document.querySelectorAll('#solutions-group input[type="radio"]'));
const getSolutionsFieldset = document.getElementById("solutions-group");
const getOtherRadio = document.getElementById("other-solution");
const getSolutionText = document.getElementById("solution-description");

function validateForm() {
    return {
        "full-name": getFullName.value.trim() !== "",
        "email": /.+@.+\..{2,}/.test(getEmail.value),
        "order-no": /^2024\d{6}$/.test(getOrderNo.value),
        "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/.test(getProductCode.value),
        "quantity": Number.isInteger(Number(getQuantity.value)) && Number(getQuantity.value) > 0,
        "complaints-group": getComplaintsGroup.some(checkbox => checkbox.checked),
        "complaint-description": !getOtherCheckbox.checked ? true : getComplaintText.value.length >= 20,
        "solutions-group": getSolutionsGroup.some(radiobox => radiobox.checked),
        "solution-description": !getOtherRadio.checked ? true : getSolutionText.value.length >= 20,
        }
    }

function isValid(validateForm) {
    const values = Object.values(validateForm);
    return values.every(entry => entry === true);
}

getFullName.addEventListener("change", () => {
    const validation = validateForm();
    getFullName.style.borderColor = validation["full-name"] ? "green" : "red";
});

getEmail.addEventListener("change", () => {
    const validation = validateForm();
    getEmail.style.borderColor = validation["email"] ? "green" : "red";
})

getOrderNo.addEventListener("change", () => {
    const validation = validateForm();
    getOrderNo.style.borderColor = validation["order-no"] ? "green" : "red";
})

getProductCode.addEventListener("change", () => {
    const validation = validateForm();
    getProductCode.style.borderColor = validation["product-code"] ? "green" : "red";
})

getQuantity.addEventListener("change", () => {
    const validation = validateForm();
    getQuantity.style.borderColor = validation["quantity"] ? "green" : "red";
})

getFieldset.addEventListener("change", () => {
    const validation = validateForm();
    getFieldset.style.borderColor = validation["complaints-group"] ? "green" : "red";
})

getComplaintText.addEventListener("change", () => {
    const validation = validateForm();
    getComplaintText.style.borderColor = validation["complaint-description"] ? "green" : "red";
})

getSolutionsFieldset.addEventListener("change", () => {
    const validation = validateForm();
    getSolutionsFieldset.style.borderColor = validation["solutions-group"] ? "green" : "red";
})

getSolutionText.addEventListener("change", () => {
    const validation = validateForm();
    getSolutionText.style.borderColor = validation["solution-description"] ? "green" : "red";
})


const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fieldElements = {
        "full-name": getFullName,
        "email": getEmail,
        "order-no": getOrderNo,
        "product-code": getProductCode,
        "quantity": getQuantity,
        "complaints-group": getFieldset,
        "complaint-description": getComplaintText,
        "solutions-group": getSolutionsFieldset,
        "solution-description": getSolutionText
    };

    const validation = validateForm();
    const getMessage = document.getElementById("message-box");

    
    Object.keys(fieldElements).forEach((key) => {
        fieldElements[key].style.borderColor = validation[key] ? "green" : "red";
    })
    
    if (isValid(validation)) {
        getMessage.style.color = "green"
        getMessage.textContent = "Congratulations and thank you for your submission!"
    }
})
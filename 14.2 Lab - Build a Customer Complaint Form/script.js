    function validateForm() {
        const getFullName = document.getElementById("full-name");
        const getEmail = document.getElementById("email");
        const getOrderNo = document.getElementById("order-no");
        const getProductCode = document.getElementById("product-code");
        const getQuantity = document.getElementById("quantity");

        const getComplaintsGroup = document.querySelectorAll('#complaints-group input[type="checkbox"]');
        const getOtherCheckbox = document.getElementById("other-complaint");
        const getComplaintDescription = document.getElementById("complaint-description-container");
        const getComplaintText = document.getElementById("complaint-description");

        const getSolutionsGroup = document.querySelectorAll('#solutions-group input[type="radio"]');
        const getOtherRadio = document.getElementById("other-solution");
        const getSolutionText = document.getElementById("solution-description");

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
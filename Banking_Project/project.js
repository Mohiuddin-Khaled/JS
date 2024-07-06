
function handleDeposit() {
    let convertDepositValue = getConvertedValue("deposit-input", "value");
    let convertedDepositAmount = getConvertedValue("add-deposit", "innerText");
    let depositSum = addValue(convertDepositValue, convertedDepositAmount);
    setInnerText("add-deposit", depositSum);
    document.getElementById("deposit-input").value = "";
    //total field
    let convertedTotalAmount = getConvertedValue("add-total", "innerText");
    let totalSum = addValue(depositSum, convertedTotalAmount);
    setInnerText("add-total", totalSum);
}

function handleWithdraw() {
    let convertedWithdrawValue = getConvertedValue("withdraw-input", "value");
    let convertedWithdrawAmount = getConvertedValue("add-withdraw", "innerText");
    let withdrawSum = addValue(convertedWithdrawValue, convertedWithdrawAmount);
    setInnerText("add-withdraw", withdrawSum);
    document.getElementById("withdraw-input").value = "";
    //total field
    let convertedTotalAmount = getConvertedValue("add-total", "innerText");
    let totalValue = convertedTotalAmount - withdrawSum;
    setInnerText("add-total", totalValue);
}

function setInnerText(id, value) {
    // document.getElementById(id).innerText = value;
    // dynamically add BDT text 
    document.getElementById(id).innerText = `${value} ৳`;
}

function getConvertedValue(id, element) {
    return parseFloat((element == "innerText") ? document.getElementById(id).innerText : document.getElementById(id).value);
}

const addValue = (value1, value2) => {
    return value1 + value2;
}
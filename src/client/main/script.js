const interestRateInput = document.querySelector("input#interestRate")
const timeInput = document.querySelector("input#time")
const initialMoneyInput = document.querySelector("input#capital")

const totalAmountP = document.querySelector("p#totalAmount")
const confirmBt = document.querySelector("button#confirm")


confirmBt.onclick = async function() {
    let totalAmountReq = await fetch("/server/interestcalc", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({time: timeInput.value, interestRate: interestRateInput.value, capital: initialMoneyInput.value})
    })
    const aux = await totalAmountReq.json()
    totalAmountP.innerHTML = aux['totalAmount']
}

const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');

const swapBtn = document.getElementById('swap');


let calculate = () => {
  const currencyOne = currencyEl_one.value;
  const currencyTwo = currencyEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/dc2cd7d0336603135def71da/latest/${currencyOne}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.conversion_rates[currencyTwo]

      rateEl.innerText = `${amountEl_one.value} ${currencyOne} = ${rate} ${currencyTwo}`
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    })
}

swapBtn.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp
  calculate()
}
)

currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)

calculate()
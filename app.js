{
  const form = document.querySelector('.form');
  const cost = document.querySelector('.js-cost');
  const rate = document.querySelector('.js-rate');
  const resultSpan = document.querySelector('.js-span');

  const calculate = (cost, rate) => {
    return cost.value * rate.value;
  };

  const result = () => {
    resultSpan.innerText = calculate(cost, rate).toFixed(2);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    result();
  });
}

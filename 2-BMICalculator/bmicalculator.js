const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>please enter valid information of height ${height}</span>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>please enter valid information of weight ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML = `you are under weight ${bmi}`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `you are normal ${bmi}`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `you are over weight ${bmi}`;
    }
  }
});

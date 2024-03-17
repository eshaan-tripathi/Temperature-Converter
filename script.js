const celsiusInput = document.querySelector('#Celcius input');
const fahrenheitInput = document.querySelector('#Fahrenheit input');
const kelvinInput = document.querySelector('#Kelvin input');
const resetButton = document.querySelector('.button button');

function updateTemperature() {
    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        fahrenheitInput.value = ((celsius * 9 / 5) + 32).toFixed(2);
        kelvinInput.value = (celsius + 273.15).toFixed(2);
    } else {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }
}

celsiusInput.addEventListener('input', updateTemperature);

fahrenheitInput.addEventListener('input', function () {
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheit)) {
        celsiusInput.value = ((fahrenheit - 32) * 5 / 9).toFixed(2);
        kelvinInput.value = ((fahrenheit + 459.67) * 5 / 9).toFixed(2);
    } else {
        celsiusInput.value = '';
        kelvinInput.value = '';
    }
});

kelvinInput.addEventListener('input', function () {
    const kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(kelvin)) {
        celsiusInput.value = (kelvin - 273.15).toFixed(2);
        fahrenheitInput.value = ((kelvin * 9 / 5) - 459.67).toFixed(2);
    } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
    }
});

resetButton.addEventListener('click', function () {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const resultElement = document.getElementById('result');
    let result;

    if (isNaN(temperatureInput)) 
    {
        resultElement.innerText = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);

    if (fromUnit === 'celsius') 
    {
        // Celsius to Fahrenheit
        result = (temperature * 9/5) + 32;
        resultElement.innerText = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
    } else if (fromUnit === 'fahrenheit') 
    {
        // Fahrenheit to Celsius
        result = (temperature - 32) * 5/9;
        resultElement.innerText = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
    } else if (fromUnit === 'kelvin') 
    {
        // Kelvin to Celsius
        result = temperature - 273.15;
        resultElement.innerText = `${temperature}K is equal to ${result.toFixed(2)}°C`;
    }
}
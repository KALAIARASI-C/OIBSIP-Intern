function convertTemperature() 
{
    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");
    // Validation
    if (temp === "" || isNaN(temp))
    {
        result.innerHTML = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }
    temp = parseFloat(temp);
    let converted;
    if (unit === "celsius")
    {
        let fahrenheit = (temp * 9/5) + 32;
        let kelvin = temp + 273.15;
        converted = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    }
    else if (unit === "fahrenheit")
    {
        let celsius = (temp - 32) * 5/9;
        let kelvin = celsius + 273.15;
        converted = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    }
    else if (unit === "kelvin") 
    {
        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;
        converted = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }
    result.innerHTML = converted;
    result.style.color = "green";
}

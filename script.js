function convertTemperature() {
  const temperature = Number(document.getElementById("temperature").value);
  const tempSelection = document.getElementById("tempSelection").value;
  const conversionType = document.getElementById("conversionType").value;
  let result;

  if (tempSelection === "kelvin" && conversionType === "celsius") {
    result = temperature - 273.15 + " C";
  } else if (tempSelection === "kelvin" && conversionType === "fahrenheit") {
    result = ((temperature - 273.15) * 9) / 5 + 32 + " F";
  } else if (tempSelection === "celsius" && conversionType === "fahrenheit") {
    result = (temperature * 9) / 5 + 32 + " F";
  } else if (tempSelection === "celsius" && conversionType === "kelvin") {
    result = temperature + 273.15 + " K";
  } else if (tempSelection === "fahrenheit" && conversionType === "kelvin") {
    result = ((temperature - 32) * 5) / 9 + 273.15 + " K";
  } else if (tempSelection === "fahrenheit" && conversionType === "celsius") {
    result = ((temperature - 32) * 5) / 9 + " C";
  } else {
    result = "";
  }

  document.getElementById("result").innerHTML = result;
}

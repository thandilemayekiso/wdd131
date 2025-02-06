// Kenya weather data (static example)
const kenyaWeather = {
  temperature: 24, // °C
  windSpeed: 10,   // km/h
};

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
  return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(2);
}

// Display weather data for Kenya
const tempElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

const { temperature, windSpeed } = kenyaWeather;

// Update temperature and wind speed
tempElement.textContent = `${temperature} °C`;
windSpeedElement.textContent = `${windSpeed} km/h`;

// Display the wind chill only if conditions apply
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${windChill} °C`;
} else {
  windChillElement.textContent = "N/A";
  console.warn("Wind chill calculation is not applicable under current conditions.");
}

// Set current year and last modified date in the footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

  
  
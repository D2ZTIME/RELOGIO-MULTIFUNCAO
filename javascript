// Dentro do relogio.html
window.addEventListener('message', function(event) {
    if (event.data.type === 'OPEN_COLOR_PICKER') {
        // Abre o painel de cores
        document.getElementById('color-panel').style.display = 'block';
    }
    // Outros handlers...
});

async function getWeather() {
  try {
    const lat = -23.55052; // Latitude de São Paulo (exemplo)
    const lon = -46.633308; // Longitude de São Paulo (exemplo)
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`);
    const data = await response.json();
    const temperature = data.current.temperature_2m;
    document.getElementById("weather").innerText = `🌡️ ${temperature}°C em São Paulo`;
  } catch (error) {
    document.getElementById("weather").innerText = "Erro ao carregar o clima.";
  }
}

// Chamar a função ao carregar
getWeather();

// Dentro do relogio.html
window.addEventListener('message', function(event) {
    if (event.data.type === 'OPEN_COLOR_PICKER') {
        // Abre o painel de cores
        document.getElementById('color-panel').style.display = 'block';
    }
    // Outros handlers...
});

const frasesTemuzon = [
  "¡Explora lo épico con Temuzon!",
  "¿Sabías que el futuro ya llegó? Y está en Temuzon.",
  "Haz clic y sorpréndete...",
  "Tecnología con estilo, solo en Temuzon.",
  "🤖 Tu robot favorito te dice: ¡No te lo pierdas!"
];

function cambiarFrase() {
  const frase = frasesTemuzon[Math.floor(Math.random() * frasesTemuzon.length)];
  document.getElementById("frase").textContent = frase;
}

cambiarFrase();
setInterval(cambiarFrase, 8000);

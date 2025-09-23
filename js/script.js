document.addEventListener('DOMContentLoaded', function () {
  const sobreCerrado = document.getElementById('sobreCerrado');
  const solapaFrente = document.getElementById('solapaFrente');
  const sobreAbiertoVacio = document.getElementById('sobreAbiertoVacio');
  const carta = document.getElementById('carta');
  const cuadro = document.getElementById('cuadro');

  // Espera 500ms para que el sobre cerrado se vea
  setTimeout(() => {
    // Paso 1: Abrir el sobre
    sobreCerrado.classList.add('oculto');
    solapaFrente.classList.remove('oculto');
    sobreAbiertoVacio.classList.remove('oculto');

    carta.classList.remove('oculto');
    carta.classList.add('visible');

    // Paso 2: animar la carta
    setTimeout(() => {
      carta.classList.add('animada');
      carta.classList.remove('final');

      // A los 720ms (40% animación), subir el z-index
      setTimeout(() => {
        carta.classList.add('final');
      }, 720);

      // A los 1800ms (cuando termina la animación), continuar con el cuadro
      setTimeout(() => {
        solapaFrente.classList.add('oculto');

        cuadro.classList.remove('oculto');
        cuadro.classList.add('saliendo');

        // Después de salir, acomodar el cuadro y mostrar enlaces
        setTimeout(() => {
          cuadro.classList.add('acomodado');

          document.getElementById('areaMapa').classList.remove('oculto');
          document.getElementById('areaWhatsapp').classList.remove('oculto');
          document.getElementById('iconoUbicacion')?.classList.remove('oculto');
          document.getElementById('iconoWhatsapp')?.classList.remove('oculto');

        }, 1000);
      }, 1800);
    }, 500); // Delay entre mostrar carta y animarla
  }, 500); // ⏳ Este delay hace que se vea el sobre cerrado antes de iniciar
});

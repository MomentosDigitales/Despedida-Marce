document.addEventListener('DOMContentLoaded', function () {
  const sobreCerrado = document.getElementById('sobreCerrado');
  const solapaFrente = document.getElementById('solapaFrente');
  const sobreAbiertoVacio = document.getElementById('sobreAbiertoVacio');
  const carta = document.getElementById('carta');
  const cuadro = document.getElementById('cuadro');

  let estado = 0; // 0 = cerrado, 1 = abierto con carta, 2 = carta fuera

  const envelopeContainer = document.querySelector('.envelope-container');

  envelopeContainer.addEventListener('click', function () {
    if (estado === 0) {
      // Primer clic: abrir el sobre (mostrar solapa y carta parcialmente)
      sobreCerrado.classList.add('oculto');
      solapaFrente.classList.remove('oculto');
      sobreAbiertoVacio.classList.remove('oculto');

      carta.classList.remove('oculto');
      carta.classList.add('visible');

      estado = 1;

    } else if (estado === 1) {
      // Segundo clic: animar carta con salida elegante
      carta.classList.add('animada');
      carta.classList.remove('final'); // Empieza con z-index bajo

      // A los 720ms (40% del tiempo animación) sube el z-index para quedar encima de la solapa
      setTimeout(() => {
        carta.classList.add('final');
      }, 720);

      // Al terminar la animación (1800ms), continuar con la siguiente fase
      setTimeout(() => {
        solapaFrente.classList.add('oculto'); // Ocultar solapa

        cuadro.classList.remove('oculto');
        cuadro.classList.add('saliendo');

        // Después de salir, acomodar el cuadro
        setTimeout(() => {
          cuadro.classList.add('acomodado');
          // 👉 Mostrar área invisible sobre la carta
  document.getElementById('areaMapa').classList.remove('oculto');
  document.getElementById('areaWhatsapp').classList.remove('oculto');
  document.getElementById('iconoUbicacion').classList.remove('oculto');
  document.getElementById('iconoWhatsapp').classList.remove('oculto');



        }, 1000);
        

        estado = 2;
      }, 1800);
    }
  });
});

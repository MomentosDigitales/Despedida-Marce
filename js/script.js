window.onload = function () {
  // Cambio del fondo borroso al de alta calidad
  const bgLayer = document.querySelector('.background-layer');
  const highResImage = new Image();
  highResImage.src = 'img/fondo-min-2.png';
  highResImage.onload = function () {
    bgLayer.classList.add('loaded');
  };

  // Animación del sobre y la carta
  const sobreCerrado = document.getElementById('sobreCerrado');
  const solapaFrente = document.getElementById('solapaFrente');
  const sobreAbiertoVacio = document.getElementById('sobreAbiertoVacio');
  const carta = document.getElementById('carta');
  const cuadro = document.getElementById('cuadro');

  setTimeout(() => {
    sobreCerrado.classList.add('oculto');
    solapaFrente.classList.remove('oculto');
    sobreAbiertoVacio.classList.remove('oculto');

    carta.classList.remove('oculto');
    carta.classList.add('visible');

    setTimeout(() => {
      carta.classList.add('animada');
      carta.classList.remove('final');

      setTimeout(() => {
        carta.classList.add('final');
      }, 720);

      setTimeout(() => {
        solapaFrente.classList.add('oculto');

        cuadro.classList.remove('oculto');
        cuadro.classList.add('saliendo');

        setTimeout(() => {
          cuadro.classList.add('acomodado');

          document.getElementById('areaMapa').classList.remove('oculto');
          document.getElementById('areaWhatsapp').classList.remove('oculto');
          document.getElementById('iconoUbicacion')?.classList.remove('oculto');
          document.getElementById('iconoWhatsapp')?.classList.remove('oculto');
        }, 1000);
      }, 1800);
    }, 500);
  }, 500);
};

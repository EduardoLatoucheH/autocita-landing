/* AutomatIA — burbuja de navegación compartida (22/10/2026).
   Una sola fuente para las 5 páginas: insertar <header id="topbar"></header> y cargar este script.
   La pestaña activa sale de <body data-servicio="...">. Sin librerías; todo con DOM seguro (sin innerHTML). */
(function () {
  var SERVICIOS = [
    { id: 'autocita', nombre: 'AutoCita', href: '/autocita.html' },
    { id: 'autoventas', nombre: 'AutoVentas', href: '/lucia.html' },
    { id: 'pluggs', nombre: 'Pluggs', href: '/pluggs.html' },
    { id: 'automatizaciones', nombre: 'Automatizaciones', href: '/automatizaciones.html' }
  ];
  var host = document.getElementById('topbar');
  if (!host) return;
  var activo = document.body.getAttribute('data-servicio') || '';

  host.className = 'topbar';
  var wrap = document.createElement('div');
  wrap.className = 'wrap';

  var marca = document.createElement('a');
  marca.className = 'marca';
  marca.href = '/';
  marca.appendChild(document.createTextNode('Automat'));
  var ia = document.createElement('b');
  ia.textContent = 'IA';
  marca.appendChild(ia);
  wrap.appendChild(marca);

  var nav = document.createElement('nav');
  nav.className = 'burbuja';
  nav.setAttribute('aria-label', 'Servicios de AutomatIA');
  SERVICIOS.forEach(function (s) {
    var a = document.createElement('a');
    a.href = s.href;
    a.textContent = s.nombre;
    a.setAttribute('data-s', s.id);
    if (s.id === activo) a.setAttribute('aria-current', 'page');
    nav.appendChild(a);
  });
  wrap.appendChild(nav);
  host.appendChild(wrap);

  // En pantallas angostas la píldora se desplaza: dejar visible la pestaña activa.
  var cur = nav.querySelector('[aria-current]');
  if (cur && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2;
  }
})();

function decorarSelectorFecha() {
  const elem = document.querySelector('input[type=date]');
  if (elem) {
    new Datepicker(elem, {
      language: 'es'
    });
    elem.type = 'text';
  } else {
    console.log('No se ha encontrado ningún input type=date');
  }
};

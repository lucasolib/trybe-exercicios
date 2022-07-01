//localStorage.clear();

function pref(array) {
  let preferencias = [];
  let body = document.querySelector('body');
  body.style.backgroundColor = array[0];
  preferencias.push(array[0]);
  body.style.color = array[1];
  preferencias.push(array[1]);
  body.style.fontSize = array[2];
  preferencias.push(array[2]);
  body.style.fontFamily = array[3];
  preferencias.push(array[3]);
  body.style.lineHeight = array[4];
  preferencias.push(array[4]);
  localStorage.setItem('pref', JSON.stringify(preferencias));
}
//pref(['pink', 'blue', '20px','sans-serif', '50px']);

preferencias = JSON.parse(localStorage.getItem('pref'))
  if (preferencias != null) {
  pref(preferencias);
}
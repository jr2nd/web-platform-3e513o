let pretty = document.querySelector('#pretty')

pretty.addEventListener('touchstart', touchit);
pretty.addEventListener('touchmove', moveit);
pretty.addEventListener('touchcancel', cancelit);
pretty.addEventListener('touchend', touchend);

touchit() {
console.log('touch start')
}
moveit() {
  console.log('move')
}
cancelit() {
console.log('cancel')
}
touchend() {
  console.log('end')

}
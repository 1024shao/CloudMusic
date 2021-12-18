function reSize() {
  let clientWidth = document.documentElement.clientWidth || window.clientWidth
  if (clientWidth >= 750) clientWidth = 750
  if (clientWidth <= 320) clientWidth = 320

  document.documentElement.style.fontSize = (clientWidth / 7.5) * 2 + 'px'
  document.body.style.fontSize = 0.30 + 'rem'
}

reSize()

window.onresize = reSize
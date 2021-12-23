function reSize() {
	let clientWidth = document.documentElement.clientWidth || window.clientWidth
	if (clientWidth >= 750 / 2) clientWidth = 750 / 2
	if (clientWidth <= 320 / 2) clientWidth = 320 / 2
	document.documentElement.style.fontSize = (clientWidth / 7.5) * 2 + 'px'
	document.body.style.fontSize = 0.3 + 'rem'
}
reSize()
window.onresize = reSize

function iniciarJogo() {

  pincel.lineWidth = 6
  pincel.strokeStyle = '#0A3871'
  pincel.beginPath()
  pincel.moveTo(0, 0)
  pincel.moveTo(150, 300)
  pincel.lineTo(250, 300)
  pincel.stroke()

  contador = 0
  contadorLetraError = 0
  listandoLetras = []
  vencedor = false
  plvEmJogo = []

  let numero = Math.floor(Math.random() * listaDePalavras.length)
  jogarPlv = listaDePalavras[numero].toUpperCase().split('')
  for (let i = 0; i < jogarPlv.length; i++) {
    pincel.moveTo(300 + 60 * i, 300)
    pincel.lineTo(350 + 60 * i, 300)
    pincel.stroke()
  }
}
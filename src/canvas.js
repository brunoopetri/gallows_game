function criarBoneco(counter) {
  //Poste
  if (counter == 0) {
    pincel.moveTo(200, 285)
    pincel.lineTo(200, 50)
    pincel.stroke()
    counter++
    return counter
    //braço do poste
  } else if (counter == 1) {
    pincel.moveTo(200, 50)
    pincel.lineTo(300, 50)
    pincel.stroke()
    counter++
    return counter
    //Corda
  } else if (counter == 2) {
    pincel.moveTo(300, 50)
    pincel.lineTo(300, 70)
    pincel.stroke()
    counter++
    return counter
    //Cabeça do boneco
  } else if (counter == 3) {
    pincel.beginPath()
    pincel.arc(300, 90, 20, 0, 2 * Math.PI)
    pincel.stroke()
    counter++
    return counter
    //Corpo /tronco do boneco
  } else if (counter == 4) {
    pincel.beginPath()

    pincel.moveTo(300, 110) //160
    pincel.lineTo(300, 190) //240
    pincel.stroke()
    counter++
    return counter
    //Perna direita
  } else if (counter == 5) {
    pincel.moveTo(300, 190)
    pincel.lineTo(270, 220) //270
    pincel.stroke()
    counter++
    return counter
    //perna esquerda
  } else if (counter == 6) {
    pincel.moveTo(300, 190) //240
    pincel.lineTo(330, 220) //270
    pincel.stroke()
    counter++
    return counter
    //braço diteito
  } else if (counter == 7) {
    pincel.moveTo(300, 130) //180
    pincel.lineTo(270, 160) //210
    pincel.stroke()
    counter++
    return counter
    //braço esquerdo
  } else if (counter == 8) {
    pincel.moveTo(300, 130)
    pincel.lineTo(330, 160)
    pincel.stroke()
    counter++
    derrota()
    swal(
      'Derrota!',
      `A palavra era: "${jogarPlv.join(
        ''
      )}", clique em novo jogo se você quiser jogar novamente.`,
      'error'
    )
    return counter
  } else {
    return
  }
}
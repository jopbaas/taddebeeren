basic.forever(function () {
    music.setVolume(255)
    music.ringTone(247)
    music.ringTone(147)
    music.playTone(988, music.beat(BeatFraction.Double))
    serial.writeValue("y", 9)
    music.playMelody("C G B E A D F C5 ", 120)
})

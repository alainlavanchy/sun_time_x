input.onButtonPressed(Button.A, function () {
    Pin += 1
    allPinsNull()
})
input.onButtonPressed(Button.B, function () {
    Pin += -1
    allPinsNull()
})
function allPinsNull () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
allPinsNull()
let Lichtsensor = 0
let Pin = 0
basic.forever(function () {
    if (Pin == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (Pin == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (Pin == 3) {
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else if (Pin == 4) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (Pin == 5) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else {
        allPinsNull()
    }
    basic.pause(100)
    Lichtsensor = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Lichtsensor)
})

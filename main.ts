input.onButtonPressed(Button.A, function () {
    basic.showNumber(GP2Y1051.getData())
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P8, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P8, 0)
})
basic.showIcon(IconNames.Happy)
GP2Y1051.setSerial(SerialPin.P2)

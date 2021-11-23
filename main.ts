let multiplo = 0
function Multiplo () {
	
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    multiplo = randint(1, 3)
    basic.showString("T:")
    basic.showNumber(multiplo)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(multiplo)
        basic.showIcon(IconNames.No)
        basic.showNumber(index)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.showNumber(multiplo * index)
    }
})

input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . . . # .
        . # # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("GO!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . . # . .
        . # . . .
        . # # . .
        . . . . .
        `)
})
basic.showString("racing")

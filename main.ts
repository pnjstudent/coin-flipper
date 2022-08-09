input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showString("Heads")
    } else {
        basic.showString("Tails")
    }
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
	
})

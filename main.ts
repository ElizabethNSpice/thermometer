basic.forever(function () {
    if (input.temperature() >= 25) {
        basic.showString("It's hot")
        basic.showString("" + (input.temperature()))
    } else if (input.temperature() < 25 && input.temperature() >= 15) {
        basic.showString("it's warm")
        basic.showString("" + (input.temperature()))
    } else if (input.temperature() < 15 && input.temperature() >= 5) {
        basic.showString("it's cool")
        basic.showString("" + (input.temperature()))
    } else if (input.temperature() < 5) {
        basic.showString("it's cold")
        basic.showString("" + (input.temperature()))
    } else {
    	
    }
})

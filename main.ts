function SvingVB () {
    SuperBit.StepperDual(0, Modul_1B)
}
function SvingHB () {
    SuperBit.StepperDual(Modul_1B, 0)
}
function Stopp () {
    SuperBit.StepperDual(0, 0)
}
function Bak () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    SuperBit.StepperDual(Modul_1B, Modul_1B)
}
function RoterH () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    SuperBit.StepperDual(Modul_1F, Modul_1B)
}
function SvingVF () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    SuperBit.StepperDual(0, Modul_1F)
}
function Fram () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    SuperBit.StepperDual(Modul_1F, Modul_1F)
}
function SvingHF () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    SuperBit.StepperDual(Modul_1F, 0)
}
let Modul_1B = 0
let Modul_1F = 0
Modul_1F = -45
Modul_1B += 45
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.pause(2000)
basic.forever(function () {
    if (CrocoKit_Sensor.IR(DigitalPin.P0, CrocoKit_Sensor.enObstacle.NoObstacle) && CrocoKit_Sensor.IR(DigitalPin.P1, CrocoKit_Sensor.enObstacle.NoObstacle)) {
        Fram()
    } else if (CrocoKit_Sensor.IR(DigitalPin.P0, CrocoKit_Sensor.enObstacle.Obstacle)) {
        Stopp()
        for (let index = 0; index < 2; index++) {
            Bak()
            SvingHB()
            SvingHB()
            SvingHB()
        }
    } else if (CrocoKit_Sensor.IR(DigitalPin.P1, CrocoKit_Sensor.enObstacle.Obstacle)) {
        Stopp()
        for (let index = 0; index < 2; index++) {
            Bak()
            SvingVB()
            SvingVB()
            SvingVB()
        }
    }
})

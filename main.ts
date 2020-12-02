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
    SuperBit.StepperDual(Modul_1B, Modul_1B)
}
function RoterH () {
    SuperBit.StepperDual(Modul_1F, Modul_1B)
}
function SvingVF () {
    SuperBit.StepperDual(0, Modul_1F)
}
function Fram () {
    SuperBit.StepperDual(Modul_1F, Modul_1F)
}
function SvingHF () {
    SuperBit.StepperDual(Modul_1F, 0)
}
let Modul_1B = 0
let Modul_1F = 0
basic.showIcon(IconNames.Surprised)
Modul_1F = 540
Modul_1B += -540
basic.pause(2000)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        Fram()
        SvingHF()
        Fram()
        Bak()
        SvingVB()
        Bak()
    }
    RoterH()
})

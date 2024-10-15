/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe
 * Created on: Oct 2024
 * This program reads in the amount of light
*/

let neopixelStrip: neopixel.Strip = null
let lightLevel = input.lightLevel()

input.onButtonPressed(Button.A, function() {
    if (lightLevel <=51) {
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }
    
    if (lightLevel)
})
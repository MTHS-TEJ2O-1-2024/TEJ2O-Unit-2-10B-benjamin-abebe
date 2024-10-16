/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe
 * Created on: Oct 2024
 * This program reads in the amount of light
*/

let neopixelStrip: neopixel.Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// clear screen and show happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button A is pressed
input.onButtonPressed(Button.A, function () {
    // Read the current light level each time the button is pressed
    let lightLevel = input.lightLevel()

    // Clear all pixels to black initially
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

    if (lightLevel <= 51) {
        // Do nothing, all pixels remain off (already set to black)
    }

    if (lightLevel > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }

    if (lightLevel > 104) {
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }

    if (lightLevel > 156) {
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }

    if (lightLevel > 208) {
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }

    // Show the updated NeoPixels
    neopixelStrip.show()

    // Clear screen and show happy face
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

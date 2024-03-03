---
sidebar_position: 2
---

# Firmware

Gimbal firmware is written in [rust](https://www.rust-lang.org/).

## Procuring / Bill of Materials

You can download a copy of the latest firmware at https://github.com/cdaringe/gimbal-motion,
or use [this link for a direct source code download](https://github.com/cdaringe/gimbal-motion/archive/refs/heads/main.zip).

At the time of writing, we do not offer pre-built binaries. **To install the firmware, you must install the build toolchain**.

## Features

- Pan/Tilt motion
- Velocity tuning
- GCode control interface
- GUI control. See the [GUI page](./user-interface)

## GCode

See [the gcode module](https://github.com/cdaringe/gimbal-motion/blob/main/src/gcode.rs#L2) for the supported GCode.

#!/usr/bin/env node

import Color from "color";

const color = Color(process.argv[2]);
const backgroundColor = Color(color.isLight() ? "#000000" : "#ffffff");

const text =
  process.argv[3] ??
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `;

const [hue, saturation, lightness] = color.hsl().array();

const colorSequence = `\x1b[38;2;${color.red()};${color.green()};${color.blue()}m`;
const backgroundColorSequence = `\x1b[48;2;${backgroundColor.red()};${backgroundColor.green()};${backgroundColor.blue()}m`;
const resetSequence = "\x1b[0m";

console.log(`${backgroundColorSequence}${colorSequence}
${color.hex()}
rgb(${color.red()} ${color.green()} ${color.blue()})
hsl(${hue} ${saturation}% ${lightness}%)

${text}${resetSequence}
`);

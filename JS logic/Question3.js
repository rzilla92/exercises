/*
Write a function that converts HEX to RGB.
Then Make that function auto-dect the formats
so that if you enter HEX color format it returns RGB
and if you enter RGB color format it returns HEX.
*/

/*
 Thought process
 1. create both type of conversion first (W3 school provides a tutorial on this https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html)
 2. create another function to detect whether input is rgb/hex
 3. adjust conversion function to take in input after detection function
*/

let input = "#0044ff"

// rgb to hex conversion function
function rgbToHex(input) {
    input = input.substr(3).slice(1,-1).split(','); // converts rgb input into array
    const r = +input[0] // unary plus operator (+) to convert a string into a floating point number.
    const g = +input[1] // it needs to be number or the return will take it as a string
    const b = +input[2]
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

 // hex to rgb conversion function from w3 school 
function hexToRgb(hex) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

// function to detect HEX/RGB input
function convertColor (input) {
 if(input.includes('#') === true) { //if input contains #, then hex conversion is used
    let hex = input
    return hexToRgb(hex)
 } else if(input.includes('rgb')===true) { // else if input includes "rgb", then rgb conversion is used
    return rgbToHex(input)
 } 
 return "invalid color space!" // if input doesn't contain any of those, will return this string
}
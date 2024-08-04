const asciiToText = (string) => {
  return string.split('').map((char) => {
    const asciiCode = char.charCodeAt(0);
    return asciiCode.toString(2).padStart(8, '0');
  });
};

const input = 'novios';
const binaryAscii = asciiToText(input);

console.log(binaryAscii);

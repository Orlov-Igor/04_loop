function xmasTree(pyramidHeight, symbol) {
    let xmas = '';
    if (symbol.length > 1) {
       alert('Введите один символ');
    } else {
      
        for (let i = 1; i <= pyramidHeight; i++) {
        xmas += symbol.repeat(i);
        xmas += '\n';
      };
    }
    
    return xmas;
};

let vertSize = prompt('Введите высоту пирамиды');
let symbol = prompt('Введите символ');

console.log(xmasTree(vertSize, symbol));

module.exports = { xmasTree };


// function xmasTree(pyramidHeight, symbol) {
//     let xmas = '';
//     var pyramidHeight /* = prompt('Введите высоту пирамиды')*/;
    
//     for (var i = 1; i <= pyramidHeight; i++) {
      
//         for (var j = 1; j <= pyramidHeight; j++) {
        
//           if (j > i) {
//           break;
//           };
//           xmas += symbol;
//         };
//         xmas += '\n';
//     };
    
//     return xmas;
// }


// console.log(xmasTree(5, '*'));

// module.exports = { xmasTree };



function xmasTree(pyramidHeight, symbol) {
    let xmas = '';
    var pyramidHeight /*= prompt('Введите высоту пирамиды')*/;
    var space = ' ';

    for (var i = 1; i <= pyramidHeight; i++) {

        for (var j = 1; j <= pyramidHeight; j++) {

            if (j > pyramidHeight - i) {
            xmas += symbol;
            } else {
            xmas += space;
            };
        };
        
        for (var j = 2; j <= pyramidHeight; j++) {
          
            if (j > i) {
            break;
            };
            xmas += symbol;
            };
                
      xmas += '\n';
    };
    return xmas;
}

console.log(xmasTree(5, '$'));

module.exports = { xmasTree };



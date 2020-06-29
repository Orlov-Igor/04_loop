// function xmasTree(pyramidHeight, symbol) {
//     let xmas = '';
//     var pyramidHeight = prompt('Введите высоту пирамиды');
    
//     for (var i = 1; i <= pyramidHeight; i++) {
//       for (var j = 1; j <= pyramidHeight; j++) {
//         if (j > i) {
//           break;
//         };
//         xmas += symbol;
//       };
//       xmas += "\n";
//     };
    
//     return xmas;
// }


// console.log(xmasTree(5, '*'));

// module.exports = { xmasTree };



function xmasTree(pyramidHeight, symbol) {
    let xmas = '';
    var pyramidHeight = prompt('Введите высоту пирамиды');
    var pyramidWidth = pyramidHeight * 2 - 1;
    var space = " ";

    for (var i = 1; i <= pyramidHeight; i++) {
      for (var j = 1; j <= pyramidWidth; j++) {
        if (j >= pyramidHeight - i && j <= pyramidHeight + i) {
            xmas += symbol;
        } else {
            xmas += space;
        }
        };
      xmas += "\n";
    };
    
    return xmas;
}


console.log(xmasTree(5, '*'));

module.exports = { xmasTree };


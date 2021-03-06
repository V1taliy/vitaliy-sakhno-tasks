/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */



function fillSpiralMatrix(matrix) {
  let result = [[]];

  // Ваш код
  var goAround = function(matrix) {
    if (matrix.length == 0) {
        return;
    }

    result = result.concat(matrix.shift());

    for (var j=1; j < matrix.length - 1; j++) {
        result.push(matrix[j].pop());
    }
 
    result = result.concat(matrix.pop().reverse());

    for (var k = matrix.length -2; k > 0; k--) {
        result.push(matrix[k].shift());
    }

    return goAround(matrix);
};

goAround(matrix);

return result;
};

export default fillSpiralMatrix;


// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.reduce((sum,a)=>sum.concat(a)).sort((a,b)=>a-b);
}

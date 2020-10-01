
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.reduce((sum,a)=>sum.concat(a.sort((a,b)=>{if(matrix.indexof(a)%2!==0)return a-b; else return b-a})));
}

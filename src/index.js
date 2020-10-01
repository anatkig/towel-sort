
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    if(!matrix) return [];
  return matrix.reduce((sum,a)=>sum.concat(a.sort((c,b)=>{if(matrix.indexOf(a)%2===0)return c-b; else return b-c})));
}

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var elemento = 'a';
var idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);
// [0, 2, 4]

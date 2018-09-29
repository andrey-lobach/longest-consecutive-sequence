module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;
  array.sort(function(a, b){return a - b;});
  let sequnces = [];
  let count = 1;
  for(let i = 1; i < array.length; i++) {
      if (array[i - 1] == array[i]) continue;
      if (array[i - 1] == array[i] - 1) count++;
      else {
          sequnces.push(count);
          count = 1;
      }
      if (i == array.length - 1) sequnces.push(count);
  }
  let max = 1;
  for(let i = 0; i < sequnces.length; i++)
      if (sequnces[i] > max) max = sequnces[i];
  return max;
}

module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;
  let set = new Set();
  for(let i = 0; i < array.length; i++)
      set.add(array[i]);
  let min = 0, max = 0;
  for (let item of set){
      if (item > max) max = item;
      if (item < min) min = item;
  }
  let sequnces = [];
  let count = 0;
  for(let i = min; i <= max; i++) {
      if (set.has(i)) count++;
      else {
          sequnces.push(count);
          count = 0;
      }
      if (i == max) sequnces.push(count);
  }
  let maxSeq = 1;
  for(let i = 0; i < sequnces.length; i++)
      if (sequnces[i] > maxSeq) maxSeq = sequnces[i];
  return maxSeq;
}

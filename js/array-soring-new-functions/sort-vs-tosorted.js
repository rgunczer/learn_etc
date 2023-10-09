

function theSort() {
  console.log('the "sort" method will sort the original array in place');

  const original = ['orange', 'grapes', 'apple', 'green', 'blue', 'yellow'];
  const sorted = original.sort();

  console.log('sorted: ', sorted);
  console.log('original: ', original);
  console.log('\n\n');
}


function theNewToSorted() {
  console.log('the "toSorted" method will return a new sorted array and leave the original intact');

  const original = ['orange', 'grapes', 'apple', 'green', 'blue', 'yellow'];
  const sorted = original.toSorted(); 
  
  console.log('sorted: ', sorted);
  console.log('original: ', original);
  console.log('\n\n');
}


theSort();
theNewToSorted();


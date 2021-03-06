/* 
1. Write a function that returns a function with closure
over a 'count' variable that increments each time
*/

function closureCounter() {
  var count = 0;
  return function() {
    return ++count;
  };
}

// Tests for #1
closureCounter()(); // 1
closureCounter()(); // 1
var firstCounter = closureCounter();
firstCounter(); // 1
firstCounter(); // 2
var secondCounter = closureCounter();
secondCounter(); // 1
firstCounter(); // 3

/* 
2. Write a function to act as a module (or API) using closure.
  It should have a private variable called "items" which is an empty array.
  It should return an object with four methods:
      addItem - insert an item at the end of the private array
      removeItemAt - given an index, remove an item from the private array at that index,
                   and returns the removed item
      getItemAt - given an index, return an item from the private array with at that index
      getAll - return a copy of the private array
*/

function itemModule() {
  var items = []; // "private" variable
  return {
    // methods
    addItem: function(item) {
      items.push(item);
      return item;
    },
    getItemAt: function(idx) {
      return items[idx];
    },
    removeItemAt: function(idx) {
      return items.splice(idx, 1)[0];
    },
    getAll: function() {
      return items.concat();
    }
  };
}

// Tests for #2
var instance = itemModule();
instance.addItem('taco');
instance.getItemAt(0); // taco
instance.addItem('burrito');
instance.getAll(); // ['taco', 'burrito']
instance.removeItemAt(0); // 'taco'
instance.getAll(); // ['burrito']

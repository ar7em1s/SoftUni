/*Implement a class List, which keeps a list of numbers, sorted in ascending order. It must support the following functionality:
· add(element) - adds a new element to the collection
· remove(index) - removes the element at position index
· get(index) - returns the value of the element at position index
· size - number of size stored in the collection
The correct order of the size must be kept at all times, regardless of which operation is called. Removing and retrieving size shouldn’t work if the provided index points outside the length of the collection 
(either throw an error or do nothing). Note the size of the collection is not a function.
Input / Output:
All functions that expect input will receive data as parameters. 
Functions that have validation will be tested with both valid and invalid data.
Any result expected from a function should be returned as its result. 
Your add and remove functions should return a class instance with the required functionality as its result.*/

class List {
  constructor() {
    this.elements = [];
    this.size = this.elements.length;
  }

  add(element) {
    this.elements.push(Number(element));
    this.elements.sort((a, b) => a - b);
    this.size++;

    return this.elements;
  }

  remove(idx) {
    if (idx >= 0 && idx < this.elements.length) {
      this.elements.splice(idx, 1);
      this.size--;
    }
    return this.elements;
  }

  get(idx) {
    if (idx >= 0 && idx < this.elements.length) {
      return this.elements[idx];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

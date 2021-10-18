const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if(!this.nodeRoot) {
      this.nodeRoot = newNode;
      return this.nodeRoot;
    }
    let currentNode = this.nodeRoot;
    while (currentNode) {
      if(currentNode.data === newNode.data) {
        return;
      }
      if(newNode.data < currentNode.data) {
        if(!currentNode.left){
          currentNode.left = newNode;
          return;
      }
      currentNode = currentNode.left;
      }
      if(newNode.data > currentNode.data) {
        if(!currentNode.right){
          currentNode.right = newNode;
          return;
      }
      currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.nodeRoot;
    while(currentNode){
        if(data === currentNode.data) {
          return true;
        }
        if(data < currentNode.data){
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
    }
    return false;
  }

  find(data) {
    if(!this.nodeRoot) {
      return null;
    }
    let currentNode = this.nodeRoot;
    while(currentNode){
    if(data === currentNode.data) {
      return currentNode;
    }
    if(data < currentNode.data){
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.nodeRoot;
    let min = currentNode.data;

    while(currentNode){
      min = currentNode.data;
      currentNode = currentNode.left;
    }

    return min;
  }

  max() {
    let currentNode = this.nodeRoot;
    let max = currentNode.data;
    while(currentNode){
      max = currentNode.data;
      currentNode = currentNode.right;
    }
    return max;
  }

}

//Example of linked list in javascript
// Ejemplo de linked list en javascript

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //methods
  //Insert first node

  insertFirst = (data) => {
    // We put this.head as a next, because if there is something already as a head, we want to push that value as the next one
    this.head = new Node(data, this.head);
    this.size++;
  };

  insertLast = (data) => {
      const node = new Node(data);
      //if there is no head, means that this is the first element, so this is going to be the new head
      if(!this.head){
        this.head = node;
      } else {
            let current = this.head;
            // we are iterating across the list, setting current to be the next one, until next is empty
            // this means that is the end of the list, so, at the end, current is going to have 
            // the last value of the list at that moment, then we are going to push into the next value 
            // the value that we want to add.
          while(current.next){
              current = current.next;
          }
          current.next = node;
          
      }
      this.size++;
    
  }

  insertAtIndex = (data, index) => {
      const node = new Node(data);
      if(index === 0){
          this.insertFirst(data);
      } else if(index > size){
          this.insertLast(data);
      } else {
          let node = new Node(data);
          let current, prev;
          let count = 0; 
          current = this.head;
          while(count < index){
            prev = current; // the node before the index
            count++;
            current = current.next; // node after index 
          }  
          node.next = current;
          prev.next = node;
      }
  }

  // get at index

  //Remove at index

  // clear list

  //Print list Data
  printListData = () => {
    while (this.head) {
      let current = this.head;
      console.log(current.data);
      this.head = this.head.next;
    }
  };
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400)
linkedList.printListData();

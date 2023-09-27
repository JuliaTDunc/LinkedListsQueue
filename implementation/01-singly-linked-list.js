
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode(val)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
       return this
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let curr = this.head;
        while(curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
       return this;
    }

    removeFromHead() {
        let currHead = this.head;
        if(!this.length) {
            return undefined;
        }
        this.length--;
        this.head = this.head.next
        return currHead;
       
    }

    removeFromTail() {
        let currTail;
        if(this.length === 1) {
            currTail = this.head
            this.head = null;
            return currTail;
        }
        let currNode = this.head;
        while(currNode.next) {
            currNode = currNode.next
            currTail = this.value;
        }
        console.log(currTail)
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
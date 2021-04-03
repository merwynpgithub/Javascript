//Classes are Templates to create objects
//Classes have a constructor method to store properties.
//Node class is used to create node object that will store data when
//initialized with new keyword
//Node object also has a next property initalized to null

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;       //initially null
    }
}

//Linked List template to create a linkedlist Object with head property
//Head property is null initially

class LinkedList {
    constructor() {
        this.head = null;
    }

    //Initialize head property of linkedlist

    InitIfHeadIsNull() {
        if (this.head === null) {
            this.head = new Node(0);
        }
    }

    //InsertFirst method in the LinkedList class
    //1.Run initialize head if null method
    //2.Then create a data node, stores data in it
    //And next property of data node points to head.next(node pointed by head)
    //3.And then head node next property points to the data node
    //4.Then length data in the head node is incremented

    insertFirst(data) {
        this.InitIfHeadIsNull();  //1.

        let dataNode = new Node(data, this.head.next); //2.
        this.head.next = dataNode;                     //3.
        this.head.data++;                              //4.
    }



    //Printlist method
    //1.Check if linkedlist is initalized (head is not null and if it point
    //to a data node. use initialize method
    //2.Traverse the loop.
    //2.a. set a temp variable to linkedlist head property to start traversing
    //2.b. print the head data(length)
    //2.c. traverse the list of nodes using a loop and print the next 
    //property of each following node
    printList() {
        this.InitIfHeadIsNull();  //1.
        // if (this.head === null) {
        //     console.log("LinkedList is empty"); 
        // }                                            
        let nodepointer = this.head;       //2.a.
        console.log(nodepointer.data);     //2.b.
        // console.log(nodepointer.next);
        while (nodepointer != null) {      //2.c.
            console.log(nodepointer.next);
            nodepointer = nodepointer.next;
        }

    }

    insertLast(data) {
        this.InitIfHeadIsNull();  //1.
        let lastNode;
        let pointerNode = this.head;
        while (pointerNode != null) {
            // this.head = this.head.next;
            lastNode = pointerNode;
            pointerNode = pointerNode.next;
            // this.head = pointerNode;
        }
        let dataNode = new Node(data);
        lastNode.next = dataNode;
        this.head.data++;
    }
    
    insertAt(position, data) {
        this.InitIfHeadIsNull();
        let maxSize = this.head.data;

        //Check if position is negative, which is not allowed
        if (position < 0) {
            console.log("Posn cannot be negative");
        }

        //Check if position is greater than head data(length)
        else if (position > maxSize) {
            console.log("Posn cannot be big");
        }
        

        else {
            let count;
            let nodepointer = this.head;
            for (count = 0; count < position; count++) {
                nodepointer = nodepointer.next;
            }
            let dataNode = new Node(data);
            dataNode.next = nodepointer.next;
            nodepointer.next = dataNode;
            this.head.data++;
        }

    }
}

// var n1 = new Node(100);
var L1 = new LinkedList();
L1.insertFirst(100);
L1.insertFirst(200);
L1.insertFirst(300);
L1.insertAt(0, 400);
L1.insertAt(1, 500);
L1.insertAt(5, 600);
L1.printList();
// L1.insertLast(400);
// L1.printList();
// L1.insertLast(500);
// L1.printList();
// L1.insertAt(2, 600);
// L1.printList();
// L1.insertAt(3, 700);
// L1.printList();
// L1.insertAt(4, 800);
// L1.printList();
// L1.insertAt(-2, 900);
// L1.printList();
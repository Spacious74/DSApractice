// Declare a class to make a node of linked list which is considered as the last node 
// like [data](next)->[data](next)->[data](next)-> null
class  Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function printLinkedList(head){
    let temp = head;
    while(temp != null){
        console.log(temp.data);
        temp = temp.next;
    }

}

function addDataToList(data, head){
    let temp = head;
    while(temp != null){
        temp = temp.next;
    }
    temp.data = data;
    temp.next = null;
    printLinkedList(head);
}

let head = new Node(3);
addDataToList(4,head);
printLinkedList(head);
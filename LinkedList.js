class Node {
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

function rearrangeList(head){
    let temp = head;
    let arr = [];
    while(temp!=null){
        arr.push(temp.data);
        temp = temp.next;
    }
    console.log(arr);

    let index = 0;
    let size = arr.length;
    let temp2 = head;
    while (index < size) {
        if(index%2 == 0){
            temp2.data = arr.shift();
        }else{
            temp2.data = arr.pop();
        }
        temp2 = temp2.next 
        index++;
    }

    printLinkedList(head);
}



let head = new Node(100);
head.next = new Node(200);
head.next.next = new Node(300);
head.next.next.next = new Node(400);
head.next.next.next.next = new Node(500);
head.next.next.next.next.next = new Node(600);

// printLinkedList(head);
rearrangeList(head);
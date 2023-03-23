class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function findIntersection(headA, headB){

    let currA = headA;
    let currB = headB;

    while(currA != currB){
        currA = currA.next;
        currB = currB.next;
    }

}


const headA = new Node(100);
headA.next = new Node(200);
headA.next.next = new Node(300);
headA.next.next.next = new Node(400);
headA.next.next.next.next = new Node(500);
headA.next.next.next.next.next = new Node(600);

const headB = new Node(110);
headB.next = new Node(210);
headB.next.next = new Node(310);
headB.next.next.next = new Node(410);
headB.next.next.next.next = new Node(510);
headB.next.next.next.next.next = new Node(600);

findIntersection(headA, headB);

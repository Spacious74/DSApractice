// Floyyd Worshel's algorithm

// This is another approach this is not floyyd worshel's algorithm
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
    this.visited = false;
  }
}

function detectLoop(head) {
  let temp = head;

  while (temp != null) {
    if (temp.visited === true) {
      return true;
    }

    temp.visited = true;

    temp = temp.next;
  }

  return false;
}
function printLinkedList(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}
let head = new Node(100);
head.next = new Node(200);
head.next.next = new Node(300);
head.next.next.next = new Node(400);
head.next.next.next.next = new Node(500);
head.next.next.next.next.next = new Node(600);
//Pointing the next of last node to the third node
// head.next.next.next.next.next.next = head.next.next.next;

console.log(detectLoop(head));

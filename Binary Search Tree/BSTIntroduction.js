//  Binary tree in hierarchical data structures
class Node {
    constructor(data){
        this.data = data;
        this.right = this.left = null;
    }
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(8)

console.log(root);
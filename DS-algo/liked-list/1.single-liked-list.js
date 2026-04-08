class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//create the first node
let head = new Node(10);
//Linked the secod node
head.next = new Node(20);
// Linked the third node
head.next.next = new Node(30);
// Link the fourth node
head.next.next.next = new Node(40);
//printing linked list
let temp = head;
while (temp !== null) {
  process.stdout.write(temp.data + ' ');
  temp = temp.next;
}

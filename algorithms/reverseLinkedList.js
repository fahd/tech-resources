var reverseLinkedList = function (list){
  var prev = null;
  var node = list.head;
  var save;
  while (node){
    save = node.next;
    node.next = prev;
    prev = node;
    node = save;
  }
  return prev;
}

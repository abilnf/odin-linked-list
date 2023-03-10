const LinkedList = () => {
  let HEAD = null;
  let TAIL = null;

  const append = (value) => {
    const node = Node(value);
    if (TAIL) {
      TAIL.nextNode = node;
    } else {
      HEAD = node;
    }
    TAIL = node;
  };
  const prepend = (value) => {
    const node = Node(value);
    if (HEAD) {
      node.nextNode = HEAD;
    } else {
      TAIL = node;
    }
    HEAD = node;
  };
  const size = () => {
    let count = 0;
    let node = HEAD;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  };
  const head = () => {
    return HEAD;
  };
  const tail = () => {
    return TAIL;
  };
  const at = (index) => {
    let count = 0;
    let node = HEAD;
    while (node) {
      if (count == index) return node;
      count++;
      node = node.nextNode;
    }
    return null;
  };
  const pop = () => {
    if (HEAD === TAIL) {
      HEAD = null;
      TAIL = null;
    } else {
      let node = HEAD;
      while (node.nextNode !== TAIL) {
        node = node.nextNode;
      }
      node.nextNode = null;
      TAIL = node;
    }
  };
  const contains = (value) => {
    let node = HEAD;
    while (node) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  };
  const find = (value) => {
    let count = 0;
    let node = HEAD;
    while (node) {
      if (node.value === value) return count;
      count++;
      node = node.nextNode;
    }
    return null;
  };
  const toString = () => {
    let node = HEAD;
    let string = "";
    while (node) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    return string + "null";
  };
  const insertAt = (value, index) => {
    const insert = Node(value);
    if (index === 0) {
      if (TAIL === null) {
        TAIL = insert;
      } else {
        insert.nextNode = HEAD;
      }
      HEAD = insert;
    } else {
      let count = 0;
      let node = HEAD;
      while (node) {
        count++;
        if (count === index) {
          insert.nextNode = node.nextNode;
          node.nextNode = insert;
          if (insert.nextNode === TAIL) {
            TAIL = insert;
          }
          return;
        }
        node = node.nextNode;
      }
      throw `OutOfBoundsError - LinkedList out of bounds! (${index})`;
    }
  };
  const removeAt = (index) => {
    if (index === 0) {
      if (TAIL === HEAD) {
        TAIL = null;
      }
      HEAD = HEAD.nextNode;
    } else {
      let count = 0;
      let node = HEAD;
      while (node) {
        count++;
        if (count === index) {
          if (!node.nextNode) {
            break;
          }
          node.nextNode = node.nextNode.nextNode;
          if (!node.nextNode) {
            TAIL = node;
          }
          return;
        }
        node = node.nextNode;
      }
      throw `OutOfBoundsError - LinkedList out of bounds! (${index})`;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const Node = (value) => {
  return { value, nextNode: null };
};

const list = LinkedList();

const test = () => {
  console.log(list.toString());
  console.log(list.contains("C"));
  console.log(list.find("C"));
  console.log(list.at(2));
};

test();
list.append("C");
test();
list.append("D");
test();
list.append("E");
test();
list.prepend("B");
test();
list.prepend("A");
test();
list.insertAt("0", 0);
test();
list.insertAt("3", 3);
test();
list.removeAt(4);
test();
list.pop();
test();
list.pop();
test();
list.pop();
test();

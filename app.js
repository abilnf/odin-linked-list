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
  const insertAt = (value, index) => {};
  const removeAt = (index) => {};

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

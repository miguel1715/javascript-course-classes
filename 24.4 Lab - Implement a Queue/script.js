function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  queue.collection.push(element);
}

function dequeue(queue) {
  return queue.collection.length > 0 ? queue.collection.shift() : undefined;
}

function front(queue) {
  return queue.collection.length > 0 ? queue.collection[0] : undefined;
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return queue.collection.length > 0 ? false : true;
}
function initStack() {
    return {
        collection: []
    }
}

function push(obj, element) {
    obj.collection.push(element);
}

function pop(obj) {
    return obj.collection.pop()
}

function peek(obj) {
    return obj.collection[obj.collection.length - 1];
}

function isEmpty(obj) {
    return obj.collection.length <= 0 ? true : false;
}

function clear(obj) {
    obj.collection = [];
}
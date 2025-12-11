// Qus 2 :- Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

let arrey = ["Mayank", 3, "sumit"]

function arrayLast() {
    if (arrey.length == 0) {
        console.log("-1");
    }
    else {
        console.log(arrey[arrey.length - 1]);
    }
}

arrayLast()
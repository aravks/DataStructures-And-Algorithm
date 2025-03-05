class LL {
    #Node = class {
        next = null
        value = undefined
        
        constructor(value) {
            this.value = value
            this.next = null
        }
    }
    head = null
    tail = null
    size = 0
    
    insert(value) {
        let newNode = new this.#Node(value)
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
        return newNode
    }
    
    deleteLast() {
        console.log(this.tail.value)
        
        let curr = this.head
        
        while(curr.next !== this.tail) {
            curr = curr.next
        }
        curr.next = null
        this.tail = curr
    }
    display() {
        for(let temp = this.head; temp != null; ) {
            console.log(temp.value)
            temp = temp.next
        }
    }
    peekHead() {
        console.log(this.head.value)
    }
    peekTail() {
        console.log(this.tail.value)
    }
}

let ll = new LL()

console.log("Inserting 5, 6, 7")
ll.insert(5)
ll.insert(6)
ll.insert(7)
console.log("Displaying:")
ll.display()
console.log("head:"); ll.peekHead();
console.log("tail:"); ll.peekTail();

console.log("Deleting last element")
ll.deleteLast()
console.log("Displaying:")
ll.display()
console.log("head:"); ll.peekHead();
console.log("tail:"); ll.peekTail();

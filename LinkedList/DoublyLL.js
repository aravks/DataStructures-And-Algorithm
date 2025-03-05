class LL {
    head = null
    tail = null
    size = 0
    
    insert(value) {
        let newNode = new this.Node(value)
        if(this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
        return newNode
    }
    
    deleteLast() {
        console.log(this.tail)
        this.tail = this.tail.prev
        this.tail.next = null
    }
    
    display() {
        for(let temp = this.head; temp !== null;) {
            console.log(temp.value)
            temp = temp.next
        }
    }
    
    Node = class {
        prev = null
        next = null
        value = undefined
        constructor(value) {
            this.value = value
        }
    }
}


let ll = new LL()

ll.insert(1)
ll.insert(2)
ll.insert(4)

ll.display()

ll.deleteLast()
ll.deleteLast()

ll.display()

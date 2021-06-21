class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }

    log() {
        console.log(`${this.value} with priority ${this.priority}`)
    }
}

class PriorityQueue {
    
    constructor(){
        this.values = []
    }

    swap(index1, index2) {
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    bubbleUp() {
        let index = this.values.length - 1
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.values[parentIndex].priority > this.values[index].priority) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else{
                break;
            }
        }
        return 0;
    }

    enqueue(value) {
        this.values.push(value)
        this.bubbleUp();
        return this.values
    }

    bubbleDown() {
        let parentIndex = 0;
        const length = this.values.length;
        const elementPriority = this.values[0].priority;

        while (true) {
            //get indexes of child elements by following formula
            let leftChildIndex = (2 * parentIndex) + 1;
            let rightChildIndex = (2 * parentIndex) + 2;
            let leftChildPriority, rightChildPriority;
            let indexToSwap = null;
            // if left child exists, and is greater than the element, plan to swap with the left child index
            if(leftChildIndex < length) {
                leftChildPriority = this.values[leftChildIndex].priority
                if(leftChildPriority < elementPriority){
                    indexToSwap = leftChildIndex;
                }
            }
            //if right child exists
            if(rightChildIndex < length) {
                rightChildPriority = this.values[rightChildIndex].priority

                if(
                    //if right child is greater than element and there are no plans to swap
                    (rightChildPriority < elementPriority && indexToSwap === null) ||
                    //OR if right child is greater than left child and there ARE plans to swap
                    (rightChildPriority < leftChildPriority && indexToSwap !== null))
                {
                    //plan to swap with the right child
                    indexToSwap = rightChildIndex
                }
            }
            //if there are no plans to swap, break out of the loop
            if(indexToSwap === null) {
                break;
            } 
            //swap with planned element
            this.swap(parentIndex, indexToSwap);
            //starting index is now index that we swapped with
            parentIndex = indexToSwap;
        }  
    }

    dequeue() {
        this.swap(0, this.values.length - 1);
        let poppedNode = this.values.pop();
        if(this.values.length > 1){
            this.bubbleDown();
        }
        
        return poppedNode;
    }
}

class JobRunner {
    jobs = [];
    constructor(priorityQueue) {
        this.priorityQueue = priorityQueue;
        console.log('JobRunner')
    }

    enqueue(val) {
        this.jobs = this.priorityQueue.enqueue(val);
    }

    run() {
        this.jobs.forEach(job => {
            job.log();
        })
    }
}

const runner = new JobRunner(new PriorityQueue);
for (let i = 0; i < 10; i++) {
    const priority = Math.floor(Math.random() * 10);
    runner.enqueue(new Node(`job #${i}`, priority));
}

runner.enqueue(new Node(`job External`, 3));

runner.run();

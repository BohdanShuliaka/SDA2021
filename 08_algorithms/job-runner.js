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

    enqueue(qElement) {
        var contain = false;
    
        for (var i = 0; i < this.values.length; i++) {
            if (this.values[i].priority > qElement.priority) {
                this.values.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.values.push(qElement);
        }

        return this.values;
    }

    dequeue() {
        return this.values.length === 0 ? "Underflow" : this.values.shift();
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

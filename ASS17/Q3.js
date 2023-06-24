var countStudents = function(students, sandwiches) {
    const queue = students;
    const stack = sandwiches;
    let count = 0;
    
    while(queue.length > 0) {
        if(queue[0] === stack[0]) {
            queue.shift();
            stack.shift();
            count = 0;
        } else {
            queue.push(queue.shift());
            count++;
        }
        if(count === queue.length) break;
    }
    
    return queue.length;
};

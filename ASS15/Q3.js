function Stack() {
    this.q1 = [];
    this.q2 = [];
  }
  Stack.prototype.push = function(item) {
    this.q1.push(item);
  };
  Stack.prototype.pop = function() {
    if (this.q1.length === 0) {
      throw new Error("Stack is empty");
    }
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const item = this.q1.shift();
    this.q1 = this.q2;
    this.q2 = [];
    return item;
  };
  Stack.prototype.peek = function() {
    if (this.q1.length === 0) {
      throw new Error("Stack is empty");
    }
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const item = this.q1.shift();
    this.q1.push(item);
    this.q2 = [];
    return item;
  };
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // 3
  console.log(stack.pop()); // 2
  console.log(stack.pop()); // 1
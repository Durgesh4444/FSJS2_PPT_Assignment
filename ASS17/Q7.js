class FrontMiddleBackQueue {
    constructor() {
      this.q = [];
    }
    
    pushFront(val) {
      this.q.unshift(val);
    }
    
    pushMiddle(val) {
      const mid = Math.floor(this.q.length / 2);
      this.q.splice(mid, 0, val);
    }
    
    pushBack(val) {
      this.q.push(val);
    }
    
    popFront() {
      if (this.q.length === 0) return -1;
      return this.q.shift();
    }
    
    popMiddle() {
      if (this.q.length === 0) return -1;
      const mid = Math.floor((this.q.length - 1) / 2);
      return this.q.splice(mid, 1)[0];
    }
    
    popBack() {
      if (this.q.length === 0) return -1;
      return this.q.pop();
    }
  }
  
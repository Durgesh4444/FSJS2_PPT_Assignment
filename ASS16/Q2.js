function sortStack(stack) {
    let tempStack = new Stack();
    while (!stack.isEmpty()) {
      let element = stack.pop();
      while (!tempStack.isEmpty() && tempStack.peek() > element) {

        stack.push(tempStack.pop());
      }
      tempStack.push(element);
    }
    
    while (!tempStack.isEmpty()) {
      
      stack.push(tempStack.pop());
    }
  }
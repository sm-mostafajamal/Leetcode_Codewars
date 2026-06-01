public class MinStack 
{
    private List<int> _stack = new();
    private List<int> _minStack = new();

    public MinStack() {
        
    }

    public void Push(int val) {
        if(_minStack.Count is 0 || _minStack[_minStack.Count - 1] >= val)
        {
            _minStack.Add(val);
        }

        _stack.Add(val);
    }
    
    public void Pop() {
        
        if(_minStack.Count != 0 && _stack[_stack.Count - 1] == _minStack[_minStack.Count - 1])
        {
            _minStack.RemoveAt(_minStack.Count - 1);
            
        }

        if(_stack.Count != 0)
        {
            _stack.RemoveAt(_stack.Count - 1);
        }

    }
    
    public int Top() {
        return _stack[_stack.Count - 1];
    }
    
    public int GetMin() {
        if(_minStack.Count == 0) return 0;
        return _minStack[_minStack.Count - 1];
    }
}
/* 
MinStack minStack = new MinStack();

// stack is now empty

minStack.Push(-2);
minStack.Push(-1);
minStack.Push(-2);

Console.WriteLine(minStack.GetMin()); // -2

minStack.Pop();

Console.WriteLine(minStack.Top());    // -1
Console.WriteLine(minStack.GetMin()); // -2

minStack.Pop();

Console.WriteLine(minStack.GetMin()); // -2

minStack.Pop();

*/
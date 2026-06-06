public class Solution
{
    public int CalPoints(string[] operations) 
    {
        Stack<int> results = new ();
        var totalPoints = 0;

        foreach(var op in operations)
        {
            if(op == "C")
            {
                results.Pop();
            }
            else if(op == "D")
            {
                var previouScore = results.Peek();
                results.Push(previouScore * 2);
            }
            else if(op == "+")
            {
                var top = results.Pop();
                var totalOfTwo = top + results.Peek();

                results.Push(top);
                results.Push(totalOfTwo);
            }
            else
            {
                results.Push(int.Parse(op));
            }
        }

        foreach (var points in results)
        {
            totalPoints += points;
        }

        return totalPoints;
    }
}

// var sol = new Solution();

// var ops = new string[] { "5","-2","4","C","D","9","+","+" }; // 27 

// Console.WriteLine(sol.CalPoints(ops));

using System.Collections;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

public class Solution {
    public ListNode ReverseList(ListNode head) {
        List<int> list = new();
        var current = head;
        ListNode revHead = null;
        
        while(current != null)
        {
            list.Add(current.val);
            current = current.next;
        }

        ListNode curr = null;

        for(var i = list.Count-1; i >= 0; i--)
        {
            if(revHead == null)
            {
                revHead = new ListNode(list[i]);
                curr = revHead;
            }
            else
            {
                curr.next = new ListNode(list[i]);
                curr = curr.next;
            }
        }

        return revHead;
    }
}
/* 
var sol = new Solution();

ListNode head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(5)
            )
        )
    )
);
sol.ReverseList(head);
 */
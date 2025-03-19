```javascript
response = fetch("something")
```
The internal mechanism of the fetch works in two parts:
1. Memory Allocation of variables
2. Web Browser/ Node


A. Memory Allocation: This reserves space in memory for some data which is the onfulfilled[] and onrejected[]. We cannot directly push values into these arrays, it is not allowed. These arrays are private fields.

B. Browser based API or Node based API: It sends a network request through either the browser or the node. If it goes to the network and returns some data then that that is always inserted into the onfulfilled[]. If the request does not go through or we do not get some reponse, then the onrejection[] gets populated.

Network errors like 404 are stored in the onfulfilled[] because the request actually went through and then it was found that this was the error.

The onfulfilled[] and onrejected[] have functions which populate the the variable we created which is the response variable which is available in the global memory.

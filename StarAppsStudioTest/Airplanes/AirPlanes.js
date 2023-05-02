function flyToDestination(arr) {
    let planesNeeded = 1; // first of all assigning minimum number i.e 1 plane needed to reach last airport
    let maxReach = arr[0]; // farthest airport where we can reach with travelling in current plane. 
    let stepsRemaining = arr[0]; //number of jumps that we take with current plane we are travelling.
  
    // if we cannot move from first airport due to 0 fuel.
    if (arr[0] === 0) {
      return -1; 
    }
  
    for (let i = 1; i < arr.length; i++) {
      if (i === arr.length - 1) {
        return planesNeeded; // If we reached to last airport, returning the minimum number of air planes needed to reach here.
      }
  
      // Update the farthest airport that we can reach with current air plane
      maxReach = Math.max(maxReach, i + arr[i]);
      
      //dcrementing the fuel by -1 for each travel.
      stepsRemaining--;
  
      //if fuel got exhausted we need to change the plane on current airport
      if (stepsRemaining === 0) {
        planesNeeded++;
  
        //if we can reach the to next airport with current number of planes, so returning -1;
        if (i >= maxReach) {
          return -1; // Cannot reach the last airport
        }
        
        //on changing a plane on airport, update the number of jumps that we can take with changed plane.
        stepsRemaining = maxReach - i;
      }
    }
  
    // If we couldn't reach the last airport, return -1
    return -1;
  }
  
  // Some Test Cases
  console.log("Test case 1 : "+flyToDestination([2, 1, 2, 3, 1])); // Expected output: 2 (2---->2---->1)  
  console.log("Test case 2 : "+flyToDestination([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Expected output: 3 (1---->6---->5--->6)
  console.log("Test case 3 : "+flyToDestination([1, 0, 0, 0, 0])); // Expected output: -1 (could not reach to last air port) (1---->?)
  console.log("Test case 4 : "+flyToDestination([2, 4, 0, 2, 1])); // Expected output: 2  (2--->4--->1)
  console.log("Test case 5 : "+flyToDestination([0, 0, 0, 0, 0])); // Expected output: -1 (cannot move from the first airport)
  console.log("Test case 6 : "+flyToDestination([1, 0, 0, 1, 1])); // Expected output: -1 (could not reach to last air port)
  
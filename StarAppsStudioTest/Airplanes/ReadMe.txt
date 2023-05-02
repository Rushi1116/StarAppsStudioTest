"Fly me to my destination - It's urgent!!"

Introduction to problem statment :-
The flyToDestination function takes an array of numbers which represent the units of fuel available at each airport and returns the minimum number of planes needed to reach the last airport or -1 if it is not possible to reach the last airport.

Working of code explained --
1. the function initializes the minimum number of planes needed to reach the last airport to 1, the farthest airport that can be reached with the current plane to the first airport, and the number of jumps that can be taken with the current plane to the fuel units available at the first airport.

2. The function iterates through the array of fuel units starting from the second airport i.e array index 1. For each airport, it checks if it is the last airport. If it is last then, the function returns the minimum number of planes needed to reach it.

3. If the current airport is not the last airport, the function updates the farthest airport that can be reached with the current plane by comparing it with the sum of the index of the current airport and the fuel units available at the current airport.

4. Then, it decrements the number of jumps that can be taken with the current plane by 1.

5. If the number of jumps that can be taken with the current plane becomes 0, the function updates the minimum number of planes needed by incrementing it by 1, and checks if the current airport is beyond the farthest airport that can be reached with the current planes. If it is, it means that it is not possible to reach the last airport, so the function returns -1. Otherwise, the function updates the number of jumps that can be taken with the new plane by subtracting the index of the current airport from the farthest airport that can be reached with the current planes.

Finally, if the last airport cannot be reached, the function returns -1.


Example:-
Input: [1, 6, 3, 4, 5, 0, 0, 0, 6]

Output: 3

Explanation:

The function starts at the first airport, which has 1 unit of fuel, and can travel to the second airport.

The second airport has 6 units of fuel, which can be used to travel to the third, fourth, fifth, sixth, seventh, or eighth airport.

If the plane stops at the fifth airport, it will need another plane to travel to the last airport, which can be reached with 6 units of fuel from the fifth airport.

Therefore, the minimum number of planes needed to reach the last airport is 3 : 1 → 6 → 5 → 6.
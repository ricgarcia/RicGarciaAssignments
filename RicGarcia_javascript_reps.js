/*1. Create a script with two variables,
each assigned to a number.
Add them together and output the result to the console.
Now do the same with two strings.*/
var one = 5;
var two = 16;
console.log(one + two);


var name = "Hi";
var nameTwo = " Mom!";
console.log(name + nameTwo);

/* 2. Create a multidimensional array related to a subject that interests you.
Output two of the items in sub-arrays to the console.*/
var fighters = ["UFC Jon Jones", "Bellator MVP"];
var drones = ["DJI Phantom", "Yunecc Typhoon H"];
console.log(drones[0],fighters[1])


/* 3. Write a script that checks if a variable is less than 100.
If it is, alert the user that their variable is less than 100.
If it is not alert the user of what the value was and that
 it was greater than 100.*/

 var x=12
 if(x<100){
   alert(x + " is less than 100")
   console.log(x + " is less than 100");
 } else{
   alert(x + " is greater than 100")
  console.log(x + " is greater than 100");
 }


/* 4. Declare a function that takes a name as an argument and
tells the user what name they've entered.*/

 function alertName(yourName){
 return alert(yourName);
}

/* 5. Declare a function that depending upon which virtual 'door'
was entered tells the user they've received a different 'prize' in an alert.
After declaring the function, try running it with different options.
There must be at least 3 doors.*/

function prize(door){
  if(door === 1){
    return alert('You won vacation to Hawaii!');
  }else if(door === 2){
    return alert('You won a new car!');
  }else if(door === 3){
    return alert('You won a $100,000.00!');
  }
  };
console.log(prize(1));

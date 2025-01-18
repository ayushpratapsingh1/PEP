//.............................................Q1 Starting...........................................................
function ask(question, yes, no) {
    //  if (confirm(question)) yes();
      //else no();
  }

  ask(
      "Do you agree?",
      () => { alert("You agreed."); },
      () => { alert("You canceled the execution."); }
  )

//.............................................Q2 Starting...........................................................

  // Q2)Identify the output of the following code
   const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
   console.log(materials.map((material) => material.length)); //Output:[ 8, 6, 7, 9 ]
   console.log("\n");

//.............................................Q3 Starting...........................................................

  // Q3)Write an arrow function called square that takes a number as an argument and returns its 
  // square
  let square = (arg)=>arg*arg;
  console.log(square(4));
  console.log("\n");

//.............................................Q4 Starting...........................................................
  // Q4)Given an array of numbers, use an arrow function to create a new array that contains the 
  // squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].
  let arr_of_numbers = [1,2,3];
  const square1 = (arr)=>{let m = arr.map((x)=>x*x); return m;}
  console.log(square1(arr_of_numbers));
  console.log("\n");
  
//.............................................Q5 Starting...........................................................
  // Q5)Use an arrow function to reverse a given string. For example, if the input is "hello", the output 
  // should be "olleh"

  const str_reverse = (string)=>{let r = string.split("").reverse().join(""); return r;}
  let answer = str_reverse("hello");
  console.log(answer);
  console.log("\n");
//.............................................Q6 Starting...........................................................
  // Q6)Create a chainable object using arrow functions that allows you to set a value and then add 
  // or multiply it by a number. For example:
  // const result = chainable(5).add(3).multiply(2); // result should be 16
  const chainable = (num) =>{
      let val = num;
      return{
          add(x){val += x; return this;},
          multiply(x){val *= x; return this;},
          final_value(){return val;}
      }
  }
  console.log(chainable(5).add(3).multiply(2).final_value());
  console.log("\n");
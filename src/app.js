// Task 4 :-Create a for loop to print all the even numbers from 1 - 200 and return the same inside the function.You will need to create an empty array, create the logic and push the output to the array and return it inside the function.

function loop(){
    let evenNumbers = []
    for(let i=1; i<=200; i++){
        if(i%2==0){
            evenNumbers.push(i)
        }
    }
    return evenNumbers

}
// Task 5 :- create a variable of string datatype and return the string output inside the function given below

function printStr(){
  var string = "Hello"
  return string
}

//Task 6:- Using DOM methods, access the id 'task6' from index.html and return the text content of id 'task6' in the same function below.

function domManip() {
    var task6 = document.getElementById('task6')
    return task6.textContent
}
//Import string from the helper file
import {strOne, strTwo, transfData} from "./helper.js"

//PART ONE: REFACTORING OLD CODE
function refactCode(str){

    let newArr = [];

    //Split the string into rows
    const rows = str.split("\n");

        //Use for loop to loop through the rows skipping the row[0]  
        for(let i=1; i< rows.length; i++){
            
            let cell = rows[i].split(",");
            
            //Create the objects
            let objs ={
                    index: +`${cell[0]}`,
                    mass: +`${cell[1]}`,
                    spring1: +`${cell[2]}`,
                    spring2: +`${cell[3]}`,
            }
    
            //Add the objects to the array
            newArr.push(objs)
   }

   return newArr;
}


//PART TWO: XPANDING FUNCTIONALITY

function expFunctionality(str){

    let arr = [];
    
    let rows = str.split("\n");
    
    for(let i = 0; i < rows.length; i++){
        let cell = rows[i].split(",");
        arr.push(cell);
    }

    return arr;
}




// PART FOUR: SORTING AND MANIPULATING DATA
let newArr = transfData(strTwo)

function sortAndManipData(arr){

    //Remove the last element from the sorted array.
    arr.pop()
    arr.sort()

    //Insert the following object at index 1:
    arr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
    
    //Add the following object to the end of the array:
    arr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

    return arr;
}

function newArrayOfObj (arr){
    
    let rows = arr.split("\n") //Retuns four arrays of elements 

    for( j = 0; j< rows.length; j++){
        
        let cells = rows[j].split(",");
        
        console.log(cells.join(" "));
   }

}


//Function to get the total age and average age of the group
function getAverageAge(arr){

    let totalAge = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        totalAge+= parseInt(arr[i].age);

}
    let avgAge = totalAge/arr.length;
    
    return `The total age is ${totalAge} and the average age of the group is ${avgAge} `
}



console.log("*------------------PART ONE----------------*")
console.log(refactCode(strOne))
console.log("*---------------------PART TWO----------------*")
console.log(expFunctionality(strTwo))
console.log("*---------------------PART THREE--------------*")
console.log(transfData(strTwo))
console.log("*---------------------PART FOUR---------------*")
console.log(sortAndManipData(newArr))
console.log((getAverageAge(newArr)))
console.log("*---------------------PART Five---------------*")
console.log(transformToCvs(newArr))

// console.log((newArr))
/*PART FIVE: FULL CIRCLE
*/

function transformToCvs(arr){
    //Create a varible to store the converted string
    let toString = "";

    //Iterate each element in the array and add strings by using template literals
    for(let i = 0; i < arr.length; i++){

        toString += `id: ${arr[i].id}, occupation: ${arr[i].occupation}, age: ${arr[i].age}`
        
        //Sepate the string by using \n
        toString += "\n";
        
    }

    //the functions return the converted string
    return toString;
}



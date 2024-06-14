export const strOne = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

export const strTwo= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//PART THREE: TRANSFORMING DATA
export function transfData(str){

    let arr = [];

    //Getting the rows using the split() metod
    let row = str.split("\n");

    let columnNum = row[0].split(",").length;

    let headers = row[0].split(",");

    //For loop to loop through each row
        for(let i=1; i<row.length; i++){
            let cells = row[i].split(",");

        //Create an object for this row
            let obj ={};

                //For loop to loop through each cell and add it to the object
                for(let j=0; j< columnNum; j++){
                    obj[headers[j].toLowerCase()] = cells[j];
                }
        
            arr.push(obj)
        }

        return arr;
}
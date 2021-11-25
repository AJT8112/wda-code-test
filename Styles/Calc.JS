let arrData = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

function getAverage(arrData){
    //Create validation of the argument passed to check the data is in an array.
    let arrValidation = true;
    if(!typeof Array.isArray(arrData)){
        arrValidation = false;
    }
    //If validation is passed then complete next steps
    if(arrValidation){
        //declare variables to build up from when the array values are able to be used as a number - set to 0 to add arrayKey and .
        let sum = 0;
        let numberQuantity = 0;
        //Iterate through each item in the array
        for(arrKey=0;arrKey < arrData.length; arrKey++){
            //select a variable to equal the current selected key in the array 
            let selectedData = arrData[arrKey];
            //test that the current item is a number, even if it is data type is a string
            if(!isNaN(selectedData)){
                //add the number to the sum variable using Number() to convert strings into numbers
                sum += Number(selectedData);
                //Add one to the quantity of numbers used each time so that this number is used to divide the sum total
                numberQuantity++;
            }
        }
        //check the total sum
        console.log(sum);
        //check the total amount of numbers used
        console.log(numberQuantity);
        //finding the average (mean) is total sum / total number of numbers used
        let average = sum / numberQuantity;
        //checking the average (mean)
        console.log(average);
        //return the average
        return average.toFixed(7);
    } else{
        return "incorrect data structure entered";
    }
}

//Selecting the first element in the HTML that matches the .runFunction selector. 
let button = document.querySelector('.runFunction');

// make event click to execute the code between the curly brackets.
button.addEventListener('click',function(event){
    
    // averageNumber is equal to the returned value from above from running the arrData function.
    let averageNumber = getAverage(arrData);
    // select the element with class 'output number here' for when clicked.
    let elementToUpdate = document.querySelector('.outputNumberHere');
    // change the inner HTML in the elementToUpdate to show the averageNumber.
    elementToUpdate.innerHTML = averageNumber;
})

// The answer should be 16.2307692
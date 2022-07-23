// Bài 1

let inputArray = [2, 3, -5, -2, 4];

function adjacentElementsProduct(inputArray) {
  let newArray = [];
  for (let i = 0; i < (inputArray.length-1); i++) {
    let result = inputArray[i] * inputArray[i + 1];

    newArray.push(result);

  }
  return Math.max(...newArray);   
 
}

console.log(adjacentElementsProduct(inputArray));

//----------------------------------------------------------

// Bài 2

let input = [60, 40, 55, 75, 64]
let weightTeam1 = []
let weightTeam2 = []
let output = []

function alternatingSums() {
    for (let key in input) {
        if (key % 2 == 0) {
            weightTeam1.push(input[key]);
        } else
            weightTeam2.push(input[key])
    }

    function sumWeight(number) {
        let sum = 0
        for (let i = 0; i < number.length; i++) {
            sum += number[i];
        }
        return sum;
    }
    weightTeam1 = sumWeight(weightTeam1)
    weightTeam2 = sumWeight(weightTeam2)

    output.push(weightTeam1, weightTeam2)
    return output;


}

console.log(alternatingSums())
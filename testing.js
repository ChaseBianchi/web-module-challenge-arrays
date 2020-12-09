const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"
]

function countWords(string){
    let count = 1;
    for(let i=0;i<string.length;i++){
        if(string[i]===" "){
            count+=1;
        }
    }
    return count;
}


function getAverageWordLength(array){
    const wordsArr = [];
    for(let i=0;i<array.length;i++){
        wordsArr.push(countWords(array[i]));
    }
    return (wordsArr.reduce(function(a,b){
      return a+b;
    },0))/array.length;
}

console.log(getAverageWordLength(originalFlavors));
console.log(originalFlavors.length);
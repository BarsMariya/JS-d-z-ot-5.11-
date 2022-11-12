const startCarCount = 1000;
const minCarCount = 10;
let day = 1;
let currentCarCount = startCarCount;
let dayMin = null;

while (currentCarCount > minCarCount) {
    currentCarCount = Math.round(currentCarCount / 2);
    day++;
}

//for (let day = 1; minCarCount < currentCarCount; day++)//
//currentCarCount = currentCarCount / 2;//
//dayMin = day;//

console.log(`Через ${day}.....`);
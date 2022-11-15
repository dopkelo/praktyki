let joinArrays = (arr1,arr2) => [... arr1, ...arr2];

let tab1 = ["Anna", "Maria"];
let tab2 = ["Tomek", "Adam","Marek","Bartek"];




let tab3 = [1,2,3,4,5];
let initialValue = 0;
let odejmowanie = tab3.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
let map1 = tab3.map( x => (x*2) +3
);
let filter1 = tab2.filter(imie => imie.length >4

)
let odwrocenie = tab3.reverse();

console.log(joinArrays(tab1,tab2));   
console.log(odejmowanie);
console.log(map1);
console.log(filter1);
console.log(odwrocenie[0]);
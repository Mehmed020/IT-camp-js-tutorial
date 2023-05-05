//let b = 10
//if (b>15){
  //  console.log("b je vece od 15")
//} else if(b=10){
  //  console.log("b je jednako 10")
//} else if(b<10){
  //  console.log("b je manje od 10")
//} else if(b<5){
  //  console.log("b je manje od 5")
//} else{
  //  console.log("broj nema resenje")
//}
//b =10//
//switch(b){
  //  case 10:
    //    console.log("b je deset")
      //  break;
    //case 5:
      //  console.log("b je pet")    
        //break;
    //case 7:
      //  console.log("b je jednako 7")    
        //break;
    //default :
      //  console.log("b je jednako 0")
        //break;
//}
//b>5 ? console.log("b je vece od pet") : console.log("b je manje od 5");

//for ( let i = 0 ; i < 10; i++){
//    console.log("ovo je petlja", i );
//console.log(b , "preskoci");

//b+=2;
//console.log(b , "petlja")
//console.log(i)//
//}

console.log("///////////////////////////////////////////////")

//let i = prompt("upisi neki broj")//

//console.log(i*-5)
//console.log(i*3)
//console.log(i*10)
///console.log(i/3)
//console.log("uradjen domaci")
//let i = 15
//if(i % 15===0){
  //console.log("fizz buzz")
//}else if(i%5===0){
//  console.log("buzz")
//}else if(i % 3===0 ){
//  console.log("fizz")
//}else{
//  console.log("broj nije deljiv sa 3 i sa 5")
//}


//for(let i = 0; i<40; i++){
// if(i%2===0){
  //console.log(i + "15");
// }else if(i%3===0){
//  console.log(i + "3")
// }else{
  //console.log("beton")
// }
//}
//

//let a = Math.floor(Math.random()* 100)+ 1;
//let  pokusaj;

//do{
 // pokusaj = prompt("unesite neki broj")
  //if (+pokusaj > a) {
  //  alert("probaj manji broj");
 // } else if (+pokusaj<a) {
   // alert("probaj veci broj")
 // }else{
  //  alert("pogodili ste broj")
 // }
//}while(+pokusaj !== a);

console.log("///////////////////////////////////////////////////////////////")
//function myFirst() {
 /// console.log(2+2)
// let a = 6;
 //let b = 9;
// let zbir = a + b;
 //return zbir;
//}
//let nekizbir = myFirst();
//console.log(nekizbir );

//function gas() {
 // a = 50;
 // b = 34;
//  let zbir = a + b;
 // return zbir;
//}
//let nekizbir = gas();
//console.log(nekizbir);

//function mysecond(argument1,argument2){
  //console.log( argument1+argument2)
//}
//mysecond(100,30);

//const farenhaint = function (far){
//  return far / 1.8 - 32;
//}
//console.log(farenhaint(50));


//////////////////////////////////////////////////////////////////////////////////////

//let cars= [ "bmw","audi","fiat","vw"];

//for (let i = cars.length - 1; i >=0; i--){
//console.log(cars[i]);
//}

//let somearray = [3,10,6,18,23,40,31]

///function getmaxnumber(niz){
  //const duzinaniza = niz.length;
 // let number = 0 ;
   
 // for (let i = 0; i < duzinaniza; i++){
    //if(number < niz[i]){
     // number = niz[i];
   // }
  //}
  //return number;

//}

//console.log(getmaxnumber(somearray));
//console.log('??????????????????????????????????????????????')

//let matrica =[
//  [1 , 2 , 3],
//  [4 , 5 , 6],
//  [7 , 8 , 9],
//];

//for (let i = 0;i<matrica.length; i++){
  //console.log(matrica[i][y])
//  for(let j = 0; j < matrica[i].length; j++){
//    console.log(matrica[i][j])
//  }
//}

/////////////////////////////////////////////////////////////////////

//let cars = ['BMW','MERCEDES','AUDI'];

//for (let car in cars){
 // console.log(cars[car]);
//}


//let cars = ['BMW','MERCEDES','AUDI','FIAT'];
//cars.push('GOLF');
//console.log(cars);
////cars.push('VW');
//console.log(cars);
//cars.unshift('ferrari');
//console.log(cars);
//cars.unshift('maserrati');
//console.log(cars);

//let numbers = [ 1,3,5,7,9];
//for (let i = 0; i<10; i++){
 // if ( i % 2 === 0 &&  i !== 0){
//    numbers.push(i);
//  }
//}
//console.log(numbers);
//console.log(numbers.reverse());

//////////////////////////////////////////////////////////////

/*const istiniz = [1,3,5,7,9];

const sumnamber = (nekiniz) => {
  let start = 0;
  for (let i = 0;  i< nekiniz.length; i++) {
   
    
  }
  return start;
}
*/
//////////////////     '      FALSY   '    //////////////////////
// let someword = 1;

// if(someword== false){
//   console.log(falsy);
// }else{
//  console.log('fantastic')
// }
// if([someword] == true){
//   console.log('tacno')
// }else{
//   console.log('ovo je falsy')
// }
// if(![someword]){
//   console.log('tacno')
// }else{
//   console.log('ovo je falsy')
// }

// var string = ""; // <-- tacno

// var filledString = "some string in here"; // <-- tacno

// var zero = 0; // <-- netacno

// var numberGreaterThanZero // <-- tacno

// var emptyArray = []; // <-- tacno i istrazice sve o tome

// var emptyObject = {}; // <-- tacno

// const match = { teamA: 0 , teamB: 1 }

// if (match.teamA){
//   // ovo se nece pokrenuti zbog falsy vrednosti

//   console.log('Team A: ' + match.teamA);
// }else{
//   console.log('netacno')
// }


/////////////////////////////////////////////////////////////////////////////////////////




// let someArray =  [1,2,3,4,5,6,7,8,9,10];
// let helperfunction = (a) => a + 10;
// function customfunction(niz, callbackfunction){
//   let pomocniniz = [];
//   for (let i= 0; i < niz.length; i++) {
//   //  console.log(array[i]);
//    pomocniniz.push(callbackfunction(niz[i]));
//   }
//   return pomocniniz;
// }
// console.log(someArray);
// console.log(customfunction(someArray, helperfunction))
// // customfunction(someArray, helperfunction);


//////////////////////////////////////////////////////////////////

// const nekiniz = [1,2,3,4,5,6,7,8,9,10];
// const druginiz = nekiniz.map((el) => el+10);
// console.log(nekiniz);
// console.log(druginiz);


// const someage = [2,8,7,5,1,15,10,9,13]
// const drugeage = someage.map(el => el*7);
// console.log(someage)
// console.log(drugeage)

// const somekms = [20,12,22,25,33,33,99,50,70]
// const somemiles = somekms.map(el => el *1.6);
// console.log(somekms)
// console.log(somemiles)

// const matrica = [
//   [1,2,3],
//   [4,5,6], 
//   [7,8,9]
// ];

// const drugamatrica = matrica.map
// console.log(drugamatrica)

///////////////////////////////FILTER/////////////////////////////////////

// const nekibrojevi = [7,12,1,8,19,20,15,22,25,30,2,10,63];
// console.log(nekibrojevi);
// const pomnozi = nekibrojevi.map(el=>el*3);
// console.log(pomnozi,'brojevi');

// const parnibrojevi = pomnozi.filter(el => el % 2 ===0);
// console.log(parnibrojevi)

// const brojevi = nekibrojevi.filter(el => el * 3)
// console.log(brojevi,'brojevi')


/////////////////////////////////////////////////////////////////////////////

// const  nekaMatrica = [
//   [12,5,8],
//   [3,5,10],
//   [16,3,7]
// ];

// const dveMape = nekaMatrica.map((niz) => niz.filter((el)=> el % 2 ===0))
// console.log(dveMape)




// const nekiBrojevi = [12,43,55,2,3,4,6,8,5,4];

// const srednjiBroj = nekiBrojevi.reduce(
//   (prev , curr )=> prev + curr
// );  
// console.log(srednjiBroj / nekiBrojevi.length)

/////////////////objekti////////////////////////////




// const ourfirstObject = {
//   car:'Alfa Romeo',
//   vozac:'Dzenis Bronja',
//   suvazac:'Redzi(pod kaznom)',
//   godina: 23,
// }

// const nekiNiz = {
//   audi:{
//   auto:' audi',
//   model:' a7',
//   gorivo:'  dizel',
//   kilometraza:' 10,000km',
// }
// }
// console.log(nekiNiz.audi)




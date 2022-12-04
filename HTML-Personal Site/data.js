// let country="India";
// let continent="aisa";
// let population=139000000000000000000;
// console.log(country);
// console.log(continent);
// console.log(population);
// country="not island";
// let isIsland=false;
// console.log(isIsland);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof isIsland);
// // console.log(typeof );

// let ageRehan=2022-1996;
// let agerehan=2022-1999;
// console.log(ageRehan,agerehan);
// const indiaPopulation=1380004385;
// let x=indiaPopulation/2;
// console.log(x);
// x++;
// console.log(x);
// const finlandPopulation=6000000;
// console.log(indiaPopulation>finlandPopulation);
// const averageCountryPopulation=33000000;
// console.log(indiaPopulation>averageCountryPopulation);
// let description="Portugal is in Europe, and its 11 million people speak portuguese"
// console.log(description);
// console.log(typeof description);

// const markHeight=1.69;
// const markWeight=78;
// const johnHeight=1.95;
// const johnWeight=92;
// BMI= mass/(height**2);(formula)
// BMI=mass/(height*height);(formula)
// console.log(markWeight/(markHeight**2));
// console.log(johnWeight/(johnHeight**2));
// const j=johnWeight/johnHeight**2;
// const m=markWeight/markHeight**2;
// const moreBmi=m<j;
// console.log(m,j,m>j,moreBmi);
// console.log(m>j);

// const firstName=`Mohd Rehan Nafees`;
// const doB=1999;
// const year=2022;
// const job=`unemployed`;

// const fullInfo=`I'm ${firstName}, a ${year-doB} year old ${job} person!`;
// console.log(fullInfo);

// const age=prompt("Enter Your age");
// if(age>=18 && age<=60){
//     console.log(`you are eligible for driving`)
// }
// else if(age<18){
//     const yearleft=18-age;
//     console.log(  `you are not eligible for driving. wait for ${yearleft} year`);}
// else{console.log( `you are not eligible for driving.`);}

// ----------------------------------------------------------------
// const johnWeight=prompt(`Enter john weight`);
// const johnHeight=prompt(`Enter john height`);
// const marksweight=prompt(`Enter marks weight`);
// const marksHeight=prompt(`Enter mark height`);
// const j_BMI=johnWeight/johnHeight**2;
// const m_BMI=marksweight/marksHeight**2;
// console.log(j_BMI,m_BMI);
// if(j_BMI>m_BMI){
//     console.log(`john having more`);
// }
// else{

//     console.log(`mark having more`);
// }
// ---------------------------------------------------------------------
// const johnWeight=85;
// const johnHeight=1.76;
// const marksweight=95;
// const marksHeight=1.88;
// const j_BMI=johnWeight/johnHeight**2;
// const m_BMI=marksweight/marksHeight**2;
// console.log(j_BMI,m_BMI);
// if(j_BMI>m_BMI){
//     const x=j_BMI-m_BMI
//     console.log(`john having more(${x}) BMI than mark`);
// }
// else{

//     console.log(`mark having more`);
// }
// -------------------------------------------------------------------s
// Dolphin score
// const dolphin_data1=prompt(`Enter first match score of Dolphin`);
// const dolphin_data2=prompt(`Enter second match score of Dolphin`);
// const dolphin_data3=prompt(`Enter third match score of Dolphin`);
// // koalas score
// const koalas_data1=prompt(`Enter third match score of koalas`);
// const koalas_data2=prompt(`Enter third match score of koalas`);
// const koalas_data3=prompt(`Enter third match score of koalas`);
// -------------------------------------------------------------------
// const dolphin_data1=100;
// const dolphin_data2=11;
// const dolphin_data3=12;
// const koalas_data1=110;
// const koalas_data2=115;
// const koalas_data3=105;
// const avgD=(dolphin_data1+dolphin_data2+dolphin_data3)/3;
// const avgK=(koalas_data1+koalas_data2+koalas_data3)/3;

// if(avgD>100 && avgD>avgK){
//     console.log(`Dolphin is winner`);
// }
// else if(avgK>100){
//     console.log(`Koalas is winner`);
// }

// -------------------------------------------------------------------
// let doB=prompt("Enter your Date of Birth");
// doB=Number.parseInt(doB);
// const year=2022;
// // console.log(typeof doB);
// age=year-doB;
// console.log(age);
// -----------------------------------------------------
// const doB=prompt(`Enter DoB`);
// console.log(Number(doB));
// const year=2022;
// console.log(year-Number(doB));
// ----------------------------------------------
// let n=`1`+1;
// n-=1;
// console.log(n);
// ---------------------------------------------
// ---------------------------------------------------------------
// Switch case
// ---------------------------------------------------------------
// const day=prompt(`Enter The day`);
// switch(day){
// case `Monday`:
//     console.log(`Go to school`);
//     break;
// case `Tuesday`:
//     console.log(`do homework`);
//     break;
// case `Wednesday`:
//     console.log(`prepare for exam`);
//     break;
// case `Thursday`:
//     console.log(`do self study`);
//     break;
// case `Friday`:
//     console.log(`go to saloon`);
//     break;
// case `Saturday`:
// case `Sunday`:
//     console.log(`weakend`);
//     break;
// default:
//     console.log(`This is not a Day`);
//     break;

// }
// --------------------------------------------------
// Same above code using if else SVGPatternElement
// --------------------------------------------------

// const day=prompt(`Enter day`);
// if(day===`Monday`){
//     console.log(`go to school`);
// }
// else if(day===`Tuesday`){
//     console.log(`go to gym`);
// }
// else if(day===`Wednesday`){
//     console.log(`prepare for exam`);
// }
// else if(day===`Thursday`){
//     console.log(`do self study`);
// }
// else if(day===`Friday`){
//     console.log(`go to saloon`);
// }
// else if(day===`Saturday` ||day=== `Sunday`){
//     console.log(`holiday`)
// }
// else {
//     console.log(`WRONG INPUT`)
// }

// const bill = Number(prompt("Enter Bill"));

// if (bill >= 50 && bill <= 300) {
//   total1 = bill + (bill * 15) / 100;
//   console.log(total1, `where ${bill} is bill amount and ${(bill * 15) / 100} is tip`);
// } else if(bill>300) {
//   total2 = bill + (bill * 20) / 100;
//   console.log(total2, `where ${bill} is bill amount and ${(bill * 20) / 100} is tip`);
// }
// else{
//     console.log(`bill amount ${bill}, sorry for no tip`);
// }
// -----------------------------------------------------------------------------------------------------

// const bill= Number(prompt(`Enter Your Bill Value`));
// const tip=bill>=50 && bill<=300 ? bill*15/100 : bill*20/100;
// console.log(`the bill value was ${bill}, the tip value was ${tip} and the total value ${bill+tip}`);
// -----------------------------------------------------------------------------------------------------

// function fruitprocess(orange, banana) {
//   const juice = `juice with ${orange} orange and ${banana} banana`;
//   return juice;
// }
// const mixfruiteJuice = fruitprocess(prompt(`value1`), prompt(`value2`));
// console.log(mixfruiteJuice);
// const mixfruiteJuice2 = fruitprocess(prompt(`value1`), prompt(`value2`));
// console.log(mixfruiteJuice2);
//////////////////////////////////////////////////////////////////////////

// function ageCalculator(birthYear) {
//   return 2022 - birthYear;
// }
// const ageCalculator01 = ageCalculator(prompt(`Dob`));
// console.log(ageCalculator01);
//-----------------------------------------------------------------------------

// function scoreBoard(Team1, Team2) {
//   const score = `Team one score is ${Team1} and Team two score is ${Team2}`;
//   return score;
// }
// const scoree = scoreBoard(
//   prompt(`enter team 1 score`),
//   prompt(`enter team 2 score`)
// );
// console.log(scoree);
// const scoree1 = scoreBoard(
//   prompt(`enter team 3 score`),
//   prompt(`enter team 4 score`)
// );
// console.log(scoree1);
//-----------------------------------------------------------------------------
// ----------------------------------------------------------------------
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} is already retired`);
//     return -1;
//   }
// };
// console.log(yearUntilRetirement(1990, `mike`));
// console.log(yearUntilRetirement(1950, `john`));
// ----------------------------------------------------------------------
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 3, 4));
// // Test-1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆(${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log(`No team win...`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(500, 150);
// ----------------------------------------------------------------------
// const friends = ["Tauqeer", "Fahad", "Amit"];
// console.log(friends);
// const years = new Array(1991, 1982, 1987, 2022);
// console.log(years);

// console.log(friends[2]);
// console.log(friends[1]);
// friends[2] = "Uddyan";
// console.log(friends);
// console.log(friends[friends.length]);
// -----------------------------------------------------------------------------
// Revision
// -----------------------------------------------------------------------------

// const waight1 = prompt(`Enter john Weight`);
// const height1 = prompt(`Enter john Height`);
// const waight2 = prompt(`Enter Mark Weight`);
// const height2 = prompt(`Enter Mark Height`);
// BMI1 = waight1 / height1 ** 2;
// BMI2 = waight1 / height1 ** 2;
// if (BMI1 > BMI2) {
//   console.log(`John having more BMI`);
// } else {
//   console.log(`Mark having more BMI`);
// }
// // -----------------------------------------------------------------------------

// function BMI(weight, height) {
//   const bodymassindex = weight / height ** 2;
//   return bodymassindex;
// }
// const BMI = (weight, height) => weight / height ** 2;
// const person1 = BMI(prompt(`Enter weight`), prompt(`Enter Height`));
// const person2 = BMI(prompt(`Enter weight`), prompt(`Enter Height`));
// console.log(person1, person2);
// const checkbmi = function (BMI1, BMI2) {
//   if (BMI1 > BMI2) {
//     console.log(`prson 1 having more bmi ${BMI1}`);
//   } else {
//     console.log(`person 2 having more bmi ${BMI2}`);
//   }
// };
// checkbmi(person1, person2);
// ------------------------------------------------
// const friends = [`Rehan`, `amit`, `tiwari`];
// friends.push(`ankit`);
// console.log(friends);
// console.log(friends.length);
// // Add elements
// friends.unshift(`vvvv`);
// console.log(friends);
// console.log(friends.length);
// // Remove elements
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// // indexof to find position;
// console.log(friends.indexOf(`amit`));
// console.log(friends.indexOf(`yoyo`));
// // includes for booleon value
// console.log(friends.includes(`amit`));
// console.log(friends.includes(`vv`));

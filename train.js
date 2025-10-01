//console.log("Jack Maa maslahatlari");
// const list = [
//     "be a good student",  //0-20
//     "choose right boss and do more mistakes", //20-30
//     "work for yourself", //30-40
//     "do what you good at", //40-50
//     "invest for young generation", //50-60
//     "now just rest",  //60->
// ];
// Callback functions
// function maslahatBering( a, callback) {
//     if(typeof a !== 'number' ) callback("insert a number", null);
//     else if( a <= 20 ) callback(null, list[0]);
//     else if( a > 20 && a <= 30) callback(null, list[1]);
//     else if( a > 30 && a <= 40) callback(null, list[2]);
//     else if( a > 40 && a <= 50) callback(null, list[3]);
//     else if( a > 50 && a <= 60) callback(null, list[4]);
//     else { 
//         setTimeout(function () {
//         callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(69, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("Answer:", data);
//     }
// })

// console.log("passed here 1");


//async functions
// async function maslahatBering( a) {
//     if(typeof a !== 'number' ) throw new Error("insert a number", null);
//     else if( a <= 20 ) return list[0];
//     else if( a > 20 && a <= 30) return list[1];
//     else if( a > 30 && a <= 40) return list[2];
//     else if( a > 40 && a <= 50) return list[3];
//     else if( a > 50 && a <= 60) return list[4];
//     else { 
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }


// call viathen\catch
// console.log("passed here 0");
// maslahatBering(47).then(data=> {
//     console.log("Answer:", data);
// }).catch(err => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");


// cal via asyn/await
// async function run() {
//     let javob = await maslahatBering(28);
//     console.log(javob);
//     javob = await maslahatBering(88);
//     console.log(javob);
//     javob = await maslahatBering(48);
//     console.log(javob);
// }
// run();



//TASK
// TASK A
       //MASALANI IZOHI
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

     //MASALANI YECHIMI
// function countLetter(letter, text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }


// console.log("answer:", countLetter("a", "mehanizatsiyalashtirolmayatkanimizdandurda"));
// console.log("answer:", countLetter("b", "boburbogi"));

// console.log("=========")

// function countLetter(letter, text) {
//     return text.split(letter).length - 1;
// }

// console.log("answer:", countLetter("e", "Chelsea"));


// TASK - B 
        //MASALANI IZOHI
// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

       //MASALANI YECHIMI

// function countNumbers(text) {
//     let count = 0;
//     for (i=0; i<text.length; i++) {
//         if(text[i]>='0' && text[i]<='9')
//             count++
//     }
//     return count;
// }       

// console.log(countNumbers("jbwq23dkskj2330982"));  


/* TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
*/

// class Shop{
//     //state
//     bread;
//     cola;
//     rice;

//     //constructor
//   constructor(bread, cola, rice,) {
//     this.bread = bread;
//     this.cola =cola;
//     this.rice = rice;
//     this.time = { hour: 20, minute: 40 };
//   }

//     //methods
//     updateTime() {
//         this.time.minute += 5;
//         if (this.time.minute >= 60) {
//           this.time.minute -= 60;
//           this.time.hour++;
//         }
//       }

//     qoldiq () {
//         console.log(`Hozir ${this.time.hour}:${this.time.minute.toString().padStart(2, "0")} da ${this.bread} ta non, ${this.cola} ta cola va ${this.rice} kg guruch mavjud`);
//     }

//     sotish(bread, cola, rice) {
//         this.bread -= bread;
//         this.cola -= cola;
//         this.rice -= rice;
//         this.updateTime();
//     }

//     qabul(bread, cola, rice) {
//         this.bread += bread;
//         this.cola += cola;
//         this.rice += rice;
//         this.updateTime();
//     }

// }

// const myShop = new Shop(40, 50, 20);
// myShop.qoldiq();

// console.log("=======");

// myShop.sotish(15, 25, 5);
// myShop.qoldiq();

// console.log("=======");

// myShop.qabul(20, 30, 50);
// myShop.qoldiq();


/*
TASK-D:

Ikkita parametra ega function tuzing, va functioning
berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
mos kelsa true qiymat qaytarsin

Masalan: checkContent("mitgroup", "gmtiprou");
Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.
*/

function checkContent(a, b) {
let text1 = a.split("");
let text2 = b.split("");

console.log(text1);
console.log(text2);

text1.sort();
console.log(text1);

text2.sort();
console.log(text2);

if(text1.join("") === text2.join("")) {
  console.log(true);
} else {
  console.log(false);
}
}


checkContent("eden", "eend");
console.log("-----")
checkContent("gool", "gol");


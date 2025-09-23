//console.log("Jack Maa maslahatlari");
const list = [
    "be a good student",  //0-20
    "choose right boss and do more mistakes", //20-30
    "work for yourself", //30-40
    "do what you good at", //40-50
    "invest for young generation", //50-60
    "now just rest",  //60->
];
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

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

//Yechim
function countLetter(letter, text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            count++;
        }
    }
    return count;
}


console.log("answer:", countLetter("a", "mehanizatsiyalashtirolmayatkanimizdandurda"));
console.log("answer:", countLetter("b", "boburbogi"));

console.log("=========")

function countLetter(letter, text) {
    return text.split(letter).length - 1;
}

console.log("answer:", countLetter("e", "Chelsea"));
//  let browser = "edge"

// if (browser == "edge"){
//     alert("you have got athe Edge");

//   }
//   else if(browser == "Chrome" || browser == "firefox", browser == "google", browser == "mozilla"){
//     alert("okey")
//   }
//   else{
//     alert("We hope")
//   }





// let a = +prompt(`'a?',''`);

// switch (a){
//     case 0:
//     alert( 0 )
//     break;
//     case 1:
//     alert(1)
//     break;
//     case 2:
//     case 3:
// alert('2,3')
// }






//////////Homework///////////////////

// 1. Berilgan code'ni switch da yozing:
//   let a = +prompt('a?', '');

//   if (a == 0) {
//     alert( 0 );
//   }
//   if (a == 1) {
//     alert( 1 );
//   }

//   if (a == 2 || a == 3) {
//     alert( '2,3' );
//   }

                        // let a = +prompt('a?', '');
                        // switch(a){
                        //     case 0:
                        // alert(0);
                        // break;
                        // case 1:
                        // alert(1);
                        // break;
                        // case 2:
                        // case 3:
                        // alert ('2,3');
                        // break;
                        // }






// 2. Agar bool rost bo'lsa, "ha" ni, aks holda "yo'q" ni qaytarish uchun ternary operator(?) dan foydalanadigan funktsiyani yozing:

// yeah_nope(true) ➞ "ha"
// yeah_nope(false) ➞ "yo'q"

        
                        // function nope (bool){
                        //     return bool? "ha":"yo'q";
                        // } 
                        // console.log(nope(true));
                        // console.log(nope(false));


// 3. Argument sifatida raqamni oladigan va juft sonlar uchun “juft”, toq sonlar uchun “toq” qaytaradigan funksiya yarating:

// isEvenOrOdd(3) ➞ "toq"
// isEvenOrOdd(146) ➞ "juft"
// isEvenOrOdd(19) ➞ "toq"

                        //         function isEvenOrOdd(number) {
                        //     if (number % 2 === 0) {
                        //         return "juft";
                        //     } else {
                        //         return "toq";
                        //     }
                        // }
                        // console.log(isEvenOrOdd(3));   
                        // console.log(isEvenOrOdd(146)); 
                        // console.log(isEvenOrOdd(19));  





//     4. Raqamni yagona argument sifatida qabul qiladigan va u noldan kichik yoki teng bo'lsa, true, aks holda false'ni qaytaradigan funksiya yarating:

// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true


                        // function lessThanOrEqualToZero(number) {
                        //     return number <= 0;
                        // }
                        // console.log(lessThanOrEqualToZero(5));  
                        // console.log(lessThanOrEqualToZero(0));  
                        // console.log(lessThanOrEqualToZero(-2)); 





//   5. Quyidagi code'da xatolik bor. JavaScript-ni o'rganayotgan talaba yangi funktsiya yaratmoqchi edi. Uning kodi o'tkazilgan string nomini "Edabit" sozi bilan birlashtirishi va uni result deb nomlangan o'zgaruvchida saqlashi kerak. Bu kodni tuzatish uchun unga yordamingiz kerak:

// nameString("Mubashir") ➞ "MubashirEdabit"
// nameString("Matt") ➞ "MattEdabit"
// nameString("javaScript") ➞ "javaScriptEdabit"

// code: 
// function nameString(name){
// 	var b == "Edabit"
// 	var result == name + b
//   return result
// }



                        // nameString("Mubashir")
                        // nameString("Matt") 
                        // nameString("javaScript") 


                        // function nameString(name){
                        //         let b = "Edabit"; //2ta teng (==) belgisi emas bitta ishlatilishi kerak
                        //         let result = name + b; // tekshiruv belgisini to'g'rilash kerak, == belgisi ikkita  o'zgaruvchini solishtirish uchun ishlatilmaydi
                        //         return result;
                        // }

                        // console.log(nameString("Mubashir")); 
                        // console.log(nameString("Matt")); 
                        // console.log(nameString("javaScript")); 

                        



// 6. Siz basketbol o'yini uchun ochkolarni hisoblayapsiz, 2 ochkolik(1-parametir) va 3(2-parametir) ochkolik to'plar miqdorini hisobga olib, jamoa uchun yakuniy ochkolarni toping va bu qiymatni qaytaring:

// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100


                        // function points(point2, point3) {
                        //         let counter = (point2 * 2) + (point3 * 3);
                        //         return counter;
                        //     }
                        
                        //     console.log(points(1, 1)); 
                        //     console.log(points(7, 5));
                        //     console.log(points(38, 8)); 
                        

// 7. Ikkita raqam berilgan bo'lsa, ikkala raqamning yig'indisi 100 dan kichik bo'lsa, true qiymatini qaytaring. Aks holda, false'ni qaytaring
                        // let num1 = +prompt(" a sonni kiriting")
                        // let num2 = +prompt(" b sonni kiriting")

                        // function counter(num1, num2) {
                        //         let sum = num1 + num2;
                        //         return sum < 100;
                        // }
                        
                        // console.log(counter(num1, num2));
    

// 8. Mubashir berilgan ikkita raqamni almashtirmoqchi! Bu to'g'ri qiymatlarni qaytarmaydi. Uni tuzatishga yordam bera olasizmi?

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // "200, 100" ni chop etish kerak, lekin funksiya "100, 100" ni chop etyapdi

// Aslida qaytarishi kerak:
// swap(100, 200) ➞ [200, 100]
// swap(44, 33) ➞ [33, 44]
// swap(21, 12) ➞ [12, 21]

// code: (shu code'dagi xatolikni tuzating)
// function swap(a, b) {
// 	b = a
// 	a = b
// 	return [a, b]
// }

                        // function swap(a, b) {
                        //         let temp = a;
                        //         a = b; 
                        //         b = temp; 
                        //         return [a, b]; 
                        // }
                        
                        // console.log(swap(100, 200)); 
                        // console.log(swap(44, 33)); 
                        // console.log(swap(21, 12));
                        

// 9. 1-son 2-songa teng boʻlganda true qaytaruvchi funksiya yarating; aks holda false qaytaring:

// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false

                        // function sum(num1, num2) {
                        //         return num1 === num2;
                        // }
                        
                        // console.log(sum(4, 8));
                        // console.log(sum(2, 2));
                        // console.log(sum(2, "2")); 
    
// 10. Ikkita butun sonni (soat, daqiqa) oladigan, ularni soniyalarga aylantiruvchi va qo‘shuvchi funksiya yozing:

// convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0      
 
                        // function convert(hours, minutes) {
                        //         return (hours * 3600) + (minutes * 60);
                        // }
                        
                        // console.log(convert(1, 3)); 
                        // console.log(convert(2, 0)); 
                        // console.log(convert(0, 0)); 
                        

// 11. Funksiya parametri faqat 7 ga teng bo'lganda true qaytarishi lozim. Code'da xatolik bor. Uni to'g'irlang:

// code:
// function isSeven(x) {
// 	return x="7"?false:true:false;
// }

                        // function isSeven(x) {
                        //         return x === 7 ? true : false;   
                        // }
                        
                        // console.log(isSeven(7)); 
                        // console.log(isSeven(5)); 
                        








            





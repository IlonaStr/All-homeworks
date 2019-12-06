'use strict';

// let number = 5;

// console.log(number);

// number = 10;
// console.log(number);

// const isActive = true;

// // alert (555);

// // const isGoing = confirm('??');

// // console.log(isGoing);

// const input = prompt('insert your name');
// console.log(input);

// 11 % 3;
// const password = promt("enter password");
// switch (password) {
//     case 'admin':
//         let a = 5;
//         alert("Welcome admin");
//      break;
//     case: 'user':
//     alert("Welcome user");
//      break;
//      case: 'batman':
//      alert("Welcome batman");
//      break;

//     default:
//             alert("Wrong password");
//         break;
// }

// const isDark = true;
// let theme;

// if (isDark) {
//     theme = 'dark';
// } else {
//     theme = 'light';
// }

// let theme = isDark === true ? 'dark' : 'light';

// let count = 1;
// while(count < 5) {
//     console.log(count);
//     count++;
// }

// let count = 0;
// do {
//     console.log(count);
//     count++;
// } while(count < 10);

// for (let i = 0; i < 10; i++) {
//     console.log(1);
// }

// for (let i = 1; i <= 10; i++) {
//     // if (i % 2 === 1) {
//     //     continue;
//     // }

//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// let emails = ['user@gmail.com', 'tester@gmail.com', 'admin@gmail.com'];
// console.log(emails [1]);
// console.log(emails [0]);
// console.log(emails [5]);
// console.log(emails.length);
// console.log(emails [emails.length - 1]);
// emails.pop();
// let lastElement = emails.pop();
// console.log(lastElement);
// console.log(emails);
// let pushElement = emails.push('manager@.com');
// console.log(pushElement);
// let firstElement = emails.shift();
// console.log(firstElement);
// emails.unshift();
// console.log(emails);
// emails.splice(2, 3);
// console.log(emails);
// emails.splice(2,1,'user1@g.com');
// console.log(emails);
// const newArr = emails.slice();
// console.log(emails.includes('tester@gmail.com'));
// const checkEmail = 'tester@gmail.com';
// for(let i = 0; i < emails.length; i++) {
// if(emails[i] === checkEmail) {
//     console.log(true);
//     break;
// }
// if( i === emails.length - 1) {
//     console.log(false);
// }
// }

// for(let element of emails) {
// console.log(element);
// }

// console.log(emails.indexOf('tester@gmail.com'));
// for(let el of emails) {
//     if (el === 'tester@gmail.com') {

//     }
// }

// for (let i = 0, length = emails.length; i < length; i ++) {
//     if(el === 'tester@gmail.com') {
//         console.log(i);
//     }
// }

// const logins = ['user', 'tester', 'admin'];

// const newArray = [].concat(emails, logins); 
// console.log (emails);
// console.log (logins);
// console.log (newArray); - додати новий масив

// const newEmails = emails.slice();
// newEmails.reverse();
// console.log('original', emails);
// console.log('reverse', newEmails); - копія масиву, щоб подати у зворотному порядку

// const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure quia optio et quaerat, iusto maiores amet laudantium quae officia!';
// const splitString = string.split('.');
// console.log(splitString);

// const str = 'oko';
// const str2 = 'Hello';

// // const strSplit = str.split('').reverse().join();
// // console.log(strSplit);
// // console.log(str === strSplit);

// const strSplit = str2.split('');
// const reverseArray = str2split.reverse('');
// const reverseString = reverseArray.join('');
// // console.log(reverseString);
// console.log(str2 === reverseString);

// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a = 45;

// console.log(a);
// console.log(b);

// let numbers = [1, 2, 4, 5, 6];
// let newNumbers = numbers;
// console.log(numbers);
// console.log(newNumbers);

// numbers.push(10);

// console.log(numbers);
// console.log(newNumbers);
// greet();
// function greet () {
//     alert('Hello');
// }

// const greet = function () {
//     alert('hello');
// };

// greet();

// function checkLeapYear(year) {
//     if(year % 4 === 0) {
//         return true;
//     }
//     return false;
// }

// let result = checkLeapYear(2004);
// let result2 = checkLeapYear(2001);
// console.log(result);
// console.log(result2);

const emails = ['user@gmail.com', 'tester@gmail.com', 'admin@gmail.com'];
const anotherEmails = ['user2@gmail.com'];
const userEmail = 'admin@gmail.com';
function checkEmailsExist (email, emailsArray) {
    // if(emailsArray.includes(email)) {
    //     return true;
    // }
    // return false;
    if(typeof email === 'string') {
        return emailsArray.includes(email);
    }
    return 'error';
}

const result = checkEmailsExist(userEmail, emails);
const result2 = checkEmailsExist(userEmail, anotherEmails);
console.log(result);
console.log(result2);
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

let emails = ['user@gmail.com', 'tester@gmail.com', 'admin@gmail.com'];
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
emails.splice(2,1,'user1@g.com');
console.log(emails);
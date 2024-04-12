// Basic Arithmetic Questions

// Q1 Given length and breadth of a rechtangle, return area of rectangle

// function printArea(length,breadth){
//     return length*breadth;
// }
// const area = printArea(10,20);
// console.log("Area of Rectangle",area);

// Q2 Take a number and print the square of a number

// function printSquare(num){
//     return num*num;
// }
// const Square = printSquare(2);
// console.log("Square:",Square);

// Q3 Take two numbers and only print the integer part when a is divided by b.

// function integerPart(a,b){
//     let result = Math.floor(a/b);
//     return result;
// }
// const integer= integerPart(15,4);
// console.log("integerPart:",integer);

// Q4 Take a number and print out the last digit of the number.

// function lastDigit(a){
//     return a%10;
// }
// let Digit = lastDigit(234);
// console.log("lastDigit:",Digit);

// Q5 Take a number and find the cube of that number.

// function printCube(number){
//     return number**3;
// }
// let cube = printCube(2);

// console.log("Cube:",cube);

// Q6 Take a 3 digit number and print the reverse of that number. Ex - 235 = 532

// function reverseNo(n){
//     let a = 0;
//     while (n>0){
//         let d = n%10;
//         a = a * 10+d;
//         n = Math.floor(n/10);
//     }
//     return a;
// }
// const res =(reverseNo(345));
// console.log(res);


// Q7 Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7

// function firstDigit(number){
//     while (number>0){
//         if (number<10){
//             return number;
//         }
//         number = Math.floor(number/10);
//     }
// }
// const r = (firstDigit(234));
// console.log("firstDigit:",r);

// Q8 Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
// function sum(n){
//     let b = n%10;
//     while (n>=10){
//         n = Math.floor(n/10);
//     }
//         return b+n;
//     }
// const Sum = sum(523);
// console.log("Sum:",Sum);

// // Q9 Take salary of five employees and print the average salary of all the employees
// function avg(a,b,c,d,e){
//     let S = (a+b+c+d+e)/5;
//     return S;
// }
// const Average = avg(23,34,56,23,67);
// console.log("Average Salary:", Average);

// Q10 Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;

// function swapingNo(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("swapped:",a,b);
// }
// swapingNo(12,34);

// Basic If-Else Questions - 

// 1. Write a program that checks if a given number is even or odd.
// let b;
// function checkEvenOdd(a){
//     if (a%2==0){
//         b = "Even";
//     }
//     else {
//         b = "Odd";
//     }
//     return b;
// }
// checkEvenOdd(23);
// console.log("Number is ",b);

//  Create a function that takes two numbers as parameters and returns the larger one
// function largerNum(num1,num2){
//     if (num1 >num2){
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }
// const res = (largerNum(2,19));
// console.log("Larger Number:",res);

//  Q3 Write a function that determines if a given year is a leap year.

// function findleapYear(year){
//     if (year%400==0 || year%4==0 && year%100!=0){
//         return "lear year";
//     }
//     else{
//         return "not leap year";
//     }
// }
// const res = (findleapYear(2024));
// console.log("it is",res);

// Q4 Implement a program that checks whether a given character is a vowel or consonant.

// function checkCharVowel(char){
//     if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
//         return "Vowel";
//     }
//     else {
//         return "consonant";
//     }
// }
// const res = (checkCharVowel("n"));
// console.log("character is",res);

// Q5 Create a function that takes three numbers as input and returns the largest among them.

// function largestNum(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         return n1;
//     }
//     else if (n2>n3){
//         return n2;
//     }
//     else {
//         return n3;
//     }
// }
// const largest = (largestNum(12,22,2));
// console.log("largest No:",largest);


// Q6 Write a program that checks if a given number is positive, negative, or zero.

// function chekNum(num){
//     if (num==0){
//         return "0";
//     }
//     else if (num>0){
//         return "Positive";
//     }
//     else{
//         return "Negative";
//     }
// }
// const res = (chekNum(-2));
// console.log("Num is",res);


// Q7 Implement a function that calculates the grade of a student based on their score

// function checkGrade(marks){
//     if (marks>=90 && marks<=100){
//         return "Grade A";
//     }
//     else if (marks>=70 && marks<90){
//         return "Grade B";
//     }
//     else if (marks>=50 && marks<70){
//         return "Grade C";
//     }
//     else {
//         return "Grade D";
//     }
// }
// const res = (checkGrade(7));
// console.log(res);

// Q8 Create a program that determines if a given string is a palindrome.

// Q9 Write a function that checks whether a person is eligible to vote based on their age.
// function eligiblityCheck(name,age){
//     if (age>18){
//         console.log(`${name} your age is ${age}, you can vote`);
//     }
//     else {
//         console.log(`${name} youre age is ${age}, you are not eligible to vote`);
//     }
// }
// eligiblityCheck("shweta",2);

// Q10 mplement a program that determines the type of a triangle based on the lengths of its sides.

// function triangleType(s1,s2,s3){
//     if (s1==s2 && s2==s3){
//         return "Equilateral Triangle";
//     }
//     else if (s1==s2 || s1==s3 || s2==s3){
//         return "Isosceles Triangle"
//     }
//     else {
//         return "Scalene triangle";
//     }
// }
// const ans=(triangleType(s1=12,s2=12,d3=1)) ;
// console.log(ans);











// Basic Arithmetic Questions

// Q1 Given length and breadth of a rechtangle, return area of rectangle

// function printArea(length,breadth){
//     return length*breadth;
// }
// const area = printArea(10,20);
// console.log("Area of Rectangle",area);

// Q2 Take a number and print the square of a number

// function printSquare(num){
//     return num*num;
// }
// const Square = printSquare(2);
// console.log("Square:",Square);

// Q3 Take two numbers and only print the integer part when a is divided by b.

// function integerPart(a,b){
//     let result = Math.floor(a/b);
//     return result;
// }
// const integer= integerPart(15,4);
// console.log("integerPart:",integer);

// Q4 Take a number and print out the last digit of the number.

// function lastDigit(a){
//     return a%10;
// }
// let Digit = lastDigit(234);
// console.log("lastDigit:",Digit);

// Q5 Take a number and find the cube of that number.

// function printCube(number){
//     return number**3;
// }
// let cube = printCube(2);

// console.log("Cube:",cube);

// Q6 Take a 3 digit number and print the reverse of that number. Ex - 235 = 532

// function reverseNo(n){
//     let a = 0;
//     while (n>0){
//         let d = n%10;
//         a = a * 10+d;
//         n = Math.floor(n/10);
//     }
//     return a;
// }
// const res =(reverseNo(345));
// console.log(res);


// Q7 Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7

// function firstDigit(number){
//     while (number>0){
//         if (number<10){
//             return number;
//         }
//         number = Math.floor(number/10);
//     }
// }
// const r = (firstDigit(234));
// console.log("firstDigit:",r);

// Q8 Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
// function sum(n){
//     let b = n%10;
//     while (n>=10){
//         n = Math.floor(n/10);
//     }
//         return b+n;
//     }
// const Sum = sum(523);
// console.log("Sum:",Sum);

// // Q9 Take salary of five employees and print the average salary of all the employees
// function avg(a,b,c,d,e){
//     let S = (a+b+c+d+e)/5;
//     return S;
// }
// const Average = avg(23,34,56,23,67);
// console.log("Average Salary:", Average);

// Q10 Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;

// function swapingNo(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("swapped:",a,b);
// }
// swapingNo(12,34);

// Basic If-Else Questions - 

// 1. Write a program that checks if a given number is even or odd.
// let b;
// function checkEvenOdd(a){
//     if (a%2==0){
//         b = "Even";
//     }
//     else {
//         b = "Odd";
//     }
//     return b;
// }
// checkEvenOdd(23);
// console.log("Number is ",b);

//  Create a function that takes two numbers as parameters and returns the larger one
// function largerNum(num1,num2){
//     if (num1 >num2){
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }
// const res = (largerNum(2,19));
// console.log("Larger Number:",res);

//  Q3 Write a function that determines if a given year is a leap year.

// function findleapYear(year){
//     if (year%400==0 || year%4==0 && year%100!=0){
//         return "lear year";
//     }
//     else{
//         return "not leap year";
//     }
// }
// const res = (findleapYear(2024));
// console.log("it is",res);

// Q4 Implement a program that checks whether a given character is a vowel or consonant.

// function checkCharVowel(char){
//     if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
//         return "Vowel";
//     }
//     else {
//         return "consonant";
//     }
// }
// const res = (checkCharVowel("n"));
// console.log("character is",res);

// Q5 Create a function that takes three numbers as input and returns the largest among them.

// function largestNum(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         return n1;
//     }
//     else if (n2>n3){
//         return n2;
//     }
//     else {
//         return n3;
//     }
// }
// const largest = (largestNum(12,22,2));
// console.log("largest No:",largest);


// Q6 Write a program that checks if a given number is positive, negative, or zero.

// function chekNum(num){
//     if (num==0){
//         return "0";
//     }
//     else if (num>0){
//         return "Positive";
//     }
//     else{
//         return "Negative";
//     }
// }
// const res = (chekNum(-2));
// console.log("Num is",res);


// Q7 Implement a function that calculates the grade of a student based on their score

// function checkGrade(marks){
//     if (marks>=90 && marks<=100){
//         return "Grade A";
//     }
//     else if (marks>=70 && marks<90){
//         return "Grade B";
//     }
//     else if (marks>=50 && marks<70){
//         return "Grade C";
//     }
//     else {
//         return "Grade D";
//     }
// }
// const res = (checkGrade(7));
// console.log(res);

// Q8 Create a program that determines if a given string is a palindrome.

// Q9 Write a function that checks whether a person is eligible to vote based on their age.
// function eligiblityCheck(name,age){
//     if (age>18){
//         console.log(`${name} your age is ${age}, you can vote`);
//     }
//     else {
//         console.log(`${name} youre age is ${age}, you are not eligible to vote`);
//     }
// }
// eligiblityCheck("shweta",2);

// Q10 mplement a program that determines the type of a triangle based on the lengths of its sides.

// function triangleType(s1,s2,s3){
//     if (s1==s2 && s2==s3){
//         return "Equilateral Triangle";
//     }
//     else if (s1==s2 || s1==s3 || s2==s3){
//         return "Isosceles Triangle"
//     }
//     else {
//         return "Scalene triangle";
//     }
// }
// const ans=(triangleType(s1=12,s2=12,d3=1)) ;
// console.log(ans);

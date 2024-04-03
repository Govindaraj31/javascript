myVariable ="govindaraj1";

console.log(myVariable);
//length
console.log("GOvindaraj = ",myVariable.length," Characters");

//string methods
console.log("7th character of Govindaraj = ",myVariable.charAt(7));  

//index of
console.log("ar where it is in govindaraj = ",myVariable.indexOf("a"))

//lastindexof
console.log("a where it is in govindaraj =  ",myVariable.lastIndexOf("a"));

//slice
console.log(myVariable.slice(5,10));
console.log(myVariable.slice(5));

//lowercase and uppercase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

//includes
console.log(myVariable.includes("araj"));

//split
console.log(myVariable.split("a"));

//Numbers

const myFunction = "Govindaraj"

const myNumber = 42

const myFloat = 42.0

console.log(myNumber === myFloat);
console.log(myFunction);


//Numbers methods
const myFunction1 = "42"

const myNumber1 = 42

const myFloat1 = 42.0

console.log(myNumber1 === myFloat1);
console.log(myFunction1);
console.log(Number(myFunction1)+3);

const myFunction2 = "423"

const myNumber2 = 34

const myFloat2 = 34.05

console.log(myNumber === myFunction2);
console.log(myFunction2 + 3);  
console.log(Number("Govindaraj")+3);
console.log(Number(true));
console.log(Number(false));
console.log(Number.isInteger(myNumber2));
console.log(Number.isInteger(myFunction2));

const myFunction3 = "430.98aaa";
const myNumber3 = 35
const myFloat3 = 35.06
console.log(Number.parseFloat(myFunction3));
console.log(Number.parseInt(myNumber3));
console.log(Number.parseInt(myFunction3));

const myFunction4 = "430.9865";
const myFunction5 = "Govindaraj";
const myFloat4 = 35.09876

console.log(Number.parseFloat(myFunction4).toFixed(2));
console.log(Number.parseFloat(myFloat3));
console.log(myFloat4.toFixed(3).toString());
console.log(parseFloat(myFunction4).toFixed(2).toString());
console.log(myFloat4.toFixed(3).toString());

Number.isNaN
isNaN

console.log(Number.isNaN(myFunction4));
console.log(isNaN(myFunction4));
console.log(isNaN(myFunction5));


console.log(Math.floor(Math.random()*100)+ 1);
console.log(Math.pow(3,4));

//character find methods
const myName = "Govindaraj";

console.log(myName.charAt((Math.floor(Math.random()*myName.length))));

//if 

myName1 = "saivardhan"
myAge = 23

let myJoin = myName1 + myAge
let reply;

console.log(myJoin);
 
if(myJoin === "saivardhan23")
{
    reply = `Welcome ${myJoin}`;
}
else
{
     reply = "Retry Your Name"
}
console.log(reply);

//else if

let firstInterview = true;
let secondInterview = false;
let reply1;
let username = "SaiVardhan";

if(firstInterview)
{
    reply1 = `Your not selected First Round Better Luck Next Time ${username}`;
}
else if( username && secondInterview)
{
    reply1 = `Your are Selected First Round ${username} and be ready for Second Round`;
}
else if( username )
{
    reply1 = `Wait for First Round Result ${username}`;              
}
else{
    reply1 = `UserName is not found ${username}`;
}

console.log(reply1);

//nested if class

let testscore = 45;
let grade;
let collegestudent = true;

if(testscore>=90)
{
    grade = `A Grade`;
}
else if(testscore>=70)
{
     grade = `B Grade`;
}
else if(testscore>=60)
{
    grade = `C Grade`;
}
else if(testscore>=50)
{
     grade = `D Grade`;
}
else
{
    if(collegestudent)
    {
        grade = `RA`;
    }
     else
     {
        grade = `Your Fail`;
     }
}
console.log(grade);

//switch Statement

switch (Math.floor(Math.random()*4))
{
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
        
     default :
         console.log("Not Match");
}


let player = "rock";
let computer= "Paper";

switch (player)
{
    case computer:
        console.log("!Tie");
        break;

    case "rock":
        if(computer === "Scissors")
        {
            console.log("Player Win");
        }
        else
        {
            console.log("Computer Win");
        }
        break;

    default :
           console.log("No Tie !");
    
}

//conditional Ternary Operators 

let Subscriber = "Subscribe";

let response = Subscriber == "Subscribed" ? "Welcome" : "Kindly Subscribe";
console.log(response);

let testscore1 = 39;

let grade1 = testscore1 > 89 ? "A" : 
             testscore1 > 79 ? "B" : 
             testscore1 > 69 ? "C" :
             testscore1 > 59 ? "D" : 
             testscore1 > 49 ? "E" : "RA";

console.log(grade1);
  
//conditional Ternary Operators 

// let player1 = "rock";
// let computer1 = "paper";

// let result = player1 === computer1 ? "TIE !" :
//              player1 === "paper" && computer1 === "rock" ? "player Win" :
//              player1 === "scissor" && computer1 === "paper" ? "player win" :
//              player1 === "rock" && computer1 === "scissor" ?  "player win" : "computer win" ;
// console.log(result);

//let myWebsite = alert("Hi Govindaraj");
//console.log(myWebsite);

// let myWebsite = confirm("Hi Govindaraj");
// console.log(myWebsite);

// let myData = prompt("Enter your name");
// console.log(myData ?? "you didn't enter your name");

// let myData = prompt("Enter your Name");

// if(myData)
// {
//     console.log(myData ?? "you didn't enter your name");
// }
// else
// {
//     console.log("you didn't enter your name");
// }

// console.log(myData.trim().length);

// let player2 = "rock";
// let computer2 = "scissor";

// let result1 = player2 === computer2 ? "tie" :
//               player2 === "paper" &&  computer2 === "rock" ? "player win" :
//               player2 === "scissor" && computer2 === "paper" ? "player win" :
//               player2 === "rock" && computer2 === "scissor" ? "player win" : "computer win" ;

// console.log(result1);


// let playGame = confirm("shall we play a game rock,paper, or scissors ?");

// if(playGame)
// {
//     let playerChoice = prompt("Enter your Choice rock,paper, or scissors");

//     if(playerChoice)
//     {
//         let playerOne = playerChoice.trim().toLowerCase();

//         if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors" )
//         {
//             let computerChoice = Math.floor(Math.random()*3 + 1); 
//             let computer = computerChoice === 1 ? "rock" :
//                            computerChoice === 2 ? "paper" : "scissors";

//             let result = playerOne == computer ? "TIE !" :
//                         playerOne == "paper" && computerChoice == "rock" ?  
//                         `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne   wins`:
//                          playerOne == "rock" && computerChoice == "scissors" ? 
//                          `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins` :
//                          playerOne == "scissors" && computerChoice == "paper" ? 
//                          `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins`:
//                          `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`;
            
//                          alert(result);
//             let playAgain = confirm("play Again");
//             playAgain ? location.reload() : alert("ok thanks for playing");
//         }
//         else
//         {
//            alert("You didn't enter rock, paper, or scissors.");
//         }
//     }
//     else
//     {
//          alert("I guess you change your mind. may be later.");
//     }
// }
// else
// {
//         alert("i understand you not interest play the game. it's ok thank you.");
// }
   
// console.log(result);

// let playGame = confirm("Shall we Play rock, paper, scissors");

// if(playGame)
// {
//     let playerChoice = prompt("Enter your Choose");

//     if(playerChoice)
//     {
//         let playerOne = playerChoice.trim().toLowerCase();

//         if(playerOne == "rock" || playerOne == "paper" || playerOne == "scissors")
//         {
//           let computerChoice = Math.floor(Math.random()*3 + 1);

//           let computer = computerChoice == 1 ? "rock" :
//                          computerChoice == 2 ? "paper" : "scissor";
          
//           let result = playerOne == computer ? "TIE !" :
//                        playerOne == "rock" && computer == "paper" ?
//                        `playone ${playerOne}\ncomputer ${computer}\n computer wins`:
//                        playerOne == "paper" && computer == "scissors" ?
//                        `playone ${playerOne}\ncomputer ${computer}\n computer wins`:
//                        playerOne == "scissors" && computer == "rock" ?
//                        `playone ${playerOne}\ncomputer ${computer}\n computer wins`:
//                        `playone ${playerOne}\ncomputer ${computer}\n player wins`;

//                         alert(result);
//                 let playAgain = confirm("play aGain");
//                 playAgain ? location.reload() : alert("ok thanks playing");

//         }
//         else
//         {
//             alert("you didn't give rock, paper, scissors");
//         }

//     }
//     else
//     {
//         alert("i guess you change ur mind. may be later")
//     }
// }
// else
// {
//      alert("i understand your not interest in game. thank you");
// }

// let playGame = confirm("shall we play rock, paper, scissors");

// if(playGame)
// {
//      let playerChoice = prompt("enter your choice");

//      if(playerChoice)
//      {
//         let playerOne = playerChoice.trim().toLowerCase();

//         if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors")
//            {
//              let computerChoice = Math.floor(Math.random()*3  + 1);

//              let computer = computerChoice === 1 ? "rock" : 
//                             computerChoice === 2 ? "paper" : "scissors";
             
//              let result = playerOne == computer ? "Tie !" :
//                           playerOne == "rock" && computer == "paper" ?
//                           `playerone: ${playerOne}\ncomputer: ${computer}\ncomputer win!` :
//                           playerOne == "paper" && computer == "scissors" ?
//                           `playerone: ${playerOne}\ncomputer: ${computer}\ncomputer win!` :
//                           playerOne == "scissors" && computer == "rock" ?
//                           `playerone: ${playerOne}\ncomputer: ${computer}\ncomputer win!` :
//                           `playerone: ${playerOne}\ncomputer: ${computer}\nplayer win!` ;
//                           alert(result);
                           
//                           let playAgain = confirm ("playagain");
//                           playAgain ? location.reload() : alert("thanks for playing")
//             }
//         else
//         {
//            alert("you didin't enter the correct choice");
//         }
//      }
//      else
//      {
//         alert("i guess change your mind. may be later");
//      }
// }
// else
// {
//     alert("i think ur not interest to play this game");
// }

//loop

//while loop

// let i=1;

// while(i<=50)
// {
//     console.log(i);
//     i=i+10;
// }

// //do while loop

// let n=50;

// do
// { 
//     console.log(n);
//     n= n+1;
// }
// while(n<=50)

// //for loop 

// let name ="govindaraj";

// for(i=0;i<= name.length;i++)
// {
//     console.log(name.charAt(i));
// }

// //nested for loop

// let name1 ="sai";

// for(let i=1;i <= name1.length;i++)
// {
//     for(let j=1;j <= name1.length;j++)
//     {
//         console.log(i,j);
//     }
// }

let x = 0;

while(x < 10)
{
    if(x === 5)
    {
        break;
    }
    x= x+1;
}

console.log(x);

// let text ='govindaraj';
// for (let i=0;i<=10;i++)
// {
//     if(i == 3)
//     {
//         continue;
//     }
//     text = text + i;
// }

// console.log(text);
  
let y=1;

do{
     
    console.log(y)
    if(y == 4)
    {
      break;
    }
    y = y+1;
    
}while(y<=10)

// let firstround = false;
// let secondround = false;
// let username = "prasanth";
// let reply1;

// if(firstround)
// {
//     reply1 = `your not selected in firstround ${username}`;
// }
// else if(username && secondround)
// {
//     reply1 = `your are selected firstround ${username} Be ready for second round`;
// }
// else if(username)
// {
//     reply1 = `waiting for firstround ${username}`;
// }
// else 
// {
//     reply1 = `username not found ${username}`;
// }
// console.log(reply1);


// let player1 = "rock";
// let computer1 = "rock";

// switch(player1)
// {
//     case computer1 :
//         console.log("tie !");
//       break;
      
//     case "rock" :
//         if(computer1 === "scissors")
//         {
//             console.log("player win!")
//         }
//         else
//         {
//            console.log("computer win!");
//         } 

//        break;
//     case "paper" :
//         if(computer1 === "rock")
//         {
//             console.log("player win!");
//         }
//         else
//         {
//             console.log("computer win!");
//         }
        
//         break;

//        case "scissors" :
//         if(computer1 === "paper")
//         {
//             console.log("player win!")
//         }
//         else
//         { 
//            console.log("computer win!");
//         } 
//          break;
//         default :
//           console.log("no tie!");

   
// }

// let player1 = "scissors";
// let computer1= "Paper";

// switch (player1)
// {
//     case computer1:
//         console.log("!Tie");
//         break;

//     case "rock":
//         if(computer1 === "Scissors")
//         {
//             console.log("Player Win");
//         }
//         else
//         {
//             console.log("Computer Win");
//         }
//         break;

//     default :
//            console.log("No Tie !");
    
// }

// switch (Math.floor(Math.random()*5 ))
// {
//     case 1 :
//         console.log("1");
//         break;

//     case 2 :
//         console.log("2");
//         break;

//     case 3 :
//         console.log("3");
//         break;

//     case 4 :
//         console.log("4");
//         break;
//     default :
//       console.log("not found");
// }

// let player3 = "paper";
// let computer3 = "scissors";

// let result = player3 == computer3 ? "Match Tie":
//              player3 === "paper" && computer3 === "rock" ?
//              "player win!" :
//              player3 === "rock" && computer3 === "scissors" ? 
//              "player win!" :
//              player3 === "scissors" && computer3 === "paper" ?
//              "player win!" : "computer win!";

// console.log(result);
let text ='govindaraj';
for (let i=0;i<=10;i++)
{
    if(i == 3)
    {
        break;
    }
    text = text + i;
}

console.log(text);

let myName5 = "SaiVardhan";

for(let i=0;i <=10;i++)
{
    if(i === 5)
    {
        break;
    }

    myName5 = myName5 + i ;
}
console.log(myName5);

let myName6 = "SaiVardhan";

for(let i=0;i <= 10;i++)
{
    if(i === 6)
    {
        continue;
    }
    myName6 = myName6 + i ;
}
console.log(myName6);

let xy = sum(2,4);

function sum(a,b)
{
    return a+b;
}
console.log(xy);

function zx(a,b)
{
    return a+b;
}
console.log(zx(2,3))

function sum1(a,b)
{
    console.log(a);
    console.log(b);
    if(b === undefined)
    {
        return a;
    }
    return a+b;
}
console.log(sum1(4));

let myName7 = "govindaraj3110@gmail.com";
let myName8 = "sudharshan567@gmail.com";

console.log(myName7.slice(0,myName7.indexOf("@")));
console.log(myName8.slice(0,myName8.indexOf("@")));

function getUserNameByEmail(email)
{
    return (email.slice(0,email.indexOf("@")))
   
}
console.log(getUserNameByEmail("sudharshan890@gmail.com"));
console.log(getUserNameByEmail("bala3456@gmail.com"));
console.log(getUserNameByEmail("govindaraj3110@gmail.com"));


function mathSums(a,b)
{
    return (a+b)
}
 
console.log(sum())



//method one

function toProperCase(name)
{
    return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
}
console.log(toProperCase("prasanth"));
console.log(toProperCase("sudharshan"));
console.log(toProperCase("saivardhan"));
console.log(toProperCase("lakshmanan"));
console.log(toProperCase("bala"));
console.log(toProperCase("govindaraj"));

//methodTwo

// const toProperCase0 = function(name)
// {
//     return (name.charAt(0).toUpperCase)
// }
// console.log(toProperCase0("prasanth"));
// console.log(toProperCase0("sudharshan"));
// console.log(toProperCase0("saivardhan"));
// console.log(toProperCase0("lakshmanan"));
// console.log(toProperCase0("bala"));
// console.log(toProperCase0("govindaraj"));
 
// //methodThree

// const toProperCase1 = (name) =>
// {
//     return (name.charAt(0).toUpperCase)
// }
// console.log(toProperCase1("prasanth"));
// console.log(toProperCase1("sudharshan"));
// console.log(toProperCase1("saivardhan"));
// console.log(toProperCase1("lakshmanan"));
// console.log(toProperCase1("bala"));
// console.log(toProperCase1("govindaraj"));

var x1 = 1;
let y1 = 2;
const z1 = 3;

console.log(`global scope:${x1}`);
console.log(`global scope${y1}`);
console.log(`global scope${z1}`);

function myNumber(number)
{
    let x1=3;
    console.log(`local scope:${x1}`);
    console.log(`local scope:${y1}`);
    console.log(`local scope:${z1}`);

    {
        const z1=5
        console.log(`block scope:${x1}`);
        console.log(`block scope:${y1}`);
        console.log(`block scope:${z1}`);

    }
}
 myNumber()

 const Array=[]  
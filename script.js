const messageOne = ['church', 'boy', 'Gift', 'fish', 'person', 'love', 'hate' ];
const messageTwo = ['You', 'are', 'school', 'head', 'sit', 'on', 'light' ];
const messageThree = ['would', 'you', 'like', 'me', 'to', 'house', 'chair' ];

//function to generate random number
const getRandomMessage = () => {
    const randomMessageOneIndex = Math.floor(Math.random() * messageOne.length);
    const randomMessageTwoIndex = Math.floor(Math.random() * messageTwo.length);
    const randomMessageThreeIndex = Math.floor(Math.random() * messageThree.length);

    const randomMessageOne = messageOne[randomMessageOneIndex];
    const randomMessageTwo = messageTwo[randomMessageTwoIndex];
    const randomMessageThree = messageOne[randomMessageThreeIndex];


    const completeMessage = `${randomMessageOne} ${randomMessageTwo} ${randomMessageThree}`; 

    return completeMessage; 
}

//call the function 
const randomMessage = getRandomMessage(); 

//log results to the console
console.log(randomMessage); 


// Code your solutions in this file
function writeCards(names, occasion) {
  let messages = [];
  
 for (let i = 0; i< names.length; i++){
    messages.push(
        `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`
    )
 }
 return messages;
}

function countDown(countDown) {
    while (countDown >= 0){
        countDown--
        console.log(countDown+1)
    }
}
countDown(5)
const prompt = require('prompt-sync')({sigint: true})

howMany = prompt('HOW MANY BOTTLES OF BEER ON THE WALL!! ')

beer = ''

oneBeer = 1

noBeer = 0


while (howMany>noBeer){
  if(howMany>oneBeer){
  console.log(`${howMany} bottles of beer on the wall, ${howMany} bottles of beer, take one down pass it around ${howMany - 1} bottles of beer on the wall.`)
  
  }else{
    console.log(`${oneBeer} bottle of beer on the wall, ${oneBeer} bottle of beer, take one down pass it aroud, no more bottles of beer on the wall. Go to the store buy some more, 99 bottles of beer on the wall!`)
  } howMany = howMany - oneBeer 
}
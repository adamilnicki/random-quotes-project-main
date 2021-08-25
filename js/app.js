//Object inside an array of quotes
let quotes = [
  {
    quote: `Be yourself; everyone else is already taken.`,
    author: "Oscar Wilde",
  },
  {
    quote:
      `Two things are infinite: the universe and human stupidity; 
      and I'm not sure about the universe.`,
    author: "Albert Einstein",
  },
  {
    quote: `Be who you are and say what you feel,
    because those who mind don't matter, and those who matter don't mind.`,
    author: "Bernard M. Baruch",
  },
  {
    quote: `You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.`,
    author: "William W. Purkey",
  },
  {
    quote: `You know you're in love when you can't fall asleep 
    because reality is finally better than your dreams.`,
    author: "Dr. Seuss",
  },
  {
    quote: `Be the change that you wish to see in the world.`,
    author: "Mahatma Gandhi",
  },
  {
    quote: `Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend`,
    author: "Albert Camus",
  },
];

let btn = document.querySelector("#generate-btn");
let displayQuote = document.querySelector("#quote");
let displayAuthor = document.querySelector(".author");

btn.addEventListener('click',function(){
  for(let i=0;i<quotes.length;i++){
    var random = Math.floor(Math.random()*quotes.length);
  }
  console.log(random);

  displayQuote.innerHTML=quotes[random].quote;
  displayAuthor.innerHTML=quotes[random].author;
});
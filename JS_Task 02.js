var Quotes = ["Be yourself; everyone else is already taken.<br> ― Oscar Wilde",
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.<br>― Marilyn Monroe",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.<br>― Albert Einstein",
"So many books, so little time.<br>― Frank Zappa",
"A room without books is like a body without a soul.<br>― Marcus Tullius Cicero",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.<br>― Bernard M. Baruch",
"You only live once, but if you do it right, once is enough.<br>― Mae West",
"Be the change that you wish to see in the world.<br>― Mahatma Gandhi","Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.<br>― Martin Luther","Live as if you were to die tomorrow. Learn as if you were to live forever.<br>― Mahatma Gandhi","It is better to be hated for what you are than to be loved for what you are not.<br>― Andre Gide","I am so clever that sometimes I don't understand a single word of what I am saying.<br>― Oscar Wilde","Without music, life would be a mistake.<br>― Friedrich Nietzsche"]

function newQuotes(){
  var randomNum = Math.floor(Math.random()*(Quotes.length));
  document.getElementById("displayQuotes").innerHTML = Quotes[randomNum];
}
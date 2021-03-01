//let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}


function newQuote(){
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//async function getQuotes() {
   // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
   // const apiUrl = 'https://goquotes-api.herokuapp.com/api/v1/all/quotes';
  //  try{

  //   const response = await fetch(proxyUrl + apiUrl);
  //    apiQuotes = await response.json();
  //    console.log(apiQuotes);

  //  }
   // catch(error){

   // }
//}

newQuote();



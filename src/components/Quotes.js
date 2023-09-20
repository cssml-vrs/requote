import React, { useState, useEffect } from 'react';
import './Quotes.css'
import {QuoteTable} from './QuoteTable';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  //componentdidmount
  useEffect(() => {
    const savedQuotes = JSON.parse(
			localStorage.getItem('react-quotes-app-data')
		);
    let randomNum = Math.floor(Math.random() * localStorage.length);
    let randomQuote = savedQuotes[randomNum]
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    console.log(randomQuote)
    // let randomNum = Math.floor(Math.random() * dataQuotes.length);
    // let randomQuote = dataQuotes[randomNum];
//    getQuote()
//Write code here 
//random no. generator between 0-1
//choose get quote or randomize from local storage

var i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}
  }, []);

  const getQuote = () => {
    const savedQuotes = JSON.parse(
			localStorage.getItem('react-quotes-app-data')
		);
    let randomNum = Math.floor(Math.random() * savedQuotes.length);
    let randomQuote = savedQuotes[randomNum]
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    console.log(randomQuote)
    //read react-quotes-app-data
    //generate a random number
    //getitem()
    //const quoteList = {...localStorage};
    //JSON.parse(localStorage.getItem('react-quotes-app-data'))
    // let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     let dataQuotes = data.quotes;
    //     console.log(dataQuotes);
        //JSON.parse(localStorage.getItem("react-quotes-app-data"))
         
         //let randomQuote = quoteList[randomNum];
    //    let quoteNumber = localStorage.key(randomNum);

         
    //   })
  }

   const handleClick = () => {
    getQuote();
   }

  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="#" id="twet-quote">
            <span></span>
          </a>
          <a href="#" id="tumlr-quote">
            <span></span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;
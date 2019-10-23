import quotes from './assets/data/quotes.json';
import './style.css';

{
  const init = () => {
    console.log(quotes);
    loadQuotes();
  };

  const loadQuotes = () => {
    const $quotes = document.querySelector('.quotes');
    quotes.quotes.forEach(quote => {
      const $quote = document.createElement(`li`);
      $quote.textContent = quote.quote;
      $quotes.appendChild($quote);
    });
  };

  init();
}

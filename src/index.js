import quotes from './assets/data/quotes.json';
import './style.css';

{
    const init = () => {
        console.log(quotes);
        loadQuotes();
    };

    const loadQuotes = () => {
        const $quotes = document.querySelector('.quotes');
        $quotes.innerHTML = '';
        quotes.quotes.forEach(quote => {
            $quotes.innerHTML += 
            `<div class="quote_wrapper">
        <li class="quote">${quote.quote}</li>
        <a class='quote-button' href="">more info
        </a>
      </div>`;
        });
    }

    init();
}

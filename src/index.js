import './style.css';

{
    const init = () => {
        console.log(`test`);
        //loadQuotes();
    };

    const loadQuotes = () => {
        $quotes = document.querySelector(`.quotes`);
        const quotes = fetch('assets/data/quotes.json')
            .then(response => {
                return response.json();
            });

        $quotes.appendChild(`<li class="quote">${quotes[1].quote}</li>`);
    }

    init();
}

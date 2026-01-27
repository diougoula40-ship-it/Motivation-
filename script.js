const quotes = [
    { text: "Le seul moyen de faire du bon travail, c'est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { text: "L'échec est le fondement de la réussite.", author: "Lao Tseu" },
    { text: "Croyez en vous-même et en tout ce que vous êtes.", author: "Christian D. Larson" },
    { text: "N'attendez pas. Le moment parfait n'arrive jamais.", author: "Napoleon Hill" }
];

const btn = document.getElementById('new-quote');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex].text;
    authorText.innerText = quotes[randomIndex].author;
});

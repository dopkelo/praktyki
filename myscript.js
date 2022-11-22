const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const brakSpacji = (list) => list.filter((letter)=>letter !=' ');
const parzysteStrony = (list) => list.filter((book) => book.pages % 2 == 0);
const koniecY = (list) => list.filter((book) => book.genre.endsWith('y'));
const dlugoscTablicy = (list) => list.length;
const samTytul = (book) => book.map((a)=> a.title);
const polaczenie = (list) => list.reduce((a, b) => [...a, ...b]);
const zad6= compose(dlugoscTablicy,brakSpacji,polaczenie,samTytul,parzysteStrony,koniecY);
console.log(zad6(books));
const nieParzysteStrony = (list) => list.filter((book) => book.pages % 2 == 1);
const pozytywneOceny = (list) => list.filter((a) => a.rating>5).length;
const tytulZLiczba = (list) => list.filter((a) =>/\d/.test(a.title));
const zad7= compose(pozytywneOceny,nieParzysteStrony,tytulZLiczba);
console.log(zad7(books));
const drugiTytul = (title) => title.sort((a,b) => b.length -a.length).at(1);
const zad8= compose(drugiTytul,samTytul);
console.log(zad8(books));



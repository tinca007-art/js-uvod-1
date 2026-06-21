// typy uvozovek
const a = "Ahoj"; // klasické
const b = 'Ahoj'; // apostrofy
const c = `Ahoj`; // backticky -> můžu psát na více řádků

// delka retezce
console.log(a.length);
console.log(b.length);

// spojovani textovych retezcu
const jmeno = 'Alena';
const rok = 1997;
console.log(a +''+ jmeno); // spojení s mezerou -> prázdné uvozovky
console.log(jmeno +' se narodila v roce '+ rok + '.');

// template literal - vice radku
const text = `Alena chodí
na vysokou školu
v Praze`;


// template literal - interpolace hodnot
const zprava = `${a}! Studentka ${jmeno} se narodila v roce ${rok}.`;
console.log(zprava);



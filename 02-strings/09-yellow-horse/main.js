/*
Žluťoučký kůň

Víte, že ve větě `Příliš žluťoučký kůň úpěl ďábelské ódy` se vyskytují všechna česká písmena s diakritikou? M

ějte proměnnou s touto větou a pomocí metody `slice()` z ní do nové proměnné získejte slovo `kůň`.
Do další proměnné pak získejte část textu začínající na třetím písmenu od konce.
*/

const text = 'Příliš žluťoučký kůň úpěl ďábelské ódy';
const zvire = text.slice(17, 20);
console.log(zvire);
const text2 = text.slice(-3);
console.log(text2);

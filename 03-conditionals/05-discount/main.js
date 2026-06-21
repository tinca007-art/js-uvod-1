/*
Sleva

V programu vytvořte proměnnou s celkovou hodnotou zboží v košíku.

Je-li v košíku zboží za více jak 1000 Kč, dostane zákazník slevu 10 %.
Pokud je hodnota zboží větší jak 3000 Kč, dostane slevu 20 %.
Do konzole vypište, kolik zákazník za svoje zboží zaplatí.
*/

const cena = 1500;

if(cena > 1000) {
    console.log('sleva 10%');
} else if (cena > 3000) {
    console.log('sleva 20%');
}
/*
Délka jména

Nechte uživatele pomocí prompt() zadat jeho jméno.

Do konzole vypište text ve tvaru:
Jméno Alena má 5 písmen.

Do textu samozřejmě doplňte jméno, které zadal uživatel, a zjistěte jeho správnou délku.
*/

const jmeno = prompt('Zadej své jméno');
console.log(`Jméno ${jmeno} má ${jmeno.length} písmen`);
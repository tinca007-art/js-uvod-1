/*
Nechte uživatele pomocí prompt() zadat jméno.

Do konzole vypište:
- jméno napsané velkými písmeny
- jak je zadané jméno dlouhé
- třetí písmeno ve jméně

Pokud uživatel zadá Alexandr, program by měl vypsat:
ALEXANDR, 8, e.
*/

const jmeno = prompt('Zadej své jméno');
console.log(jmeno.toUpperCase());
console.log(jmeno.length);
console.log(jmeno.slice(2, 3));
/*
Sudé nebo liché číslo

Nechte uživatele zadat libovolné číslo.

Použijte ternární operátor a interpolaci textových řetězců a do konzole vypište text v tomto tvaru:
Číslo 7 je liché číslo.
*/

const cislo = prompt('Zadej číslo');

console.log(`Číslo ${cislo} je ${cislo % 2 === 1 ? 'liché' : 'sudé'} číslo.`)
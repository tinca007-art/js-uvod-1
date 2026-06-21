/*
Skrývání čísla

Nechte uživatele pomocí `prompt()` zadat telefonní číslo. Z bezpečnostních důvodů do konzole vypište číslo tak, že čitelné jsou pouze poslední tři číslice a zbytek předtím je nahrazený hvězdičkami. Neřešme vůbec, zda uživatel zadá číslo s mezerami nebo ne.

Pokud tedy uživatel zadá `603 123 456` do konzole se vypíše `********456`

**Chyták:** Pozor na to, že uživatel může číslo zadat s mezerami nebo bez mezer mezi trojčíslími, nebo s nebo bez mezinárodní předvolby `+420` na začátku. Nemůžeme se tedy spolehnout na to, že zadané číslo má vždy konkrétní počet znaků. Musíme vždy odseknout poslední tři znaky z původního čísla a doplnit je zepředu hvězdičkami do původní délky zadaného řetězce.
*/


const telefon = prompt('Zadej telefonní číslo');
console.log(telefon.slice(-3).padStart(9, '*'));
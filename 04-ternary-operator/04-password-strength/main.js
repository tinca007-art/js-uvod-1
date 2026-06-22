/*
Síla hesla

Nechte uživatele zadat heslo. Do konzole vypište text ve tvaru:
Máte silné/slabé heslo.

Heslo je silné, pokud má délku 8 a více znaků. Jinak je slabé.
*/

const heslo = prompt('Zadej heslo');
console.log(`Máte ${heslo.length >= 8 ? 'silné' : 'slabé'} heslo.`);
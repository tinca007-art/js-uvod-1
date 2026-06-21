/*
Klady a zápory

Nechte uživatele zadat pomocí prompt() číslo.

Do konzole vypište, zda jde o kladné nebo záporné číslo, nebo zda je číslo nula.
*/

const cislo = Number(prompt('Zadej číslo'));
if (cislo > 0) {                    
console.log('kladné číslo');
} else if (cislo === 0) {
    console.log('číslo je nula');
} else {
    console.log('číslo je záporné');
}
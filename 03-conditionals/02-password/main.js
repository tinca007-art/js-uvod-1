/*
Heslo

Nechte uživatele pomocí prompt() zadat heslo.

Pokud zadal správné a extrémně bezpečné heslo "heslo123", napište do konzole, že ho vítáte v tajné části aplikace.

Pokud zadal heslo špatně, napište mu, že má jít tam, kam ☀ nesvítí (tj. do sklepa).
*/

const heslo = prompt('Zadej heslo');

if (heslo === 'heslo123') {
    console.log('Vítáme tě v tajné sekci aplikace');
} else {
    console.log('Jdi tam, kde slunce nesvítí(tj. do sklepa)');
}
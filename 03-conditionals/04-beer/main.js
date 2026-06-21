/*
Pivo 🍺

Máte životně důležitý úkol. Nesmíte zklamat!

Nechte uživatele zadat desetinné číslo, které představuje množství piva v půlitru.

Použijte podmínku if a do konzole vypište, zda je pivo podmírák (tj. objem je méně než 0.5 litru) nebo zda je množství piva v pořádku.

Pozor na to, že prompt() vrací hodnotu jako string, i když tam zadáte číslo. Než budete s hodnotou pracovat, je potřeba ji převést na číslo.
*/

const pivo = Number(prompt('Zadej objem piva'));

if(pivo < 0.5) {
    console.log('Je to podmírák');
} else {
    console.log('Vše je v pořádku');
}
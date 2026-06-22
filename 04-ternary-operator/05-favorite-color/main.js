/*
Oblíbená barva

Nechte uživatele zadat barvu.

Použijte ternární operátor a do konzole vypište:
"Tuhle barvu mám taky rád”, pokud se jedná o zelenou nebo modrou.
Pro jakoukoliv jinou barvu napište “To není moje oblíbená barva”.

Použijte ternární operátor, ne podmínku if.
*/

const barva = prompt('Zadej barvu');
console.log( barva === 'zelená' || barva === 'modrá' ? 'Tuhle barvu mám taky rád' : 'To není moje oblíbená barva');
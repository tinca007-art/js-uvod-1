// if
// else
// bloky kódu {}
// else if
// poradi podminek v if/else if vetvich
// vnorene podminky

let vek = 14;

if (vek >= 18) {
console.log( 'Jsi dospělý. Tady máš pivo');
} else{
    console.log('Jsi dítě. Tady más limču');
}
// = operátor přiřazení
/*if (vek = 14) {
    console.log('Je ti 14 let');
} else {
    console.log('Není ti 14 let');
}
*/

// operátor porovnání
if (vek === 14) {
    console.log('Je ti 14 let');
} else {
    console.log('Není ti 14 let');
}

/*
=== rovná se
> větší než
< menší než
>= větší nebo rovno
<= menší nebo rovno
== rovná se, ale nepoužívat!
*/

 vek = 31;
if (vek < 18) {
    console.log('dítě');
} else if (vek < 50) {
    console.log('dospělý');
} else if (vek < 65) {
    console.log('dospělý, ale chodí pomalu');
} else {
    console.log('důchodce');
}

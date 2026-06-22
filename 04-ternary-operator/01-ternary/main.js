// ternarni operator

// statements -> příkazy, které se provádí
const vek = 19;
if ( vek >= 18) {
    console.log('jsi dospělý');
} else {
    console.log('jsi dítě');
}

// expressions -> výraz jehož výsledkem je hodnota
// podminka ? ano : ne
// vek >= 18 ? 'dospělý' : 'dítě'

console.log(`Je ti ${vek} let, jsi ${vek >= 18 ? 'dospělý' : 'dítě'}`);

const souhlas = true;
console.log(`Souhlas s obchodními podmínkami: ${ souhlas === true ? 'ano' : 'ne'}`);

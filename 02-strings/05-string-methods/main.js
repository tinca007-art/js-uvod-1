// objekt String
const jmeno = 'Alena';

// Velikosti pismen:
// toLowerCase -> převedení na malá písmena
console.log(jmeno.toLowerCase());

// toUpperCase-> převedení na velká písmena
console.log( jmeno.toUpperCase());

// Hledani v textu:
// includes() - obsahuje jiný textový řetězec?, hledání slova v textu
const text = 'Běží liška k táboru, narazila na závoru';
console.log(text.includes('liška')); // true
console.log(text.includes('Krocan')); // false

// startsWith(), endsWith() - začíná nebo končí na hledaný řetězec?
console.log(text.startsWith('Běží')); // true
console.log(text.endsWith('táboru')); // false

// indexOf() - najde pozici hledaného řetězce na indexu-> začíná na nule
console.log(text.indexOf('tábor')); // je na 13 indexu, ale 14 písmeno

// hledani bez ohledu na velikosti pismen
console.log(text.toLowerCase().includes('tábor')); // true
// Nahrazovani textu:
// replace(), replaceAll - nahradit
let rikanka = 'Skákal pes přes oves, pes má hlad, pes chce jíst';
console.log(rikanka.replace('pes', 'lachtan')); // nahradí první na který narazí
console.log(rikanka.replaceAll('pes', 'lachtan')); // nahradí všechny
rikanka = rikanka.replaceAll('pes', 'lachtan'); // uložení do původni proměnné
console.log(rikanka);
// Ziskani casti textu:
// slice() - získá text od-do určitého písmena
const basnicka = 'Byl prvni máj, lásky čas';
console.log(basnicka.slice(5, 10)); // začíná na pátem indexu a končí před desátým indexem
console.log(basnicka.slice(15)); // od 15 do konce
console.log(basnicka.slice(-4));  // 4 poslední písmena
console.log(basnicka.slice(-4, -2)); // řtvrté od konce do druhého od konce

// Dalsi uzitecne funkce:
// trim(), trimStart(), trimEnd() - odstranění mezer
const text1 = '   Ahojda, jahoda   ';
console.log(text1.trim()); // odstraní mezery na začátku i na konci 
console.log(text1.trimStart()); // na začátku
console.log(text1.trimEnd); // na konci

// padStart() - doplnění znaků na začátek do určené délky textu
const cislo = '42';
console.log(cislo.padStart(5, '0'));

const den = 7;
const mesic = 3;
const rok = 2026;

console.log(`${den.toString().padStart(2, '0')}.${mesic.toString().padStart(2, '0')}.${rok}`);

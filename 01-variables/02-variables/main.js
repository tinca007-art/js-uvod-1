
// dynamicke typovani

// rozdil mezi let a const
// console.log()
/* proměnné 
    let - hodnoty lze měnit 
    const - hodnoty nelze měnit
    nelze zakládat proměnou se stejným jménem!
*/

console.log("zaciname");

let jmeno = "Alena";  // promněná pak jméno proměnné a za rovná se je hodnota
 jmeno = "Katka";
 console.log(jmeno);

let barva; // nemusí se zadávat hodnota
barva = "zelená";
console.log(barva);

barva = "cervena";
console.log(barva);



const vek = 18; // doporučuje se používat, zajistí že neudělam chybu
// vek = 20;

const pocet = 7;  // musí se zadat hodnota hned při založení, nelze pak už přidat

// zakladni datove typy
// const pocet = 7; pocet je typ number

const text1 = "jednicka"; // typ string - textový řetězec
const text2 = 'dvojka' // shift + vlevo do enter, často se používá
const text3 = `trojka` //AltGr + dvakrát 7 (77) - backtick, jdou dělat speciální věci

// logické boolean hodnoty, většinou získáváme porovnáním
const pravda = true; // logická pravda
const nepravda = false; // logická nepravda

// speciální hodnoty
// datový typ null
const nic = null; // znamená to nic
let x; // x je hodnota undefined, nedefinovaná hodnota

// Javascript je dynamicky typovaný jazyk
// tzn. datový typ proměnné se určuje dynamicky podle hodnoty

let jmeno = "Alena"; // string
jmeno = 7; // jméno se změnilo na number
jmeno = false; // změnilo se na boolean



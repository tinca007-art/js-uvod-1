

// implicitni pretypovani
console.log(7+5);
console.log('7'+'5'); // +  -> spojování dvou textů dohromady
console.log(7+'5'); // implicitní, automaticky bude považovat za text->platí u +

console.log(7-'5'); // - -> provede opak z 5 udělá číslo, protože nemúže odebrat z 7 text 5

// explicitni konverze typů
// text na cislo
// - parseInt()
// - parseFloat()
// - Number()
// - unární +
const a = parseInt('765'); // z textu na celé číslo
console.log(a);

const b = parseInt('892ahijhld'); // to co není číslo odstraní
console.log(b);

const c = parseInt('75.455');
console.log(c);

const d = parseFloat('7.564541'); // převod na desetiné číslo
console.log(d);

const e = Number('17.98'); 
console.log(e);

const f = Number('17.98gdsh'); // hodnota NaN (not a number) výsledek není číslo, nešlo převést na číslo
console.log(f);

const g = +'15.3'; // unární +
console.log(g);

// explicitní konverze
// cislo na text
// - String()
// - cislo.toString()
// - cislo.toFixed() // na počet desetinných míst

const h = String(15);
console.log(h);
console.log(typeof h);

const i = 23;
const j = h.toString();
console.log(j)
console.log(typeof j);

const k = 42;
const l = k.toFixed(2);
console.log(l);

// Cokoliv na Boolean
// - číslo na Boolean: 0 → false, všechno ostatní true
// - text na Boolean: '' → false, všechno ostatní true
// pro čísla platí 0 je false jakékoliv jiné číslo je to automaticky true

const m = Boolean(5); // true
console.log(m);

const n = Boolean(0); // false

// pro stringy platí "" -> prázdný textový řetězec false cokoliv jiného -> true

const o = ''; // false
const p = 'ahoj'; // true
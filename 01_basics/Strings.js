const name = "varni"
const repocount = 50

// + operator se string join karna (concatenation) -> old method
console.log(name + repocount);

// Template literals se string me variable insert karna -> new method
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const str = new String("varni patel");

// length → string ki lambai
console.log(str.length);

// charAt() → given index ka character
console.log(str.charAt(2));

// at() → index se character (negative index allowed)
console.log(str.at(-1));

// charCodeAt() → character ka ASCII/Unicode value
console.log(str.charCodeAt(0));

// codePointAt() → Unicode code point
console.log(str.codePointAt(0));

// toUpperCase() → uppercase me convert
console.log(str.toUpperCase());

// toLowerCase() → lowercase me convert
console.log(str.toLowerCase());

// toLocaleUpperCase() → locale ke hisab se uppercase
console.log(str.toLocaleUpperCase());

// toLocaleLowerCase() → locale ke hisab se lowercase
console.log(str.toLocaleLowerCase());

// indexOf() → first occurrence ki position
console.log(str.indexOf("a"));

// lastIndexOf() → last occurrence ki position
console.log(str.lastIndexOf("a"));

// includes() → string me word hai ya nahi
console.log(str.includes("patel"));

// startsWith() → string kis se start hoti hai
console.log(str.startsWith("varni"));

// endsWith() → string kis par end hoti hai
console.log(str.endsWith("patel"));

// substring() → start se end tak substring
console.log(str.substring(0, 5));

// substr() → start aur length se substring (old method)
console.log(str.substr(0, 5));

// slice() → substring (negative index allowed)
console.log(str.slice(-5));

// concat() → strings ko join karna
console.log(str.concat(" developer"));

// repeat() → string ko repeat karna
console.log("hi ".repeat(3));

// replace() → first match replace karna
console.log(str.replace("varni", "hello"));

// replaceAll() → sabhi matches replace karna
console.log("a-b-a-b".replaceAll("a", "x"));

// split() → string ko array me todna
console.log(str.split(" "));

// search() → regex ya text ki position
console.log(str.search("patel"));

// match() → regex match result
console.log(str.match(/a/g));

// matchAll() → sabhi regex matches
console.log([...str.matchAll(/a/g)]);

// localeCompare() → do strings compare karna
console.log("a".localeCompare("b"));

// trim() → dono side ke spaces hatana
console.log("  hi  ".trim());

// trimStart() → left side ke spaces hatana
console.log("  hi  ".trimStart());

// trimEnd() → right side ke spaces hatana
console.log("  hi  ".trimEnd());

// padStart() → start me padding add karna
console.log("5".padStart(3, "0"));

// padEnd() → end me padding add karna
console.log("5".padEnd(3, "0"));

// normalize() → Unicode normalization
console.log(str.normalize());

// valueOf() → primitive string value
console.log(str.valueOf());

// toString() → string me convert
console.log(str.toString());

// anchor() → HTML anchor banana
console.log(str.anchor("myAnchor"));

// big() → HTML <big> tag
console.log(str.big());

// blink() → HTML blink tag (obsolete)
console.log(str.blink());

// bold() → HTML <b> tag
console.log(str.bold());

// italics() → HTML <i> tag
console.log(str.italics());

// fixed() → HTML <tt> tag
console.log(str.fixed());

// fontcolor() → HTML font color
console.log(str.fontcolor("red"));

// fontsize() → HTML font size
console.log(str.fontsize(5));

// link() → HTML link banana
console.log(str.link("https://example.com"));

// small() → HTML <small> tag
console.log(str.small());

// strike() → HTML <strike> tag
console.log(str.strike());

// sub() → HTML subscript
console.log(str.sub());

// sup() → HTML superscript
console.log(str.sup());

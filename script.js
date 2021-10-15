const vowels = ['a','o','u','i','e'];
const word = 'salom';

function findVowels(par) {
    let res = par.match(/[aouie]/gi)
    return res.length;
}
console.log(findVowels(word))


//// arrayda berilgan qiymatga teng sonlarni topish
const numbers = [1, 2, 3, 4, 5, 6];
const bigsum = 7;
function equalsum(arr, target) {
    let couple = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                couple.push([arr[i], arr[j]]);
            }
        }
    }
    return couple;
}
console.log(equalsum(numbers, bigsum));

//// palindrome sozni topish
function isPalindrome(word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}
console.log(isPalindrome("anna"));
console.log(isPalindrome("salom"));
console.log(isPalindrome("A roza upala na lapu Azora"));

//// anagramma sozni topish

function anagramma(word1, word2) {
    word1 = word1.toLowerCase().split('').sort().join('');
    word2 = word2.toLowerCase().split('').sort().join('');
    return word1 === word2;
}
console.log(anagramma("listen", "silent"));
console.log(anagramma("olma", "banan")); 

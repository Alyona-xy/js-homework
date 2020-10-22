/* Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
 */

/*  АЛГОРИТМ
1. Перебрать все слова через итератор. 


2. Предположить, что первое слово самое длинное. Если да  - выводим как результат.

3. В каждой новой итерации предполагать что новое слово длиннее чем первое. Если да - выводим как результат. */

function findLongestWord (string = "") {
    let longestWord = '';

    const words = string.split(' ');
    longestWord = words[0];
    
        for (const word of words) {

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
        return longestWord;
    }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

  console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
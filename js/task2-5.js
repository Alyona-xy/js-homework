/* Функция предикат
Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

АЛГОРИТМ.
1. Приводим строку к нижнему регистру.
2. Проверяем на содержание спам и сейл и если да, то возвращаем фальс.
3. В остальных случаях возвращаем тру. */

function checkForSpam (message) { 
    'use strict';
    // Write code under this line

        return message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false;
    /* if (message.toLowerCase.includes('sale') && message.toLowerCase.includes('spam')) {
       return true;
    }

    else {
        return false;
    } */
    
  }
 

  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
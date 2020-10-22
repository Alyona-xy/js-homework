/* Задача 3-6
Суммирование значений свойства из массива объектов
Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена умноженная на количество).

Вызовы функции для проверки работоспособности твоей реализации. */

// calculateTotalPrice(products, 'Радар'));
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800


Вариант 4.
function calculateTotalPrice (array, prop) {
    'use strict';
    // Write code under this line
    let totalSum = 0
  for (const item of array) {
    if(prop === item.name) {
      totalSum += item.price*item.quantity
    }
  }
  return totalSum
  }
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 }
  ]; 
  
  //console.log(calculateTotalPrice(products, 'Радар'));  
  // 9080
  
  //console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
  //console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
  //console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800




/* Вариант 3. */
/* function calculateTotalPrice (array, prop) {
    'use strict';
    // Write code under this line
    let totalPrice = 0;
    
    for (let i = 0; i < array.length; i += 1) {
        const values = Object.values(array[i]);
        const keys = Object.keys(array[i]);
        console.log(keys);
        console.log(values);
    for (const key of keys) {
        if (key[0] === prop) {
totalPrice += array[i].value[1] * array[i].value[2];
        }
        break;
    }
}
    return totalPrice;
}

  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 }
  ]; 
  
  console.log(calculateTotalPrice(products, 'Радар'));  */
  // 9080
  
  //console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
  //console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
  //console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800




  /* Вариант 2.  */
  /* function calculateTotalPrice (array, prop) {
    'use strict';
    // Write code under this line
    let totalPrice = 0;

   for (let i = 0; i < array.length; i += 1){
      for (prop of array[i]){
          if (array[i].key[0] === prop)
        totalPrice[prop] = array[i].prop.price * array[i].prop.quantity;
        console.log(totalPrice[prop]);
      }
    }

return totalPrice;
} */

  // Объекты и ожидаемый результат
  /* const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 }
  ]; 
  
  console.log(calculateTotalPrice(products, 'Радар'));  */
  // 9080
  
  //console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
  //console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
  //console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800



 /*  Вариант 1. 
  function calculateTotalPrice (array, prop) {
    'use strict';
    // Write code under this line
    for(let i = 0; i < array.length; i += 1) {
      const findingKey = Object.keys(array[i]);
      console.log(findingKey);
    let totalPrice = 0;
    if (prop === array[i][findingKey[0]]) {
    totalPrice = price[i] * quantity[i];
}
return totalPrice;
    } 
}

  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 }
  ]; 
  
  console.log(calculateTotalPrice(products, 'Радар'));  
  // 9080
  
  //console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
  //console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
  //console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800 */
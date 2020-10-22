/* Задача 3-5
Оператор in и метод push
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте. */

/* Вариант 4. */ 
function getAllPropValues (array, prop) {
    'use strict';
    // Write code under this line 
    let allPropValues = [];
    for(let i = 0; i < array.length; i += 1){
      if (prop in array[i]){
        allPropValues.push(array[i][prop]);
      }
    }
    return allPropValues;
  }
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
  console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category'));
  //  []
  


/* Вариант 3. */
/* function getAllPropValues (array, prop) {
    'use strict';
    // Write code under this line
    let property = []; 
    for (const product of array) {
        for(const key in product){
            let keys = product[prop];
        if (key === prop) {
        property.push(keys);
        }
        }
      }
    return property;
    }          
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 

  let category = '';
  for (let i = 0; i < products.length; i += 1) {
  products[i].category = products[`category`];  
  }
  console.log(products);
  
  console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category'));
  //  [] */






/* Вариант 2.
function getAllPropValues (array, prop) {
    'use strict';
    // Write code under this line
    
    let allPropValues = [];
    const productPropList = Object.entries(array);
    console.log(productPropList);

    let productProp = '';
    for (const productProp of productPropList) {
        allPropValues.push(prop[value]);
        console.log(allPropValues);
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
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  let category = '';
  for (let i = 0; i < products.length; i += 1) {
  products[i].category = products[`category`];  
  }
  console.log(products);
  
  console.log(getAllPropValues(products, 'name'))
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category'));
  //  []
 */






/* Вариант 1
 function getAllPropValues (array, prop) {
    'use strict';
    // Write code under this line
    const product = [...products]; 
    let value = '';
    const key = prop;
    for (const product in products) {
        console.log(product[key].value);
    }
    return product.key.value;
    

     let value = '';
    for (const prop in productPropList) {
        if (prop) {
            allPropValues.push(prop.value);
            console.log(allPropValues);


    /for (const product of array) {
        console.log(product.prop[key]);

        const value = prop.value;
        for (const prop in product) {
            if (prop === true) {
               allPropValues.push(value);
               console.log(allPropValues);
            }            
        }
        }
        return allPropValues;
    
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  let category = '';
  for (let i = 0; i < products.length; i += 1) {
  products[i].category = products[`category`];  
  }
  console.log(products);
  
  console.log(getAllPropValues(products, 'name'))
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category'));
  //  [] */
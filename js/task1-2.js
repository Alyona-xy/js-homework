
// Write code under this line

Вариант 1.
let invoice = 100; 
const stock = 100;

let message = invoice = 100 ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!'

console.log(message)

invoice = 50
message = invoice = 50 ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!'

console.log(message)

invoice = 150
message = invoice = 150 ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер'

console.log(message)


Вариант 2.
let invoice = 100; 
const stock = 100;
let message = 'Заказ оформлен, с вами свяжется менеджер';

// Write code under this line
if (invoice = 100) {
 message = 'Заказ оформлен, с вами свяжется менеджер';
}
else if (invoice = 50) {
message = 'Заказ оформлен, с вами свяжется менеджер';
}
else (invoice = 150) {
message = 'На складе недостаточно товаров!';
};

console.log(message);


Вариант программа (3).

const invoice = 100; 
const stock = 100;

const messsage = 
stock <=  invoice ? 'Заказ оформлен, с вами свяжется менеджер' :  'На складе недостаточно товаров!';

console.log(message);

/* const invoice = 100; 
const stock = 100;
const message = invoice = 100 ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!' */
//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'  

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'   */
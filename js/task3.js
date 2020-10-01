/* const USER_PASSWORD = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if (ADMIN_PASSWORD == 'jqueryismyjam') {
message = ACCESS_IS_ALLOWED; }
else if (USER_PASSWORD == null) {
message = CANCELED_BY_USER; }
else if (USER_PASSWORD == 'bla') {
 message = ACCESS_DENIED; }

console.log(message);  */


const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if (userPassword === ADMIN_PASSWORD) {
message = ACCESS_IS_ALLOWED; }
else if (userPassword === null) {
message = CANCELED_BY_USER; }
else {
message = ACCESS_DENIED; }

console.log(message);



/* let userPassword = prompt('Введите пароль');

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if (userPassword === ADMIN_PASSWORD) {
  message === ACCESS_IS_ALLOWED; }
else if (userPassword === null) {
  message === CANCELED_BY_USER; }
else if (userPassword === 'bla') {
  message === ACCESS_DENIED; }

console.log(message); */
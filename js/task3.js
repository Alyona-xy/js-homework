const USER_PASSWORD = 'jqueryismyjam';

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

console.log(message); 

/* Вариант 2.
const USER_PASSWORD = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
USER_PASSWORD = prompt('Введите пароль');
if (USER_PASSWORD === ADMIN_PASSWORD) {
message = ACCESS_IS_ALLOWED; }
else if (USER_PASSWORD === null) {
message = CANCELED_BY_USER; }
else (USER_PASSWORD === 'bla') {
 message = ACCESS_DENIED; }

console.log(message);
 */
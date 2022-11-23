// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var haley: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value == 'number') {
        value.toLocaleString();
    }
    if (typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);
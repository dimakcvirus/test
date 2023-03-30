// let a = prompt('введите числщ', '');
// if(a > 1){
//     alert (a);
// }else{ alert("loh")}


// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
//
// let result
// {result ==(a + b < 4) ? alert('true'): alert('false') }



// let login = prompt('fff','')
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }








// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//         (login == '') ? 'Нет логина' :
//             '';
// let b = message;
// alert(b)


// alert( null || 2 || undefined );
//
//
// alert
//
// __________________#11 Функции__________________________
//             ДЗ
// function calc(a , b , operations) {
//     if(operations == 'add'){
//        return  a + b;
//     }else if ( 'multi' == operations){
//        return  b * a;
//     }else if ( 'subtract' == operations){
//        return   a - b ;
//     }
// }
// calc();
// console.log(calc(1, 2, 'multi'))
//

//
// function f(operation,a,b) {
//     switch (operation) {
//         case 'add':
//             return a + b
//
//         case 'subtract':
//             return a - b
//
//         case 'multiply':
//             return a *b;
//         default :
//             return null
//     };
//
// }
//
// console.log(f('add',1,2))



const phoneBook = {
    list: {
        "John": 123456789,
        "Jane Doe": 987654321,
        "Jim Smith": 111111111
    },
    add(name,number){
        this.list[name] = number;
    }
};
phoneBook.add("dimakc", 2504);
phoneBook.add("Alina", 1558777744666)
delete phoneBook.list["Jane Doe"];

for (const name in phoneBook.list  ){
console.log(name + ' - '  + phoneBook.list[name])
};


let clone = {};
delete phoneBook.list["John"];
delete phoneBook.list["Alina"]
for (let key in phoneBook.list){
    clone [key] = phoneBook.list[key]
 console.log(key + ' - ' + clone[key])

}






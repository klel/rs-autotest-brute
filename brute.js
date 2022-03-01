/**
 * Как юзать
 * 
 * 1. Логинимся в чудо аккаунте
 * Mail (yandex.ru)
 * ---
 * turk2@shpikls.ru
 * Rulune13
 * 
 * GitHub
 * ---
 * turk2@shpikls.ru
 * Rulune13!
 * 
 * 2. Идем в консоль и смотрим на странице автотеста и смотрим на get https://app.rs.school/api/course/56/tasks?status=inprogress
 * Т.к. любезно прилетают все возможные вопросы в json копируем их себе(тут, как пример массив questions для теста js basics )
 * 
 * 3. Копируем все это добро в консоль и пускаем в работу. запросы будут лететь с задержкой между, поэтому можно
 * ебнуть чаю:))
 * 
 * 4. В массиве result будут ответы на вопросы с ОДНИМ ответом.
 * 
 * 5. С галочками будет скорее всего факториальная сложность (в худшем случае) перебора всех возможных вариантов.
 * поэтому проще и быстрее на галки поотвечать самому попутно запуская post руками проверяя себя не отходя от кассы 
 * Делал следующим образом-
 * - Массив questions фильтруем так
 * questions.map((el, i) => ({n:i, q: el})).filter(el=>el.q.multiple)
 * - Полученное добро копируем себе в файлик
 * - и погнал запускать post(a, [b,c ...]).then(d => console.log(d.data.details)) как самопроверку
 * 
 * ToDo
 * Прикрутить хромовское расширение rssTestHelper к этому добру так чтобы результирующий набор от всех наших манипуляций тут
 * замапить на формат хрома шоб можно было не тратить время на ручное перебивание ответов в свой 
 *  уже настоящий тест:)
 */

const questions = [
    {
        "question": "Как вывести сообщение Hello world! в консоль?",
        "answers": [
            "alert('Hello world!');",
            "prompt('Hello world!');",
            "print('Hello world!');",
            "console.log('Hello world!');"
        ],
        "multiple": false
    },
    {
        "question": "Какими способами можно задать комментарии в JavaScript?",
        "answers": [
            "<!-- комментарий -->",
            "# комментарий",
            "// комментарий",
            "/* комментарий */"
        ],
        "multiple": true
    },
    {
        "question": "Каким символом в JavaScript отделяются инструкции, следующие одна за другой?",
        "answers": [
            ";",
            ",",
            ".",
            ":"
        ],
        "multiple": false
    },
    {
        "question": "Одна из самых распрастраненных ошибок с текстом 'undefined is not a function' (несоответствие типов) имеет название вида:",
        "answers": [
            "Uncaught ReferenceError",
            "Uncaught TypeError",
            "Uncaught SyntaxError",
            "Uncaught URIError"
        ],
        "multiple": false
    },
    {
        "question": "Оператор возведения в степень в JavaScript",
        "answers": [
            "++",
            "/",
            "**",
            "%"
        ],
        "multiple": false
    },
    {
        "question": "Оператор нахождения остатка от деления в JavaScript - это:",
        "answers": [
            "--",
            "/",
            "**",
            "%"
        ],
        "multiple": false
    },
    {
        "question": "Выберите записи с унарными операторами, одним или несколькими:",
        "answers": [
            "-4",
            "23 + 79",
            "+79",
            "+'4' + +'5'"
        ],
        "multiple": true
    },
    {
        "question": "Выберите выражения, удовлетворяющие коммутативному закону",
        "answers": [
            "42 - 10",
            "42 % 10",
            "42 + 10",
            "42 * 10",
            "4 ** 10"
        ],
        "multiple": true
    },
    {
        "question": "Выберите такое выражение, которое в результате вычисления даст 14",
        "answers": [
            "7 * 3 + (4 / 2) - (8 + (2 - 1))",
            "7 * 3 + (4 / 2) - 8 + 2 - 1",
            "7 * (3 + 4) / 2 - (8 + 2 - 1)",
            "7 * 3 + (4 / 2) - ((8 + 1) - 2)"
        ],
        "multiple": false
    },
    {
        "question": "Задача о числах с плавающей запятой. Сколько цифр после запятой будет в результате вычисления выражения (0.32 * 0.22 * 0.75) в браузере Google Chrome?",
        "answers": [
            "3",
            "4",
            "5",
            "6"
        ],
        "multiple": false
    },
    {
        "question": "Чему будет равен результат вычисления композиции операций (8 / 2 + 5 - -3 / 2)",
        "answers": [
            "5",
            "7.5",
            "10.5",
            "13"
        ],
        "multiple": false
    },
    {
        "question": "Каким типом данных является Infinity (бесконечность)?",
        "answers": [
            "undefined",
            "boolean",
            "string",
            "number"
        ],
        "multiple": false
    },
    {
        "question": "NaN имеет числовой тип. Каким будет результат выражения (NaN + 101)?",
        "answers": [
            "NaN",
            "0",
            "101",
            "102"
        ],
        "multiple": false
    },
    {
        "question": "Каким будет результат выполнения операции 1 / 0 ?",
        "answers": [
            "NaN",
            "Infinity",
            "undefined",
            "выведет ошибку"
        ],
        "multiple": false
    },
    {
        "question": "Какие из перечисленных значений являются строками?",
        "answers": [
            "'Hey'",
            "''",
            "'undefined'",
            "\"Hello\"",
            "' '",
            "\" \"",
            "\"\""
        ],
        "multiple": true
    },
    {
        "question": "С какой целью используется символ \\n?",
        "answers": [
            "умножение",
            "деление",
            "перевод строки",
            "спецсимвол одиночной кавычки",
            "спецсимвол двойной кавычки"
        ],
        "multiple": false
    },
    {
        "question": "Как создать строку с текстом It's cool?",
        "answers": [
            "'It's cool'",
            "'It\\'s cool'",
            "'It/'s cool'",
            "\"It's cool\""
        ],
        "multiple": true
    },
    {
        "question": "Какой символ под номером 59 в списке ASCII? Можно проверить методом строки fromCharCode",
        "answers": [
            "?",
            "!",
            "%",
            ";",
            "."
        ],
        "multiple": false
    },
    {
        "question": "Есть код console.log('после' + 'до'). Если в конец первой строки добавить 4 пробела, а во второй строке добавить 4 пробела в начало, то сколько пробелов суммарно будет между 'после' и 'до' при выводе результата в консоль?",
        "answers": [
            "0",
            "1",
            "2",
            "4",
            "8"
        ],
        "multiple": false
    },
    {
        "question": "Выберите те определения переменных, которые приведут к ошибке:",
        "answers": [
            "let first = 1; let second = 2;",
            "let first = 1; first = 2;",
            "let first = 1; let first = 2;",
            "const first = 1; first = 2;",
            "const first = 1, second = 2;"
        ],
        "multiple": true
    },
    {
        "question": "Что будет в результате выполнения кода: let a += 10;",
        "answers": [
            "Ошибка Uncaught SyntaxError: Unexpected token '+='",
            "a присвоится значение 0",
            "a присвоится значение 10",
            "a присвоится значение 20"
        ],
        "multiple": false
    },
    {
        "question": "Имя конструктора MyCarFactory задано с помощью подхода в именовании под названием:",
        "answers": [
            "kebab case",
            "camel case",
            "lower camel case",
            "snake case"
        ],
        "multiple": false
    },
    {
        "question": "Как создать строку с корректным приветствием по имени, которое содержится в переменной name?",
        "answers": [
            "const greeting = 'Hello ${name}'",
            "const greeting = 'Hello ', name",
            "const greeting = 'Hello name'",
            "const greeting = 'Hello ' + name",
            "const greeting = `Hello ${name}`"
        ],
        "multiple": true
    },
    {
        "question": "Каким будет результат выполнения кода '\\nHey!'[1]?",
        "answers": [
            "\\n",
            "n",
            "H",
            "e",
            "Uncaught SyntaxError: Invalid or unexpected token"
        ],
        "multiple": false
    },
    {
        "question": "Какие значения, как результат, нельзя получить при проверке типа данных с помощью typeof?",
        "answers": [
            "null",
            "number",
            "string",
            "NaN",
            "bigint",
            "Infinity"
        ],
        "multiple": true
    },
    {
        "question": "Какие из перечисленных типов данных являются примитивами?",
        "answers": [
            "function",
            "string",
            "number",
            "boolean",
            "object",
            "bigint"
        ],
        "multiple": true
    },
    {
        "question": "Каким будет результат в консоли после выполнения кода let name = 'Vasia'; name[3] = 'y'; console.log(name);?",
        "answers": [
            "Vasa",
            "Vayia",
            "Vasya",
            "Vasia"
        ],
        "multiple": false
    },
    {
        "question": "Чему равен результат записи '1' + 2 ?",
        "answers": [
            "строка 12",
            "число 12",
            "строка 3",
            "число 3"
        ],
        "multiple": false
    },
    {
        "question": "Как в JavaScript можно вызвать функцию myFun?",
        "answers": [
            "function myFun()",
            "myFun()",
            "myFun",
            "function()"
        ],
        "multiple": false
    },
    {
        "question": "Каким будет результат выполнения операции 4 * 'five'?",
        "answers": [
            "строка 4five",
            "число 20",
            "NaN",
            "SyntaxError"
        ],
        "multiple": false
    },
    {
        "question": "Какой результат вызова функции Math.pow(2,4)?",
        "answers": [
            "2",
            "4",
            "8",
            "16",
            "32"
        ],
        "multiple": false
    },
    {
        "question": "Каким будет результат после выполнения Math.min(10, 222, -5, 0, '-33')?",
        "answers": [
            "10",
            "222",
            "-5",
            "0",
            "-33"
        ],
        "multiple": false
    },
    {
        "question": "Что покажет консоль в результате вызова const RS = 'rs'; console.log('css', RS, 'js');?",
        "answers": [
            "css rs js",
            "cssrsjs",
            "cssjs",
            "css"
        ],
        "multiple": false
    },
    {
        "question": "Каков будет результат вызова Math.abs(Math.floor(-46.867));?",
        "answers": [
            "46",
            "47",
            "-46",
            "-47",
            "NaN"
        ],
        "multiple": false
    },
    {
        "question": "Что такое детерминированность функции?",
        "answers": [
            "Свойство функции, позволяющее передавать неограниченное количество аргументов",
            "Свойство функции, при котором она возвращает один и тот же результат для любых аргументов",
            "Свойство функции, при котором она возвращает один и тот же результат для одних и тех же аргументов",
            "Свойство функции, при котором ее сигнатурой определено конкретное количество аргументов, которое можно передавать при вызове"
        ],
        "multiple": false
    },
    {
        "question": "Каким образом JavaScript позволяет узнать тип данных переменной a?",
        "answers": [
            "type a",
            "a.type",
            "type(a)",
            "typeof a"
        ],
        "multiple": false
    },
    {
        "question": "Какой из перечисленных методов строки возвращает новую строку, где все буквенные символы преобразованы в верхний регистр?",
        "answers": [
            "toUpperCase()",
            "toLowerCase()",
            "toString()",
            "caps()"
        ],
        "multiple": false
    },
    {
        "question": "Какое значение свойства length будет у строки после выполнения кода let name = 'Vasia'; name.length = 50;",
        "answers": [
            "50",
            "5",
            "undefined",
            "При попытке выполнения кода произойдет ошибка"
        ],
        "multiple": false
    },
    {
        "question": "Какое значение будет содержать свойство length при вызове [1,2,3,4,5].length?",
        "answers": [
            "0",
            "4",
            "5",
            "undefined"
        ],
        "multiple": false
    },
    {
        "question": "Каков будет результат вызова const name = 'Vasia'; Math.abs(name.length - 15);?",
        "answers": [
            "NaN",
            "-15",
            "-10",
            "10",
            "15"
        ],
        "multiple": false
    },
    {
        "question": "Каким будет результат выполнения кода 'Vasia'.toUpperCase().length.toString()?",
        "answers": [
            "Строка 5",
            "Число 5",
            "Будет ошибка, так как в length отсутствует вызов",
            "Будет ошибка, так как у метода toUpperCase нет свойства length"
        ],
        "multiple": false
    },
    {
        "question": "Как написать функцию max(a,b), выбирающую максимальное из двух значений?:",
        "answers": [
            "const max = (a, b) => (a == b ? a : b)",
            "const max = (a, b) => (a > b ? a : b)",
            "const max = (a, b) => (a + b > a - b ? a : b)",
            "const max = (a, b) => (a + b < a - b ? a : b)"
        ],
        "multiple": false
    },
    {
        "question": "Выберите верную запись стрелочной функции show:",
        "answers": [
            "function show() {}",
            "const show = function() {}",
            "const show = () => {}",
            "const show = () {}"
        ],
        "multiple": false
    },
    {
        "question": "Какими способами может быть определена функция, чтобы в консоль выводилась строка RSSchool 2021Q3? Вызов выглядит так: console.log('RSSchool ' + showRS('2021', 'Q3'));",
        "answers": [
            "const showRS = () => arguments[0] + arguments[1]",
            "const showRS = (year, quarter) => year + quarter",
            "const showRS = (text = year + quarter) => text",
            "const showRS = (year, quarter) => {return year + quarter}",
            "const showRS = (year, quarter) => {return year, quarter}"
        ],
        "multiple": true
    },
    {
        "question": "Эти логические выражения вернут true:",
        "answers": [
            "0 === 1",
            "1 === '1'",
            "1 == '1'",
            "4 === 1 + 3",
            "'A' > 'a'",
            "'B' < 'b'",
            "'13' > 12",
            "'13px' > 12",
            "'13px' < '14'"
        ],
        "multiple": true
    },
    {
        "question": "Среди перечисленных, выберете правильные способы именования функций-предикатов",
        "answers": [
            "empty()",
            "errors()",
            "hasErrors()",
            "areEmpty()",
            "isShown()",
            "canShow()"
        ],
        "multiple": true
    },
    {
        "question": "Если a = true, b = true, то эти выражения вернут true:",
        "answers": [
            "a && b",
            "!a && b",
            "a && !b",
            "!a && !b",
            "!(a && b)",
            "!(!a && !b)"
        ],
        "multiple": true
    },
    {
        "question": "Если a = true, b = true, то эти выражения вернут true:",
        "answers": [
            "a || b",
            "!a || b",
            "a || !b",
            "!a || !b",
            "!(a || b)",
            "!(!a || !b)"
        ],
        "multiple": true
    },
    {
        "question": "Заданы переменные const a = ''; const b = 9; const c = null;. Какие выражения вернут true?",
        "answers": [
            "!!(!a || !b && !c)",
            "!!(a || !b && !c)",
            "!!(a || !b || c)",
            "!(!a && b && !c)",
            "!(a || !b && !c)"
        ],
        "multiple": true
    },
    {
        "question": "Выберите корректно записанные условные конструкции:",
        "answers": [
            "if {}",
            "if (condition) {}",
            "if (condition) {} else {}",
            "if (condition) {} else (condition) {}",
            "if (condition) {} else if (condition) {}"
        ],
        "multiple": true
    },
    {
        "question": "Какие символы есть в тернарном операторе 'если-то-иначе'?",
        "answers": [
            ":",
            "+",
            "/",
            "?"
        ],
        "multiple": true
    },
    {
        "question": "Какой командой можно прервать проверку других случаев (case) для оператора switch?",
        "answers": [
            "continue;",
            "pause;",
            "stop;",
            "break;"
        ],
        "multiple": false
    },
    {
        "question": "Выполнится ли вход в такой цикл: let i = 10; while (i < 10) {...}?",
        "answers": [
            "нет",
            "да, но лишь единожды, независимо от условий внутри цикла",
            "да, и количство итераций зависит от условий внутри цикла",
            "будет ошибка"
        ],
        "multiple": false
    },
    {
        "question": "Какие значения выведутся в консоль в цикле let i = 0; while (i <= 3) {console.log(i); i++;}?",
        "answers": [
            "0, 1, 2",
            "0, 1, 2, 3",
            "0, 1, 2, 3, 4",
            "1, 2, 3, 4"
        ],
        "multiple": false
    },
    {
        "question": "После выполнения кода let i = 0; let c = 0; const str = 'Rolling Scopes School'; while (i < str.length) { if (str[i] === 'o') { c++; } i++; } console.log(c);, какое значение будет выведено в консоль?",
        "answers": [
            "0",
            "1",
            "4",
            "5",
            "будет ошибка или зацикливание"
        ],
        "multiple": false
    },
    {
        "question": "Какие значения выведутся в консоль в цикле for (let i = 0; i <= 4; i++) {console.log(++i);}?",
        "answers": [
            "0, 1, 2, 3, 4",
            "0, 1, 2, 3, 4, 5",
            "0, 2, 4",
            "1, 3, 5"
        ],
        "multiple": false
    },
    {
        "question": "Какие ключевые слова используются в JavaScript для того, чтобы объявить переменную?",
        "answers": [
            "let",
            "int",
            "const",
            "float",
            "double"
        ],
        "multiple": true
    },
    {
        "question": "Этот оператор завершает выполнение текущей функции и возвращает её значение",
        "answers": [
            "return",
            "case",
            "break",
            "continue"
        ],
        "multiple": false
    },
    {
        "question": "Где правильно записано начало цикла for?",
        "answers": [
            "for (let i = 0; i <= 5)",
            "for (let i = 0; i <= 5; i++)",
            "for let i = 1 to 5",
            "for (let i <= 5; i++)"
        ],
        "multiple": false
    },
    {
        "question": "Чем отличается const от let?",
        "answers": [
            "const - не является частью JavaScript",
            "переменные, объявленные через const, находятся в глобальной области видимости",
            "объявление const задаёт константу, то есть значение, которое нельзя менять"
        ],
        "multiple": false
    },
    {
        "question": "Какими ключевыми словами можно задать цикл в JavaScript",
        "answers": [
            "for",
            "while",
            "circle",
            "loop",
            "switch"
        ],
        "multiple": true
    },
    {
        "question": "Каков результат выполнения кода 13%5?",
        "answers": [
            "~0.38",
            "2.6",
            "2",
            "3"
        ],
        "multiple": false
    },
    {
        "question": "Определите тип данных переменной rs, если rs задана так: let rs = 'true';",
        "answers": [
            "string",
            "number",
            "boolean",
            "object"
        ],
        "multiple": false
    },
    {
        "question": "Каким будет результат выполнения кода console.log('Hey there!' ?",
        "answers": [
            "Hey there!",
            "SyntaxError: missing ) after argument list",
            "SyntaxError: missing ; after statement",
            "Ничего не выведется"
        ],
        "multiple": false
    },
    {
        "question": "Укажите верные утверждения",
        "answers": [
            "В выражении 34 + 42 операторами являются 34 и 42",
            "В выражении 34 + 42 операндами являются 34 и 42",
            "В выражении 34 + 42 оператором является +",
            "В выражении 34 + 42 операндом является +"
        ],
        "multiple": true
    },
    {
        "question": "Каким будет результат выполнения операции '4' * '9'?",
        "answers": [
            "строка 49",
            "строка 36",
            "число 36",
            "SyntaxError"
        ],
        "multiple": false
    },
    {
        "question": "Как получить последний символ в строке, содержащейся в переменной message?",
        "answers": [
            "message.getLastSymbol()",
            "message[message.lastIndex]",
            "message[message.length]",
            "message[message.length - 1]"
        ],
        "multiple": false
    },
    {
        "question": "Каким будет результат в консоли выполнения кода let a; console.log(a)?",
        "answers": [
            "undefined",
            "null",
            "NaN",
            "Uncaught ReferenceError: a is not defined"
        ],
        "multiple": false
    },
    {
        "question": "Какими из перечисленных способов можно задать функцию сложения двух чисел в JavaScript?",
        "answers": [
            "const sum = {a, b} => ( return a + b )",
            "const sum = (a, b) => { return a + b }",
            "const sum = {a, b} => a + b",
            "const sum = (a, b) => a + b",
            "const sum = a, b => a + b"
        ],
        "multiple": true
    },
    {
        "question": "Какое значение возвращает функция, в теле которой отсутствует инструкция return?",
        "answers": [
            "null",
            "undefined",
            "NaN",
            "происходит ошибка"
        ],
        "multiple": false
    },
    {
        "question": "Каким образом в функцию getGreetingMessage передается второй аргумент со значением 'Hello' по умолчанию?",
        "answers": [
            "const getGreetingMessage = (name, 'Hello') => { //... }",
            "const getGreetingMessage = (name, message)(undefined, 'Hello') => { //... }",
            "const getGreetingMessage = (name, message = 'Hello') => { //... }",
            "const getGreetingMessage = (name) => { const message = 'Hello'; //... }"
        ],
        "multiple": false
    },
    {
        "question": "Какие из перечисленных значений являются falsy?",
        "answers": [
            "0",
            "''",
            "{}",
            "undefined",
            "NaN",
            "null",
            "[]"
        ],
        "multiple": true
    },
    {
        "question": "Каким образом можно проверить, кратно ли число a числу b?",
        "answers": [
            "a / b === 0",
            "a % b > 0",
            "b % a === 0",
            "a % b === 0"
        ],
        "multiple": false
    },
    {
        "question": "Что будет выведено в консоль после выполнения кода let a = 5; console.log(++a); console.log(a++);?",
        "answers": [
            "5 и 5",
            "5 и 6",
            "6 и 6",
            "6 и 7"
        ],
        "multiple": false
    }
]

//такое прилетает после сабмита
// const responseFormatEx = {
//     "data": {
//         "id": 498311,
//         "createdDate": "2022-01-12T14:26:45.619Z",
//         "updatedDate": "2022-01-12T14:26:45.619Z",
//         "studentId": 64328,
//         "courseTaskId": 1186,
//         "details": "Accuracy: 0%. Attempts number was over, so score was divided by 2",
//         "status": "completed",
//         "score": 0,
//         "metadata": [],
//         "courseTask": {
//             "type": "selfeducation"
//         }
//     }
// };

//#region Тест на двух сущностях разного типа
// let q1 = [
//     {
//         "question": "Как вывести сообщение Hello world! в консоль?",
//         "answers": [
//             "alert('Hello world!');",
//             "prompt('Hello world!');",
//             "print('Hello world!');",
//             "console.log('Hello world!');"
//         ],
//         "multiple": false
//     },
//     {
//         "question": "Какими способами можно задать комментарии в JavaScript?",
//         "answers": [
//             "<!-- комментарий -->",
//             "# комментарий",
//             "// комментарий",
//             "/* комментарий */"
//         ],
//         "multiple": true
//     }];
//#endregion

const htmlBasics = 'https://app.rs.school/api/course/58/student/me/task/1267/verification';
const jsBasics = 'https://app.rs.school/api/course/56/student/me/task/1186/verification';
const cssBasics = 'https://app.rs.school/api/course/58/student/me/task/1270/verification';


const post = async (q, a) => {
    const res = await fetch("https://app.rs.school/api/course/56/student/me/task/1186/verification",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify([{ "index": q, "value": a }])
        });

    return await res.json();
    // .then(function (res) { 
    //     res.json()
    //     .then(data => {
    //         const templ = 
    //         data.details()
    //     }); 
    // })
    // .catch(function (res) { console.log(res) })
};

const isPositive = (data) => {
    const zeroAcc = 'Accuracy: 0%';
    return !data.data.details.startsWith(zeroAcc)
};

const result = [];

q1.forEach((q, i) => {
    //пока не трогаем вопросы с галочками
    if(q.multiple){
        return;
    }

    let answers = q.answers;

    answers.forEach((a, j) => {
    //задержка между запросами ~5сек чтоб случайно ниче там не положить у них
    //ну и палиться поменьше:)
        setTimeout(async () => {
            post(i, j).then(data => {
                if(isPositive(data)){
                    result.push({question: q, answer: a});
                }
            });
        }, i * 5000); 
    });
});

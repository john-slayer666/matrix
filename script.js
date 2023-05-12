const t = ['Hi, Dead.        \n', 
'Сегодня пересматривал Матрицу.\n', 
'Решил написать об этом...\n',
'Строки ебучие не переносятся, как я хочу,\n' ,
'это просто дурдом.\n',
'Уже перенеслись, заменил \n', 
'&lt div &gt на &lt pre &gt !!!!!'
]
function typeText(){
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.out');

    function typeLine(){
        // string
        let interval = setTimeout(function () {
            out += t[line][count];
            htmlOut.innerHTML = out + '|';
            count++;

            //проверки
            
            if (count >= t[line].length) {
                count = 0;
                line++;

                if (line == t.length){
                    clearTimeout(interval);
                    htmlOut.innerHTML = out;
                    return true;
                }
            }
            typeLine();
        },getRandomInt(getRandomInt(350*3)));
        //рандомные интервалы между выводом на экран 
    }
    typeLine();

}
function getRandomInt(max){ 
    return Math.floor(Math.random() * Math.floor(max));
}



typeText();


// **************************************************************


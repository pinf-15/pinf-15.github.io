// Список языков, с которых переводим.
// Вставляем value в кавычки
// Цены указываем после знака уравнения
var lang_from = new Array
lang_from["None"]=0
lang_from["German"]=100
lang_from["Norwegian"]=150
lang_from["Polish"]=120

// На какие языки переводим
var lang_to = new Array
lang_to["None"]=0
lang_from["German"]=100
lang_from["Norwegian"]=150
lang_from["Polish"]=120


function getLangFromPrice()
{
    var langFromPrice=0;
    //Ссылаемся на форму
    var theForm = document.forms["langform"];
    //Ссылаемся на язык, с которого переводим:
    var selectedlangFrom = theForm.elements["selectedlangFrom"];

    langFromPrice = lang_from[selectedlangFrom.value];

    //Возвращаем цену
    return langFromPrice;
}

function getLangToPrice()
{
    var langToPrice=0;
    //Ссылаемся на форму
    var theForm = document.forms["langform"];
    //Ссылаемся на язык, на который переводим:
     var selectedFilling = theForm.elements["selectedLangTo"];
    //Ставим значение как цену
    //Наприемер, немецкий - 150
    langToPrice = lang_to[selectedLangTo.value];

    //Возвращаем цену
    return langToPrice;
}


function calculateTotal()
{
    //Считаем сумму
    var sumPrice = getLangFromPrice() + getLangToPrice();

    //Отображаем результат
    var div_result = document.getElementById('totalPrice');
    div_result.style.display='block';
    div_result.innerHTML = "Total Price For the Cake $"+sumPrice;

}

function hideTotal()
{
    var div_result = document.getElementById('totalPrice');
    div_result.style.display='none';
}

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
    //отсылаемся к форме id="myForms"
    var theForm = document.forms["myForms"];
    //Отсылаемся к выбиранному языку name=selectedCake":
    var selected_lang_from = theForm.elements["lang_from"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    langToPrice = lang_to[selected_lang_to.value];
    //Возвращаем langFromPrice
    return langFromPrice;
}

function getLangToPrice()
{
    var langToPrice=0;
    //отсылаемся к форме id="myForms"
    var theForm = document.forms["myForms"];
    //Отсылаемся к выбиранному языку id="filling"
    var selected_lang_to = theForm.elements["filling"];

    //set cakeFilling Price equal to value user chose
    //For example lang_to["Lemon".value] would be equal to 5
    langToPrice = lang_to[selected_lang_to.value];

    //finally we return langToPrice
    return langToPrice;
}

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var result_price = getLangFromPrice() + getLangToPrice();

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price $"+result_price;

}

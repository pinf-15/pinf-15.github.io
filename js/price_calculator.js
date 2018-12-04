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
    //Get a reference to the form id="langform"
    var theForm = document.forms["langform"];
    //Get a reference to the cake the user Chooses name=selectedlangFrom":
    var selectedlangFrom = theForm.elements["selectedlangFrom"];

    langFromPrice = lang_from[selectedlangFrom.value];

    //We return the langFromPrice
    return langFromPrice;
}

//This function finds the filling price based on the
//drop down selection
function getLangToPrice()
{
    var langToPrice=0;
    //Get a reference to the form id="langform"
    var theForm = document.forms["langform"];
    //Get a reference to the select id=selectedLangTo
     var selectedFilling = theForm.elements["selectedLangTo"];

    //set cakeFilling Price equal to value user chose
    //For example lang_to["Lemon".value] would be equal to 5
    langToPrice = lang_to[selectedLangTo.value];

    //finally we return langToPrice
    return langToPrice;
}

//candlesPrice() finds the candles price based on a check box selection

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var sumPrice = getLangFromPrice() + getLangToPrice();

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake $"+sumPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}

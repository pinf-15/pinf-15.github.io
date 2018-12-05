//Set up an associative array
//The keys represent the size of the cake
//The values represent the cost of the cake i.e A 10" cake cost's $35
var lang_from_prices = new Array();
lang_from_prices["None"]=0
lang_from_prices["Round6"]=20;
lang_from_prices["Round8"]=25;
lang_from_prices["Round10"]=35;
lang_from_prices["Round12"]=75;

//Set up an associative array
//The keys represent the filling type
//The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
//We use this this array when the user selects a filling from the form
var lang_to_prices= new Array();
lang_to_prices["None"]=0;
lang_to_prices["Lemon"]=5;
lang_to_prices["Custard"]=5;
lang_to_prices["Fudge"]=7;
lang_to_prices["Mocha"]=8;
lang_to_prices["Raspberry"]=10;
lang_to_prices["Pineapple"]=5;
lang_to_prices["Dobash"]=9;
lang_to_prices["Mint"]=5;
lang_to_prices["Cherry"]=5;
lang_to_prices["Apricot"]=8;
lang_to_prices["Buttercream"]=7;
lang_to_prices["Chocolate Mousse"]=12;



// getLangFromPrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getLangFromPrice()
{
   var langFromPrice=0;
   //Get a reference to the form id="langform"
   var theForm = document.forms["langform"];
   //Get a reference to the cake the user Chooses name="selected_lang_From":
   var selectedLangFrom = theForm.elements["selected_lang_From"];
   //Here since there are 4 radio buttons selectedLangFrom.length = 4
   //We loop through each radio buttons
   langFromPrice = lang_from_prices[selectedLangFrom.value];
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
   //Get a reference to the select id="selected_lang_To"
    var selectedLangTo = theForm.elements["selected_lang_To"];

   //set cakeFilling Price equal to value user chose
   //For example lang_to_prices["Lemon".value] would be equal to 5
   langToPrice = lang_to_prices[selectedLangTo.value];

   //finally we return langToPrice
   return langToPrice;
}



function calculateTotal()
{
   //Here we get the total price by calling our function
   //Each function returns a number so by calling them we add the values they return together
   var sumPrice = getLangFromPrice() + getLangToPrice();

   //display the result
   var result_price = document.getElementById('totalPrice');
   result_price.style.display='block';
   result_price.innerHTML = "Total Price $"+sumPrice;

}

function hideTotal()
{
   var result_price = document.getElementById('totalPrice');
   result_price.style.display='none';
}

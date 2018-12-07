// Цены
var lang_from_prices = new Array();
lang_from_prices["None"]=0
lang_from_prices["German"]=20;
lang_from_prices["Norwegian"]=25;
lang_from_prices["Polish"]=35;
lang_from_prices["Russian"]=50
lang_from_prices["English"]=55


var lang_to_prices = new Array();
lang_to_prices["None"]=0;
lang_to_prices["German"]=20;
lang_to_prices["Norwegian"]=25;
lang_to_prices["Polish"]=25;
lang_to_prices["Russian"]=50
lang_to_prices["English"]=55

var service_type_prices = new Array();
service_type_prices["None"]=0
service_type_prices["Fictional"]=1.5
service_type_prices["Economical"]=1.1
service_type_prices["Technical"]=1.2
service_type_prices["Medicine"]=1.4
service_type_prices["Publicistic"]=1

var words = new Array();
document.getElementById("words").value || 0

var theForm = document.forms["langform"];


function getLangFromPrice()
{
   var langFromPrice=0;
   var selectedLangFrom = theForm.elements["selected_lang_From"];
   langFromPrice = lang_from_prices[selectedLangFrom.value];
   return langFromPrice;
}

function getLangToPrice()
{
   var langToPrice=0;
   var selectedLangTo = theForm.elements["selected_lang_To"];
   langToPrice = lang_to_prices[selectedLangTo.value];
   return langToPrice;
}

function getServiceTypePrice(){
    var serviceTypePrice=0;
    var selectedService = theForm.elements["service_type"];
    serviceTypePrice = service_type_prices[selectedService.value];
    return serviceTypePrice;
}


// Общий подсчет
function calculateTotal()
{
   var sumPrice = (getLangFromPrice() + getLangToPrice()) * getServiceTypePrice();
   var result_price = document.getElementById('totalPrice');
   result_price.style.display='block';
   result_price.innerHTML = "Total Price $"+sumPrice;
}

function hideTotal()
{
   var result_price = document.getElementById('totalPrice');
   result_price.style.display='none';
}

const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertValues(){
 const inputCurrencyValue = document.querySelector(".inputcurrency").value
 const valuetoconvert = document.querySelector(".value-to-convert") //valor em reais
 const currencyValue = document.querySelector(".currency-value") //outras moedas etc...



const dolarToday = 5.82
const euroToday =6.4
const libraToday =7.4

if (currencyselect.value == "dolar"){
    currencyValue.innerHTML= new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
        
        }).format( inputCurrencyValue / dolarToday) 

}
if(currencyselect.value =="euro"){
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR" 

    }).format(inputCurrencyValue/euroToday)

}
if(currencyselect.value =="Libra"){
    currencyValue.innerHTML = new Intl.NumberFormat("en-UK",{
    style:"currency",
    currency:"GBP" 

    }).format(inputCurrencyValue/libraToday)

}


valuetoconvert.innerHTML= new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
}).format(inputCurrencyValue)

   
}
function changecurrency() {
 const currencyname = document.getElementById("currency-name")
 const currencyImg = document.querySelector(".currency-logo1")

 if(currencyselect.value == "dolar") {
    currencyname.innerHTML = "dolar americano"
    currencyImg.src ="./assets/estados-unidos (1) 1.png"
 }

 if(currencyselect.value == "euro") {
    currencyname.innerHTML = "€ Euro"
    currencyImg.src = "./assets/euro-3.png"
 }
 if(currencyselect.value == "Libra") {
    currencyname.innerHTML = "£ Libra"
    currencyImg.src = "./assets/libra-1.png"
 }


 convertValues()


}


currencyselect.addEventListener("change",changecurrency)
convertButton.addEventListener("click", convertValues )


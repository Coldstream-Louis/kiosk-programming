/**
 * Created by Ambrose on 2017/12/9.
 */
function Burger(name, kCal,isGlu,isLac,imgSrc) {
    this.name = name;
    this.kCal = kCal;
    this.isGlu = isGlu;
    this.isLac = isLac;
    this.imgScr = imgSrc
}
var cheeseBurger = new Burger("Cheese Burger", 303.1, true, true, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/600px-Cheeseburger.jpg");
var chickenBurger = new Burger("Chicken Burger", 430, false, true, "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lounge_Burger_Wiki.jpg");
var riceBurger = new Burger("Rice Burger", 300, false, true, "https://d2yk4sockbjvo.cloudfront.net/wp-content/uploads/2016/06/Umami-Burger-Loco-Moco-1.jpg");
var beefBurger = new Burger("Beef Burger", 530, false, true, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Burger_King_-_Angus_XT_Burger.tiff/lossless-page1-220px-Burger_King_-_Angus_XT_Burger.tiff.png");
var porkBurger = new Burger("Pork Burger", 400, false, true, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/MOS_Kaisen01.JPG/220px-MOS_Kaisen01.JPG");
var arr = [cheeseBurger, chickenBurger, riceBurger, beefBurger, porkBurger];

var burgerHeadRow = document.getElementById("burger_name");
var burgerImageRow = document.getElementById("burger_image");
var burgerTextRow = document.getElementById("burger_text");

arr.forEach(function(element){
    var burgerNameTH = document.createElement('th');
    var burgerNameInput = document.createElement('input');
    burgerNameInput.setAttribute("type","checkbox");
    burgerNameInput.setAttribute("name","Burger");
    burgerNameInput.setAttribute("value",element.name);
    burgerNameTH.appendChild(burgerNameInput);
    burgerNameTH.innerHTML += element.name;
    burgerHeadRow.appendChild(burgerNameTH);

    var burgerImageTD = document.createElement('td');
    var image = document.createElement('img');
    image.setAttribute("src",element.imgScr);
    image.setAttribute("width", 100);
    burgerImageTD.appendChild(image);
    burgerImageRow.appendChild(burgerImageTD);

    var burgerTextTD = document.createElement('td');
    var burgerTextUL = document.createElement('ul');
    var burgerCalLI = document.createElement('li');
    var burgerGreLI = document.createElement('li');
    var ingredient = "Include: ";
    if(element.isGlu){
        ingredient += element.isGlu ? "gluten".bold():"";
        if(element.isLac){
            ingredient += ",";
            ingredient += element.isLac ? " lactose".bold():"";
        }
    }else if(element.isLac){
        ingredient += element.isLac ? " lactose".bold():"";
    }
    burgerGreLI.innerHTML = ingredient;
    burgerCalLI.textContent = element.kCal + "kCal";
    burgerTextUL.appendChild(burgerGreLI);
    burgerTextUL.appendChild(burgerCalLI);
    burgerTextTD.appendChild(burgerTextUL);
    burgerTextRow.appendChild(burgerTextTD);
});

function printValue(){
    var drinkTypeInput = document.getElementById("Brand");
    var drinkTypeValue = drinkTypeInput.value;
    var temperatureTypeInput = document.getElementsByName("Temperature");
    var temperatureTypeValue = null;
    if(temperatureTypeInput!==null){
        temperatureTypeInput.forEach(function(element){
            if(element.checked){
                temperatureTypeValue = element.value;
            }
        });
    }

    var burgerTypeInput = document.getElementsByName("Burger");
    // var checkedBurgerNames = [];
    // var burgerTypeValue = null;
    if(burgerTypeInput!==null){
        burgerTypeInput.forEach(function(element){
            if(element.checked){
                // burgerTypeValue = element.value;
                console.log(element.value);
                // checkedBurgerNames.append(element.value);
            }

        });
    }

    console.log(drinkTypeValue,temperatureTypeValue);
}

// var submitButton = document.getElementById("submit_button");
// submitButton.onclick = printValue;

var submit = new Vue({
    el: '#submit_button',
    methods:{
        submit:function(){
            printValue();
        }
    }
});
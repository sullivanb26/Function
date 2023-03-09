//Custom Log in Document
var number = 1;
function log(message) {
    console.log(message);
    var out = document.getElementById("out");
    out.innerHTML = out.innerHTML + number + ". " + message + "<br>";
    number++;
}

//Thanks
function sayThanks(name) {
    log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();
sayThanks("Cole");

// Area of a Rectangle
const width1 = 10;
const height1 = 6;
var area = calcArea(width1, height1);

const width2 = 4;
const height2 = 9;
var area2 = calcArea(width2, height2);

const width3 = 10;
const height3 = 10;
var area3 = calcArea(width3, height3);

function calcArea(width, height) {
    return width * height;
}
log(area);
log(area2);
log(area3);

// Default Parameters
function greeting(name = "Stranger") {
    log(`Hello, ${name}!`);
}
greeting('Nick');
greeting()

//Shopping list
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    log(`Remember to buy ${item1}`);
    log(`Remember to buy ${item2}`);
    log(`Remember to buy ${item3}`);
}
makeShoppingList();
makeShoppingList('cheese', 'more cheese', 'MORE CHEESE!!!');

//Calculate Area 2
function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'Only positive integers are allowed!';
    }
    return width * height;
}
area = rectangleArea(width1, height1);
area2 = rectangleArea(width2, height2);
area3 = rectangleArea(width3, height3);
log(area);
log(area2);
log(area3);

// Monitor count thing
function monitorCount(rows, columns) {
    if (rows < 0 || columns < 0) {
        return 'Only positive integers are allowed!';
    }
    return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
log(numOfMonitors);
function costOfMonitors(rows, columns) {
    if (rows < 0 || columns < 0) {
        return 'Only positive integers are allowed!';
    }
    return monitorCount(rows, columns)*200;
}
const totalCost = costOfMonitors(5, 4);
log(totalCost);

// Part 2
document.getElementById("out").innerHTML = document.getElementById("out").innerHTML + "<hr>PART 2<br>";
number = 1;

// Functions Used as Variable Values
function toCelcius(fah) {
    return (fah-32)*(5/9);
}
var x = toCelcius(77);
var text = "The temperature is " + x + " Celcius";
log(text);
var text = "The temperature is " + toCelcius(77) + " Celcius";

//Local Variables
//Code here cannot use carName
function myFunction() {
    var carName = "Volvo";
    //code here can use carName
}
//Code here cannot use carName

//Reverse Number
function reverse_a_number(n) {
    n = n + ""
    return n.split("").reverse().join("");
}
log(reverse_a_number(32243));

//Check palindrome
function check_Palindrome(str_entry) {
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    if (cstr==="") {
        log("Nothing Found!");
        return false;
    }
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    }
}
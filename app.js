// ALERTS

alert("Hello Welcome to Our Page\nThanks You!!!");

============================
VARIABLES FOR STRING 
var username;
var my_name = "Muhammad Hasan";
var message = "hello world";
alert(message)

var age = "16 Years";
var prof = "Student";
alert(my_name);
alert(age);
alert(prof);

var email = "My email is muh.hasan914@gmail.com";
alert(email);

var pizza = "PIZZA"
alert(pizza ,"\n",pizza.slice(0,4) ,"\n",pizza.slice(0,3) ,"\n",pizza.slice(0,2),"\n",pizza.slice(0,1))

var learn = "a smarter way to learn javascript";
alert(learn)

document.write("HELLO WORLD FROM HTML")

var design =  "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(design)

// =================================================
// VARIABES FOR NUMBERS

var age1 = 15;
alert("My Age is " + age1)

var birth = "9 OCTOBER 2000";
document.write(birth)

var info  = "<br><b>JohnDoe</b> ordered 5 T-shirt(s) on XYZ Clothing store"
document.write(info)

// ======================================================
// NAMING OF VARIABLES

var h1,h2,h3;

var h 1,alert,1st_name,rose,h e;
var usermessage,alertmassage,heLLo,h_1,$he;

document.write("<b>RULES FOR NAMING IN JS</b>")
document.write("<br><br> A variable name can contain only letters, numbers, dollar signs, and underscores. <br><b>For example $my_1stVariable</b>")
document.write("<br><br>Variables must begin with a letter, underscore or dollar sign. For example <b> $name, _name or name</b>")
document.write("<br><br> Variable names are case sensitive")
document.write("<br><br>Variable names should not be JS <b>Keywords</b>")

// ==================================================================
// MATH EXPRESSION

var a = 2
 b = 3
 c = a + b;
document.write(c)

var a = 2
  b = 3
  c = a * b;
document.write(c)

var a = 2
  b = 3
  c = a - b;
document.write(c)

var a = 2
  b = 3
  c = a / b;
document.write(c)

var u;
document.write("value of variable after declartion: "+ u)
var u = 4;
document.write("<br> Initial value: "+ u)
var u = u + 1;
document.write("<br> Incerment value: "+ u)
var u = u + 7;
document.write("<br> Addition of 7 to the value: "+ u)
var u = u - 1;
document.write("<br> Decrement value: "+ u)
var u = u % 3;
document.write("<br> Remainder when divided by 3: "+ u)

var ticket = 600;
var total  = ticket * 5;
document.write("Total cost for 5 tickets is: " + total)

document.write("TABLE OF 5")
document.write("<br> 5 * 1 = "+ 5*1)
document.write("<br> 5 * 2 = "+ 5*2)
document.write("<br> 5 * 3 = "+ 5*3)
document.write("<br> 5 * 4 = "+ 5*4)
document.write("<br> 5 * 5 = "+ 5*5)
document.write("<br> 5 * 6 = "+ 5*6)
document.write("<br> 5 * 7 = "+ 5*7)
document.write("<br> 5 * 8 = "+ 5*8)
document.write("<br> 5 * 9 = "+ 5*9)
document.write("<br> 5 * 10 = "+ 5*10)

var cel = 30;
var far = 86;
var f = (cel * 9/5) + 32;
var c = (far - 32) * 5/9
document.write("30.C is = "+ f)
document.write("<br> 86.F is = "+  c)

 document.write("Price of 1 item is 650")
 document.write("<br> Quantity : 1")
 document.write("<br> Price of 2 item is 950")
 document.write("<br> Quantity: 1")
 document.write("<br> Shipping charges : 200")
 var tot = 650 + 950 + 200;
document.write("<br><br> total cost : "+tot)

var student_1 = 450 
    student_2 = 400
    per_1 = (student_1/500) * 100
    per_2 = (student_2/500) * 100;
document.write("<b>MARKSHEET</b>")
document.write("<br><br><br> STUDENT-1 <br> TOTAL MARKS : 500 <br> MARK-OBTAINED : "+student_1+ "<br> PERCENTAGE : "+per_1)
document.write("<br><br><br> STUDENT-2 <br> TOTAL MARKS : 500 <br> MARK-OBTAINED : "+student_2+ "<br> PERCENTAGE : "+per_2)

var curr = (10 * 104.80)+(25 * 28);
document.write("TOTAL PAKISTANI RUPEES : "+curr)

var not = (10 + 5 *  10 )/2
document.write("THE RESULT IS : "+not)

var current = 2020
    birth = 1990
    age  = current - birth;
document.write("YOUR AGE : " +age)

var radius = 20
var cir = (2 * 3.142) * radius
var area = 3.142 * (radius ^ 2)
document.write("radius : "+ radius)
document.write("<br>circumference : "+cir)
document.write("<br>area : "+area)

var snacks = "CHIPS"
var cur = 15 
var max = 70
var da = 2
var no = (max - cur) * da
document.write("SNACKS : " +snacks)
document.write("<br>CURRENT AGE : "+cur)
document.write("<br>MAX AGE : "+max)
document.write("<br>DAY EAT : "+da)
document.write("<br>HOW MANY NEED FOR WHOLE LIFE : "+no)

// ==========================================================================
// #6

var y = 2,x = 5;
var res = --y - --x + ++x + x--
var w = --y + ++x
var J = --y - --x + ++x
document.write("THE VALUE OF X : "+x+"<br><br>THE OF Y : "+y)
document.write("<br><br> NOW THE VALUE OF Y : "+ --y)
document.write("<br><br> NOW VALUE OF X , Y : " + w)
document.write("<br><br> NOW THE VALUE OF X , Y : "+J)
document.write("<br><br> FINAL VALUE OF X , Y : "+ res)

var y = prompt("WHAT 'S YOUR NAME")
alert("Thank you for visiting "+y)

var z  = prompt("TELL ME A NUMBER")
if (z){
    for (i=1;i<=10;i++){
        document.write("<br>"+ z + " * " + i + " = " + z*i)
    }
}
else if (z === ""){
    for (i=1;i<=10;i++){
        document.write("<br>"+ 5 + " * " + i + " = " + 5*i)
    }
}

var sub_1 = prompt("ENTER SUBJECT "),sub_2 = prompt("ENTER SUBJECT"),sub_3 = prompt("ENTER SUBJECT ")
var one = prompt("ENTER MARK OF "+sub_1),two = prompt("ENTER MARK OF "+sub_2),three = prompt("ENTER MARK OF "+sub_3)

document.write("<tr><th>SUBJECT</th><th>    TOTAL MARKS</th><th>    MARKS OBTIANED </th><th>    PERCENTAGE</th></tr>")
document.write("<br><tr><td>"+sub_1+"</td><td>100</td><td>"+one+"</td></tr>")

// ============================================
// assi-7

var q1 = prompt("WHERE DO YOU LIVE","KARACHI,LAHORE OR ETC")
if (q1 === "Karachi" || q1 === "karachi"){
    alert("WELCOME TO CITY OF LIGHTS")
}

var q2 = prompt("ENTER YOUR GENDER","MALE OR FEMALE")
if (q2 === "male" || q2 === "Male"){
    alert("GOOD MORNING SIR")
}
else {
    alert("GOOD MORNING MA'MA")
}

var q3 = prompt("ENTER TRAFFIC SIGNAL COLOR","RED,GREEN OR YELLOW")
if (q3 === "red" || q3 === "Red"){
    alert("MUST STOP")
}
else if (q3 === "yellow" || q3 === "Yellow"){
    alert("READY TO MOVE")
}
else {
    alert("MOVE NOW")
}

var q4 = prompt("REMAINING FUEL IN TANK","IN LITERS")
var q12 = parseFloat(q4)
if (q12 <= 0.25){
    alert("PLEASE REFUEL YOUR TANK")
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}

var q01 = prompt("ENTER MARKS OF SUBJECT"),q02 = prompt("ENTER MARKS OF SUBJECT"),q03 = prompt("ENTER MARKS OF SUBJECT");
var q001 = parseInt(q01),q002 = parseInt(q02),q003 = parseInt(q03);
var percen = ((q001 + q002 + q003)/300)*100;
document.write("MARKSHEET <br><br><br>"+"<br>PRECENTAGE : "+percen+"<br>SUBJECT-1 : "+q01+"<br> SUBJECT-2 : "+q02+"<br>SUBJECT-3 : "+q03)
if (percen >= 80){
    document.write("<br>GRADE : A+ <br> REMARKS : EXCELLENT!!!")
}
else if (percen >= 70){
    document.write("<br>GRADE : A <br> REMARKS : GOOD!!!")
}
else if (percen >= 60){
    document.write("<br>GRADE : B <br> REMARKS : YOU NEED TO IMPROVE")
}
else{
    document.write("<br>GRADE : F <br> REMARKS : SORRY")
}

var q06 = 2
var q6 = parseInt(prompt("ENTER A NUMBER","1-10"));
if (q06 === q6){
    alert("CORRECT ANSWER")
}
else if (q6 + 1 === q06){
    alert("Close enough to the correct answer")
}
else{
    alert("TRY AGAIN")
}

var w7 = parseFloat(prompt("ENTER NUMBER"))
var prat = w7 % 3;
if (prat === 0){
    alert(w7+" IS DIVISIBLE BY 3")
}
else {
    alert(w7+" IS DIVISIBLE NOT BY 3")
}

var w1 = parseFloat(prompt("ENTER NNUBER"))
var w01 = w1 % 2
if (w01 === 0){
    alert(w1+" IS AN EVEN NUMBER")
}
else{
    alert(w1+" IS AN ODD NUMBER")
}

var temp = parseFloat(prompt("ENTER TEMPARETURE"))
if (temp > 40){
    alert("IT'S TOO HOT OUTSIDE")
}
else if (temp > 30){
    alert("THE WEATHER IS NORMAL TODAY")
}
else if (temp > 20){
    alert("TODAY'S WEATHER IS COOL")
}
else{
    alert("OMG! TODAY'S WEATHER IS COOL")
}

var num1 = parseFloat(prompt("ENTER NUMBER")),op = prompt("ENTER OPERATER"),num2 = parseFloat(prompt("ENTER NUMBER"))
if (op === "+"){
    alert(num1 + num2)
}
else if (op === "-"){
    alert(num1 - num2)
}
else if (op === "*"){
    alert(num1 * num2)
}
else if (op === "/"){
    alert(num1 / num2)
}
else if (op === "%"){
    alert(num1 % num2)
}
else{
    alert("YOU HAVE ENTER WRONG OPERATOR ")
}

// ==========================================
// 12-13 assi

var chara = prompt("ENTER NUMBER OR STRING")
var char1 = parseInt(chara)
if (chara === chara.toUpperCase() && typeof chara === 'string'){
    alert(chara+" IS UPPERCASE LETTER")
}
else if (chara === chara.toLowerCase() && typeof chara === 'string'){
    alert(chara+" IS LOWERCASE LETTER")
}
else if (typeof char1 === 'number'){
    alert(char1+" IS A NUMBER")
}

var int_1 = parseFloat(prompt("ENTER NUMBER")) 
var int_2 = parseFloat(prompt("ENTER NUMBER"))
if (int_2 < int_1){
    alert(int_1 + " IS GRATER THAN "+int_2)
}
else if (int_1 === int_2){
    alert(int_1 + " IS EQUAL TO "+int_2)
}
else {
    alert(int_2 + " IS GRATER THAN "+int_1)
}

var we = parseFloat(prompt("ENTER NUMBER"))
if (we < 0){
    alert(we +" IS A NEGATIVE NUMBER")
}
else if (we > 0 ){
    alert(we +" IS A POSITIVE NUMBER")
}
else{
    alert(we + " IS EQUAL TO ZERO")
}
var vowe = prompt("ENTER ANY LETTER")
var vow = ['a','i','o','u','e','y']
if (vowe === 'a'||'i'||'o'||'u'||'e'||'y'){
    alert(" IT'S A VOWEL LETTER ")
}
else{
    alert("IT'S NOT A VOWEL LETTER")
}

var password_1 = prompt("ENTER PASSWORD ")
var password = "hellomynameishasan786"
if (password === password_1){
    alert("“Correct! The password you entered matches the original password")
}
else if (password_1 != password){
    alert("Incorrect Password")
}
else{
    alert("PLEASE ENTER PASSWORD!!!!!")
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting)
}
else {
    greeting = "Good evening";
    alert(greeting)
}

var greeting_1;
var time = parseFloat(prompt("ENTER TIME"))
if (time >= 0000 &&  time < 1200){
    greeting_1 = "GOOD MORNING"
    alert(greeting_1)
}
else if (time >= 1200 &&  time < 1700){
    greeting_1 = "GOOD AFTERNOON"
    alert(greeting_1)
}
else if (time >= 1700 &&  time < 2100){
    greeting_1 = "GOOD EVENING"
    alert(greeting_1)
}
else if (time >= 2100 &&  time < 2359){
    greeting_1 = "GOOD NIGHT"
    alert(greeting_1)
}

// ====================================
// arrays

var student_names ;
var student_names_1;
var words = ['hello','hi','how are you']
var number_1 = [1,2,3,4,5,6]
var bool = [true,false]
var mixed = [1,2,'hi','how',true]
var education = ['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
document.write("QUALIFICATION");
for (var i = 1; i <= education.length-1; i++) {
    document.write("<br><br>"+i+')'+education[i])
    
}

var student_names = ['Hasan','Ahmed','Ahasan']
var student_percentage = [450,300,390];
for (var i = 0; i <= student_percentage.length-1; i++){
    var a = (student_percentage[i]/500)*100;
    document.write("<br> Percentage of "+student_names[i]+" is "+a+"%")    
}

var color_names = ['yellow','red','orange']
var ask_the_user = prompt("what color you like",'color')
color_names.unshift(ask_the_user)
alert(color_names)
var ask_the_user_1 = prompt("what color you like",'color')
color_names.push(ask_the_user_1)
alert(color_names)
var ask_the_user_2 = prompt("what color you like",'color')
var ask_the_user_3 = prompt("what color you like",'color')
color_names.unshift(ask_the_user_2,ask_the_user_3)
alert(color_names)
delete color_names[2]
alert(color_names)
var ask_the_user_4 = prompt("what color you like",'index')
var ask_the_user_5 = prompt("what color you like",'color')
color_names[ask_the_user_4] = ask_the_user_5
alert(color_names)
var ask_the_user_6 = prompt("what color you like",'index')
var ask_the_user_7 = prompt("how many color delete")
color_names.splice(ask_the_user_6,ask_the_user_7)
alert(color_names)

var student_score = [350,240,500,670,233,650,789]
student_score.sort()
alert(student_score)

var cities = ['karachi','lahore','islamabad','multan']
var selected_cities = cities.slice(1,3)
alert(selected_cities)

var arr_1 = ['My','name','is','Muhammad','Hasan'];
var vx = arr_1.join(seporator = " ")
document.write(vx)

var one_by_one = ['mouse','keyborad','printer','moniter']

for (var i = 0 ; i <= one_by_one.length-1; i++){
    document.write("<br>"+one_by_one[i])
}
document.write("<br><br><br>")
var new_4 = one_by_one.reverse()
for (var i = 0 ; i <= one_by_one.length-1; i++){
    document.write("<br>"+new_4[i])
}

var mobile = ['iphone','samsung','sony','oneplus']
for (var i = 0 ; i <= mobile.length-1; i++){
    document.write("<br>"+mobile[i])
}

// =========================================================
array and loop

var mutlidim = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
console.table(mutlidim)

for (var i = 1; i <= 10 ; i++){
    document.write("<br>"+i)
}

var table_number = parseFloat(prompt("ENTER NUMBER",'NUMBER'))
var table_count = parseFloat(prompt("ENTER LENGHT",'length'))
for (var i = 1; i <= table_count; i++){
    document.write("<br>"+table_number+" * "+i+" = "+table_number*i)
}

var arr_4 = ['apple','banana','orange']
for (var i =0 ; i <= arr_4.length-1 ; i++){
    document.write("<br>"+ arr_4[i])
}


var number_5 = [1,2,3,4,5,6,7,8,9,10]
for (var i = 0 ; i <= number_5.length-1 ;i++){
    document.write(number_5[i]+" ")
}
document.write("<br>")
for (var a = number_5.length-1 ; a >= 0 ;a--){
    document.write(number_5[a]+" ")
}
document.write("<br>")
for (var i = 0 ; i <= number_5.length-1 ;i++){
    if (number_5[i] % 2 === 0){
        document.write(number_5[i]+" ")
    }
}
document.write("<br>")
for (var i = 0 ; i <= number_5.length-1 ;i++){
    if (number_5[i] % 2 != 0){
        document.write(number_5[i]+" ")
    }
}
document.write("<br>")
for (var i = 0 ; i <= number_5.length-1 ;i++){
    if (number_5[i] % 2 === 0){
        document.write(number_5[i]+"k ")
    }
}

var bakery = ['cake','biscuits','cookies','applepies','pastery']
var pro = prompt("ENTER IS WHAT YOU WANT ")
for (var i = 0 ; i <= bakery.length-1 ; i++){
    if (pro === bakery[i]){
        alert(pro+" IS AVAILABLE AT INDEX "+bakery.indexOf(pro))
        break
    }
    else{
        alert(pro+"IS NOT AVAILALE RIGHT NOW")
        break
    }
}

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
alert(largest+" IS THE LARGEST NUMBER")

var largest_1= 100;
for (i=0; i<=largest;i++){
    if (array[i] < largest_1) {
        var largest_1=array[i];
    }
}
alert(largest_1+" IS THE SMALLEST NUMBER")

for (var i = 5 ; i<=100 ; i+=5){
    document.write(i+"<br>")
}
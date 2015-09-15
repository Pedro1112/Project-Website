
function submit()
{
	alert("Submitting");
}
function resetcontactus()
{
	
	document.getElementById("contactname").innerHTML=(" ");
	document.getElementById("contactcomment").innerHTML=(" ");
	document.getElementById("contactemail").innerHTML=(" ");
	document.getElementById("contacttel").innerHTML=(" ");
}

function resetpayment()
{
	
	document.getElementById("payname").innerHTML=(" ");
	document.getElementById("payunit").innerHTML=(" ");
	document.getElementById("paycardname").innerHTML=(" ");
	document.getElementById("paycardnumber").innerHTML=(" ");
	document.getElementById("payexpdate").innerHTML=(" ");
	document.getElementById("payfinan").innerHTML=(" ");
	document.getElementById("payacctnum").innerHTML=(" ");
	document.getElementById("payroutingnum").innerHTML=(" ");
}

function paymentconfirmation()
{
	alert("Thank you for submitting your payment");
}
function contactusmessage()
{
	//alert("Thank you for contacting us. We will get back to you as soon as possible");
}

function waitinglistmessage(){

	alert("There are no units currently available. Please add your information to the waiting list, and you will be contacted when a unit becomes available. ");
	
}

function datedisplaymessage(){
var now = new Date();
var greeting;

var hour= now.getHours();
if(hour<12)
	greeting="Morning";	
else if(hour>12 & hour<18)
	greeting="afternoon";
else(hour>18)
	greeting="evening";
	
var results = now.toDateString();
	
document.getElementById("datemessage").innerHTML=("Today is " + results +", " + "good " + greeting + "!");

}

var fullpic= new Array(6);

for(var i=0;i<fullpic.length;i++)
	fullpic[i]=new Image(75,100);
	
fullpic[0].src="Images/apartment.jpg";
fullpic[1].src="Images/apartment2.jpg";
fullpic[2].src="Images/apartment3.jpg";
fullpic[3].src="Images/apartment4.jpg";
fullpic[4].src="Images/apartment5.jpg";
fullpic[5].src="Images/apartment6.jpg";

fullpic[0].title="Images/apartment.jpg";
fullpic[1].title="Images/apartment2.jpg";
fullpic[2].title="Images/apartment3.jpg";
fullpic[3].title="Images/apartment4.jpg";
fullpic[4].title="Images/apartment5.jpg";
fullpic[5].title="Images/apartment6.jpg";

function displayFull(title){
	document.getElementById("imgCover").src=fullpic[title].src;
}

function updateunits(){
	
	alert("On the table you will see the number of units currently available based on the number of bedrooms. Please visit our leasing office or contact us for more information.");
	document.getElementById("onebedroom").value=("1");
	document.getElementById("twobedroom").value=("2");
	document.getElementById("threebedroom").value=("3");
}






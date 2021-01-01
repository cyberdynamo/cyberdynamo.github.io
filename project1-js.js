var isActive = 0;
var isActive2 = 0;

function functionFirst(){
	if(isActive==0)
	{
		var newVar1 = document.getElementById("violet");
		newVar1.style.background="#ee82ee";
		isActive=1;
	}
	else if(isActive==1)
	{
		var newVar2 = document.getElementById("indigo");
		newVar2.style.background="#4b0082";
		isActive=2;
	}
	else if(isActive==2)
	{
		var newVar3 = document.getElementById("blue");
		newVar3.style.background="#0000ff";
		isActive=3;
	}
	else if(isActive==3)
	{
		var newVar4 = document.getElementById("green");
		newVar4.style.background="#008000";
		isActive=4;
	}
	else if(isActive==4)
	{
		var newVar5 = document.getElementById("yellow");
		newVar5.style.background="#ffff00";
		isActive=5;
	}
	else if(isActive==5)
	{
		var newVar6 = document.getElementById("orange");
		newVar6.style.background="#ffa500";
		isActive=6;
	}
	else if(isActive==6)
	{
		var newVar7 = document.getElementById("red");
		newVar7.style.background="#ff0000";
		isActive=0;
	}
};

function functionSecond(){

	setTimeout(function(){
	if(isActive2==0)
	{
		var newVar1 = document.getElementById("violet");
		newVar1.style.background="#FFFFFF";
		isActive2=1;
	}
	else if(isActive2==1)
	{
		var newVar2 = document.getElementById("indigo");
		newVar2.style.background="#FFFFFF";
		isActive2=2;
	}
	else if(isActive2==2)
	{
		var newVar3 = document.getElementById("blue");
		newVar3.style.background="#FFFFFF";
		isActive2=3;
	}
	else if(isActive2==3)
	{
		var newVar4 = document.getElementById("green");
		newVar4.style.background="#FFFFFF";
		isActive2=4;
	}
	else if(isActive2==4)
	{
		var newVar5 = document.getElementById("yellow");
		newVar5.style.background="#FFFFFF";
		isActive2=5;
	}
	else if(isActive2==5)
	{
		var newVar6 = document.getElementById("orange");
		newVar6.style.background="#FFFFFF";
		isActive2=6;
	}
	else if(isActive2==6)
	{
		var newVar7 = document.getElementById("red");
		newVar7.style.background="#FFFFFF";
		isActive2=0;
	}
	},1000)
	
};

setInterval(functionSecond, 1000)
setInterval(functionFirst, 1000);
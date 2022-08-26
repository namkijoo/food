function over(){
	var a = document.getElementById('section1');
	var b = document.getElementById('section2');
	a.style.animation = "fadeOut 1s";
	setTimeout(() => {
		b.style.animation = "fadeIn 1s";
		setTimeout(() => {
			a.style.display = "none";
			b.style.display = "block"
		}, 450)})
	setResult();
};


var textArray1 = [
"Q2. 면이 땡기시나요?",
"Q3. 매운음식이 땡기시나요?",
"Q4. 국물이 땡기시나요?",
"Q5. 다이어트 중이신가요?"
];

var fi = [
"https://www.flaticon.com/free-icons/noodles",
"https://www.flaticon.com/kr/free-icons/-",
"https://www.flaticon.com/kr/free-icons/",
"https://www.flaticon.com/free-icons/diet"
];

var se = [
"noodles icons",
"매운 소스 아이콘",
"수프 아이콘",
"diet icons"
];

var th = [
"Noodles icons created by Good Ware - Flaticon",
"매운 소스 아이콘  제작자: surang - Flaticon",
"수프 아이콘  제작자: IconBaandar - Flaticon",
"Diet icons created by iconixar - Flaticon"

];

var num3=["20","30","40","50","60","70"];


var num1=0;
var num2=1;
var num4=0;


function change(){
	var a = document.getElementById('section2');
	var b = document.getElementById('section3');
	if(num4<4){
		

		var question = document.getElementById("dietText");
		question.innerText = textArray1[num1];

		var naem = document.getElementById("diet");
		naem.src=num2+".png";

		var ordering = document.getElementById('ordering');
		ordering.href=fi[num1];
		ordering.title=se[num1];
		ordering.innerText=th[num1];

		var lin = document.getElementById('lin');
		lin.value= num3[num1]


		a.style.animation = "fadeOut 1.5s";
		setTimeout(() => {
			a.style.animation = "fadeIn 1.5s";
			setTimeout(() => {
				a.style.display = "none";
				a.style.display = "block"
			}, 450)})

		num1++;
		num2++;
		num4++;
		setResult();
	}



	else{
		a.style.animation = "fadeOut 1s";
		setTimeout(() => {
			b.style.animation = "fadeIn 1s";
			setTimeout(() => {
				a.style.display = "none";
				b.style.display = "block"
			}, 450)})
	}
	
	

};

function under(){
	var c = document.getElementById('section3');

	var ti = document.getElementById('meet');
	ti.innerText="Q7. 시원한 OR 따뜻한";

	var myButton = document.getElementById('mmmButton');
	myButton.innerText = "차가운";

	var mmButton = document.getElementById('mmButton');
	mmButton.innerText="뜨거운"

	var icon = document.getElementById('icon');
	icon.remove();

	var ico = document.getElementById('ico');
	ico.remove();

	var yn = document.getElementById('yn');
	yn.src="7.png";

	var ny = document.getElementById('ny');
	ny.src="8.png";

	var lin = document.getElementById('linn');
	lin.value = "70"

	var ic = document.getElementById('ic');
	ic.style.display="block"
	

	c.style.animation = "fadeOut 1.5s";
	setTimeout(() => {
		c.style.animation = "fadeIn 1.5s";
		setTimeout(() => {
			c.style.display = "none";
			c.style.display = "block"
		}, 450)})
	setResult();
}


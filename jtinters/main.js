console.log("load");


function* rangeWhile(count) {
    var z = 0;
    var nums = [
            [
                0,1,2,3,4,5,6,7,8,9
            ],
            [
                83,34,13,52,41,67,98,78,24,59
            ],
            [
                104, 423, 552, 613, 818, 229, 763, 345,734,156
            ]
        ] 
    while (true) {
        if (z===10)
        {
            z = 0;
        }
        yield nums[count-1][z];
        z++;
    }
}


function animation_num_timer(obj) {
    var generatorNum = rangeWhile(obj.count);

    function getNum() {

       return generatorNum.next().value;

    }

    var num_el = obj.element;
    var timerId = setTimeout(function start () {
        num_el.innerText = getNum();
        setTimeout(start,10)
    }, obj.wait);
}

function animation_elements(obj){
	var elements = document.querySelectorAll(obj.selector);
	elements.forEach(function (element) {
        animation_num_timer({
            element : element,
            count : element.innerText.length,
            wait : getRandomInt(100, 500)
        })
    })
}



function getCoords(elem) { // not IE8
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function opacity_animation(delay){
	var Self = this;
	setTimeout(function () {

	    Self.style.opacity = 1;

    }, delay)

}

function left_animation(delay, val){
	var Self = this;
	setTimeout(function () {

	    Self.style.left = String(val)+"px";

    }, delay)

}

function top_animation(delay, val){
	var Self = this;
	setTimeout(function () {
		console.log(Self.style.top);
	    Self.style.top = String(val)+"px";

    }, delay)

}


var full_page, container, wrap_background01, wrap_background02, wrap_background03, jinterBox, 
Height, Width, imgBg, logo01, vline01, vline02, vline03, vline04, vblocks, text01, jtintersLogo1, 
nums_box, row2column4, sideRight4, curtains, row2colum2row4, dotSymbol2, tlines, plusSymbols;

row2column4 = document.querySelector(".row2-colum4");
dotSymbol2 = document.querySelectorAll(".dot-symbol2");
plusSymbols = document.querySelectorAll(".plus-symbol");
tlines = document.querySelectorAll(".tline");
row2colum2row4 = document.querySelector(".row2-colum2-row4");
curtains = document.querySelectorAll(".curtain-right, .curtain-left");
imgBg = document.querySelector("#img-bg");
sidesRight = document.querySelectorAll(".side-right");
jtintersLogo= document.querySelectorAll(".logo_t");
full_page = document.querySelector(".full-page");
logo01    = document.querySelector(".logo-block01");
nums_box  = document.querySelectorAll(".wrap-tb-num");
container = document.querySelector(".container");
wrap_background01 = document.querySelector(".wrap-background01");
wrap_background02 = document.querySelector(".wrap-background02");
wrap_background03 = document.querySelector(".wrap-background03");

jinterBox  = document.querySelector(".row2-colum2");
vline01    = document.querySelector(".barcode-box .vblock .el1");
vline02    = document.querySelector(".barcode-box .vblock .el2");
vline03    = document.querySelector(".barcode-box .vblock .el3");
vline04    = document.querySelector(".barcode-box .vblock .el4");
vblocks    = document.querySelectorAll(".barcode-box .vblock");
text01     = document.querySelector(".row2-colum3 .GHJd");

jtintersLogo[0].animation = opacity_animation;
jtintersLogo[1].animation = opacity_animation;

jtintersLogo[0].word_animation = function(delay, top_shift){
	
	var Self = this;
	setTimeout(function () {
		Self.style.color = "red";
	    Self.style.backgroundColor = "#0c0c0e";
	    Self.style.top = String(top_shift)+"px";
    }, delay)

};

dotSymbol2.forEach(function (element) {
    element.animation = opacity_animation;
})
tlines.forEach(function (element) {
    element.animation = opacity_animation;
})
plusSymbols.forEach(function (element) {
    element.animation = opacity_animation;
})

row2colum2row4.animation = opacity_animation;
vline01.animation = opacity_animation;
vline02.animation = opacity_animation;
vline03.animation = opacity_animation;
vline04.animation = opacity_animation;
logo01.animation  = opacity_animation;
text01.animation  = opacity_animation;
nums_box[1].left_animation = left_animation;

curtains[0].left_animation = left_animation;
curtains[1].opacity_animation = opacity_animation;
curtains[0].opacity_animation = opacity_animation;
curtains[1].left_animation = left_animation;
curtains[0].top_animation = function(delay, val){

		var Self = this;
		setTimeout(function () {
		    Self.style.backgroundColor = "unset";
		    Self.style.top = String(val)+"px";
	    }, delay)

	
};
curtains[1].top_animation = function(delay, val){

		var Self = this;
		setTimeout(function () {
		    Self.style.backgroundColor = "unset";
		    Self.style.top = String(val)+"px";
	    }, delay)

	
};

vblocks[1].animation = opacity_animation;
vblocks[2].animation = opacity_animation;
vblocks[3].animation = opacity_animation;
vblocks[4].animation = opacity_animation;
vblocks[5].animation = opacity_animation;
vblocks[6].animation = opacity_animation;
vblocks[7].animation = opacity_animation;
vblocks[8].animation = opacity_animation;
vblocks[9].animation = opacity_animation;

console.log(curtains, 'sss');

Height = document.documentElement.clientHeight;
Width  = document.documentElement.clientWidth;
console.log(Height, Width);
if (Width < 1470) {
	 row2column4.style.display = "none";
}

full_page.style.height = Height + "px";
container.style.height = Height + "px";

wrap_background01.style.height = wrap_background02.style.height = wrap_background03.style.height = Height + "px";
wrap_background01.style.width  = wrap_background02.style.width = wrap_background03.style.width    = Width + "px";

// row2column4wrapper.style.display = "none";

imgBg.style.left = String(getCoords(jinterBox).left - 400) + "px";
imgBg.style.top  = String(getCoords(jinterBox).top - 160) + "px";


// sidesRight[1].style.width = 0;
// nums_box[0].style.left = "500px";
// nums_box[0].style.top = "500px";

jtintersLogo[0].animation(200);
jtintersLogo[1].animation(200);
jtintersLogo[0].word_animation(600, 21);
logo01.animation(1000);
text01.animation(400);
vline01.animation(1000);
vline02.animation(1200);
vline03.animation(1400);
vline04.animation(1600);

row2colum2row4.animation(1000);

vblocks[1].animation(1000);
vblocks[2].animation(1000);
vblocks[3].animation(1150);
vblocks[4].animation(1200);
vblocks[5].animation(1400);
vblocks[6].animation(1400);
dotSymbol2.forEach(function (element) {
    element.animation(2200);
})
function func01(){
	var start = 2200;
	var shift = 50;
	for (var i = tlines.length-1; i ; i--) {
		tlines[i].animation(start);
		start += shift;
	}
};
func01();


function anumation_plus_symbol(){
	
	function wrapper(element, delay){
		setTimeout(function(){

			element.style.opacity = 1;	
			setTimeout(function(){
				element.style.opacity = 0;
			}, 80);
			
		}, delay);
	}

	setTimeout(function recursion_timer (){
		wrapper(plusSymbols[0], 100);
		wrapper(plusSymbols[1], 140);
		wrapper(plusSymbols[2], 200);
		setTimeout(recursion_timer, 1800);
	},3350)
	
};
anumation_plus_symbol();

// nums_box[1].left_animation(1500,0);


curtains[0].left_animation(1600,-35);
curtains[1].left_animation(1600,80);
curtains[0].top_animation(2210,-260);
curtains[1].top_animation(2210,-25);
vblocks[7].animation(1600);
vblocks[8].animation(1700);
vblocks[9].animation(1750);




setTimeout(function start () {
    wrap_background01.style.top = String(Height * 2) +"px";

}, 2600);

animation_elements({selector:".animation-num", count:1, wait:400});

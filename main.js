var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 
function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(600);
        block_image_object.scaleToHeight(400);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
}

var reasons= [
"Happy Birthday Mommy",
 "U R D besttt",
 "Best mamma ever",
 "LOVE YOU AND HAPPY BIRTHDAYYY"
];
var images = [
    "https://us.123rf.com/450wm/tigatelu/tigatelu1510/tigatelu151000225/46054601-illustration-of-father-giving-his-son-piggyback-ride-.jpg?ver=6",
     "https://st.depositphotos.com/1667027/3700/v/950/depositphotos_37007129-stock-illustration-mother-and-baby.jpg",
     "https://us.123rf.com/450wm/yupiramos/yupiramos1811/yupiramos181112261/127564781-beautiful-little-girl-character-vector-illustration-design.jpg?ver=6",
     "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190534185/122724605-little-girl-kid-character-vector-illustration-design.jpg?ver=6"
];

var i = 0;
function nextslide(){
    if (i == 4){
        i = 0;
    }
    document.getElementById("reasonnext").innerHTML = reasons[i];
    
    document.getElementById("myCanvas").src = images[i];
    i++;
}

/*
#       _     _       _       _                            _       _                                         _          _   
#    _ | |   /_\     /_\     /_\    __ _   __ _   __ _    /_\     /_\    __ _  __ __  __ _   ___  __   _ _  (_)  _ __  | |_ 
#   | || |  / _ \   / _ \   / _ \  / _` | / _` | / _` |  / _ \   / _ \  / _` | \ V / / _` | (_-< / _| | '_| | | | '_ \ |  _|
#    \__/  /_/ \_\ /_/ \_\ /_/ \_\ \__,_| \__,_| \__,_| /_/ \_\ /_/ \_\ \__,_|  \_/  \__,_| /__/ \__| |_|   |_| | .__/  \__|
#                                                                                                               |_|                         
                                                               #written by potatoes, special thanks to butter
*/

//AAAaaaAAarays
//the sound references
var arr_screAAAaaaAAams = ["AUD_AAAH_01", "AUD_AAAH_03", "AUD_AAAH_16", "AUD_AAAH_04", "AUD_AAAH_05", "AUD_AAAH_20", "AUD_AAAH_06", "AUD_AAAH_19", "AUD_AAAH_11", "AUD_AAAH_26", "AUD_AAAH_17", "AUD_AAAH_24", "AUD_AAAH_42", "AUD_AAAH_09", "AUD_AAAH_25", "AUD_AAAH_31", "AUD_AAAH_27", "AUD_AAAH_21", "AUD_AAAH_49", "AUD_AAAH_41", "AUD_AAAH_23", "AUD_AAAH_30", "AUD_AAAH_28", "AUD_AAAH_39", "AUD_AAAH_15", "AUD_AAAH_34", "AUD_AAAH_33", "AUD_AAAH_36", "AUD_AAAH_07", "AUD_AAAH_18", "AUD_AAAH_13", "AUD_AAAH_37", "AUD_AAAH_53", "AUD_AAAH_29", "AUD_AAAH_54", "AUD_AAAH_40", "AUD_AAAH_02", "AUD_AAAH_35", "AUD_AAAH_48", "AUD_AAAH_43", "AUD_AAAH_44", "AUD_AAAH_22", "AUD_AAAH_45", "AUD_AAAH_46", "AUD_AAAH_12", "AUD_AAAH_32", "AUD_AAAH_10", "AUD_AAAH_47", "AUD_AAAH_38", "AUD_AAAH_08", "AUD_AAAH_14", "AUD_AAAH_51", "AUD_AAAH_50", "AUD_AAAH_52", "AUD_AAAH_55"];
//what is being screamed about
var arr_diAAAaaaAAalogue = ["This website is having a meltdown.", "This website is freaking out.", "This website isn't feeling well.", "This website doesn't feel good.", "This website is not feeling well.", "This website needs a hug.", "This website needs some positive reinforcement.", "This website really needs a hug right now.", "This website desperately needs a hug.", "This website needs love right now.", "This website can't keep it together anymore.", "This website is totally losing it.", "This website is melting down.", "This website is having a break down.", "This website is breaking down.", "This website is freaking out.", "This website just lost it.", "This website is totally melting down.", "This website is having a crisis.", "This website is having a crisis. Give it some space.", "This website is losing it. It needs space.", "This website needs it's own space right now. Please take a break.", "This website needs some time off.", "This website can't do this anymore.", "This website is losing all hope.", "This website just lost all hope.", "This website is freaking out pretty hard.", "This website is freaking out pretty bad.", "This website is losing it. Maybe you should give it some space.", "This website is having a pretty big melt down right now.", "This website is at the end of itself.", "This website is freaking out very hard right now.", "Why are you doing this?", "You did this.", "This website is freaking out. You did this.", "Why would you do something like this?", "This website has had enough.", "This website is melting down, hard.", "This website is freaking out, hard.", "You expect too much from this website.", "You pushed this website too hard, and now look.", "This website is having an existential crisis.", "This website is having a crisis.", "You expect way too much from this website, and now look.", "This website is crying. It needs some space.", "This website is melting down. Please give it some space.", "You push this website way to hard sometimes.", "You expect too much from this website sometimes.", "You expect too much from this website and now it's crying.", "You made this website cry.", "This website is crying for help.", "This website is really freaking out.", "This website needs help.", "This website is sending distress signals.", "This website really needs a hug right now.", "This website desperately needs help.", "You made this website freak out.", "You gave this website a melt down.", "You gave this website an existential crisis.", "You gave this website too much to think about, and now look.", "You are too hard on this website.", "Why would you do that?", "Why did you do that?", "Now look what you did.", "You did this.", "Why?", "Why would you ask it to do that?", "Why do you ask the impossible?", "Why do you demand the impossible?", "Now look...", "You did this...", "You are too demanding...", "You demand way too much from this website.", "This website is desperate for love.", "This website desperately wants to be loved.", "This website needs love right now."];


//vAAAaaaAAars
var str_path = "JAAAaaaAAavascript/"; //path to folder (if this changes then update this)
var int_intervAAAaaaAAal; //interval id
var snd_screAAAaaaAAam; //yelling sounds here
var AAAaaaAAa_window; //reference to the window div
var num_countdOOOoooOOown = 0; //countdown till next scream

//random range
function mAAAaaaAAath_range(num_min, num_max){
	return Math.ceil(num_min + (num_max - num_min) * Math.random());
}
//get widths/heights
function AAAaaaAAa_returnDocWidth(){
	var num_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	//
	return num_width;
}
function AAAaaaAAa_returnDocHeight(){
	var num_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	//
	return num_height;
}
//visibility
function AAAaaaAAa_hideThis(str_elem){
	document.getElementById(str_elem).style.visibility = "hidden";
}
function AAAaaaAAa_showThis(str_elem){
	document.getElementById(str_elem).style.visibility = "visible";
}
//called whenever in use to update position
function plAAAaaaAAace_AAAaaaAAa(){
	AAAaaaAAa_window.style.top = String(AAAaaaAAa_returnDocHeight() - 216) + "px"; //- height
	AAAaaaAAa_window.style.left = String(AAAaaaAAa_returnDocWidth() - 320) + "px"; //- width
}

//do the AAAaaaAAa
function AAAaaaAAa(){
	AAAaaaAAa_showThis("id_AAAaaaAAa_window");
	plAAAaaaAAace_AAAaaaAAa();
	//text
	txt_AAAaaaAAa.innerHTML = arr_diAAAaaaAAalogue[Math.ceil(Math.random()*arr_diAAAaaaAAalogue.length)-1];
	//sound
	snd_screAAAaaaAAam = new Audio(str_path + "audio/" + arr_screAAAaaaAAams[Math.ceil(Math.random()*arr_screAAAaaaAAams.length)-1] + ".mp3");
	snd_screAAAaaaAAam.play();
	//set counter in event of mobile without proper audio
	//still toggles popup visibility then
	num_countdOOOoooOOown = 200;
	//ended
	snd_screAAAaaaAAam.onended = function(){
		AAAaaaAAa_complete();
	}
}

//sound is done, or counter is 0 so hide & reset all
function AAAaaaAAa_complete(){
	AAAaaaAAa_hideThis("id_AAAaaaAAa_window");
	//reset
	num_countdOOOoooOOown = mAAAaaaAAath_range(50, 400);
}

//interval...timer...countdowns
function intervAAAaaaAAal(){
	var popup = window.getComputedStyle(document.getElementById("id_AAAaaaAAa_window"));
	//visible or hidden
	//call it (it is closed and ready for another)
	if(num_countdOOOoooOOown <= 0 && popup.visibility == "hidden"){
		AAAaaaAAa();
	}
	//close it (it's way past done screaming, and audio support maybe)
	if(num_countdOOOoooOOown <= 0 && popup.visibility == "visible"){
		AAAaaaAAa_complete();
		//stop it to prevent multiple sounds maybe
		try{
			snd_screAAAaaaAAam.pause();
		}catch(e){
			//i swallowed it whole
		}
	}
	//
	num_countdOOOoooOOown -= 1;
}

function stAAAaaaAAart(){
	console.log("JAAAaaaAAavascript initiAAAaaaAted!");
	//setup popup div
	AAAaaaAAa_window = document.createElement("div");
	AAAaaaAAa_window.id = "id_AAAaaaAAa_window";
	AAAaaaAAa_window.className = "AAAaaaAAa";
	AAAaaaAAa_window.style.position = 'fixed';
	//children
	//background bubble
	var bAAAaaaAAackground = document.createElement("div");
	bAAAaaaAAackground.id = "id_bAAAaaaAAackground";
	bAAAaaaAAackground.className = "AAAaaaAAa";
	AAAaaaAAa_window.appendChild(bAAAaaaAAackground);
	bAAAaaaAAackground.innerHTML = '<img src=' + str_path + "images/IMG_POPUP.gif" + '>';
	bAAAaaaAAackground.style.position = 'absolute';
	//text
	txt_AAAaaaAAa = document.createElement("div");
	txt_AAAaaaAAa.id = "id_txt_AAAaaaAAa";
	txt_AAAaaaAAa.className = "AAAaaaAAa";
	AAAaaaAAa_window.appendChild(txt_AAAaaaAAa);
	txt_AAAaaaAAa.innerHTML = "AaaaAaaaAaaaaaAAAAAaaaAAaaAAaaAaHHHhh!";//aaahs go here
	txt_AAAaaaAAa.style.position = 'absolute';
	txt_AAAaaaAAa.style.color = "black";
	txt_AAAaaaAAa.style.font = "17px arial, sans-serif";
	txt_AAAaaaAAa.style.textAlign = 'center';
	txt_AAAaaaAAa.style.wordWrap = 'break-word';
	txt_AAAaaaAAa.style.top = '40px';
	txt_AAAaaaAAa.style.left = '40px';
	txt_AAAaaaAAa.style.width = '240px';
	txt_AAAaaaAAa.style.height = '83px';
	//AAAaaaAAapend!!
	document.getElementsByTagName("body")[0].appendChild(AAAaaaAAa_window);
	//positioning (bottom right)
	plAAAaaaAAace_AAAaaaAAa();
	//play scream
	AAAaaaAAa();
	//& start ints
	int_intervAAAaaaAAal = setInterval(intervAAAaaaAAal, 50);
}
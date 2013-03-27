var coins : int = 0;
var remainingCoins = 3;
var power = "";
var powerdrain: int;


function Start() {

}

function Update() {

	//getting the sound objects
	var bgmt1 = GameObject.Find("Bgmtrack1");
	var bgmt2 = GameObject.Find("Bgmtrack2");
	var bgmt3 = GameObject.Find("Bgmtrack3");

	if (coins == 1) {
		bgmt1.GetComponent(bgmcontrol).Unmute();
	}
		
	if (coins == 2) {
		bgmt2.GetComponent(bgmcontrol).Unmute();
	}
	
	if (coins == 3) {
		bgmt3.GetComponent(bgmcontrol).Unmute();
	}

	if (remainingCoins == 0) {
		
		var door : GameObject;
		door = GameObject.Find("Return Portal");
		door.renderer.enabled = true;
		door.collider.enabled = true;
	}
}

function Addjump(){
	power = "boostjump";
	powerdrain = 5;
}

function AddCoin () {
   coins++;
   remainingCoins--;
}


function OnGUI() {
    GUI.Label( Rect( 0, 0, 100, 100 ), "COINS:"+coins);
    GUI.Label( Rect(100,0,150,100), "Power:"+power+" "+powerdrain);
}
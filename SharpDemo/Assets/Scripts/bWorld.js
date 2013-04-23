var coins : int = 0;
var remainingCoins = 3;
var power = "";
var powerdrain : int;
var thrusters : int = 0;
var remainingThrusters = 3;
var powernum = 5;

function Start() {

}

function Update() {


/*
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
	
*/
}

function Addjump() {
	
	power = "boostjump";
	powerdrain = powernum;
	/*if (powerdrain > 100) 
	{
		powerdrain = 100;
	}*/
}

function AddCoin () {
   coins++;
   remainingCoins--;
}

function AddThruster()
{
	thrusters++;
	remainingThrusters--;

}



function OnGUI() {

		GUI.Label( Rect( 0, 0, 100, 100 ), "Thrusters:"+thrusters);
    	GUI.Label( Rect(100,0,150,100), "Power:"+power+" "+powerdrain);
    	
	if (Application.loadedLevelName.Equals("space2") )
	{
		GUI.Label( Rect( 50, 50, 500, 500 ), 
			"The maintenance crew is working on your ship. Help them out by turning on each of the three major thrusters!");
	}
	if(Application.loadedLevelName.Equals("spacestation"))
	{
		GUI.Label( Rect( 50, 50, 500, 500 ), 
			"Find all the space junk to unlock the next portal");
	}

}
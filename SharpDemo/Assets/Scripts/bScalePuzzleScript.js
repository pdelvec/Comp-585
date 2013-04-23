#pragma strict


var notes : int = 0;
var remainingNotes = 8;


function Start () {

	if (Application.loadedLevelName.Equals("space2") )
	{
		remainingNotes = 3;
	}


}

function Update () {
	var door : GameObject;
	if (remainingNotes == 0) {
		door = GameObject.Find("Return Portal");
		door.renderer.enabled = true;
		door.collider.enabled = true;
	}
	else {
		door = GameObject.Find("Return Portal");
		door.renderer.enabled = false;
		door.collider.enabled = false;
	}
}


function AddNote () {
   notes++;
   remainingNotes--;
}

function RemoveNote() {
	notes--;
	remainingNotes++;
}

function OnGUI() {
    GUI.Label( Rect( 0, 10, 100, 100 ), "NOTES:"+ notes);
    GUI.Label( Rect(100,10,150,100), "NOTES REMAINING:" + remainingNotes);
}
#pragma strict

var levelToLoad : String = "level1";



function Start () {

}

function OnTriggerEnter (other : Collider) {

	Application.LoadLevel (levelToLoad);
}
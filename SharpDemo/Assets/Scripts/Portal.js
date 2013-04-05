#pragma strict

var levelToLoad : String = "level1";

function OnTriggerEnter (other : Collider) {

	Application.LoadLevel (levelToLoad);
}
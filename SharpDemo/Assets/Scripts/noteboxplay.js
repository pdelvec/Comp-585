#pragma strict

var timeInterval : int;
var audioComponent : Component;


function Start () {

}

function OnMouseDown()
{

  //audio.Play();
      //Destroy(gameObject);
}


function Update () {

	if (Time.time % timeInterval < 1) {
		if (!audioComponent.audio.isPlaying && audioComponent.audio.enabled == true) {
			audioComponent.audio.Play();
			GameObject.Find(audioComponent.name + "/Shockwave").particleSystem.Play();

		}

	}




}
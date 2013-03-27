#pragma strict

var timeInterval : int;
var playNumber : int;
var audioComponent : Component;


function Start () {

}

function OnMouseDown()
{

  //audio.Play();
      //Destroy(gameObject);
}


function Update () 
{
	var time = Time.time % timeInterval;
	if (time < playNumber && time > playNumber - 1) {
		if (!audioComponent.audio.isPlaying) {
			audioComponent.audio.Play();
			GameObject.Find(audioComponent.name + "/Shockwave").particleSystem.Play();

		}

	}




}
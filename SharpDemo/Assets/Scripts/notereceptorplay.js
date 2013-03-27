#pragma strict

var timeInterval : int;
var playNumber : int;
var audioComponent : Component;
var SpawnTo : Transform; //your hand for example, attack an object to your character that you want the position of what you picked up to go to
var Object1 : Transform;
private var dist = 2;
private var isOn = false;


function Start () {
}

function OnMouseDown()
{

  //audio.Play();
      //Destroy(gameObject);
}




function Update (){
	if(isOn) {
		var time = Time.time % timeInterval;
		if (time < playNumber && time > playNumber - 1) {
			if (!audioComponent.audio.isPlaying) {
				audioComponent.audio.Play();
				GameObject.Find(audioComponent.name + "/Shockwave").particleSystem.Play();

			}

		}
	}
	else if(Input.GetKeyDown(KeyCode.E))
    { //if you press 'e'
    	if(Vector3.Distance(SpawnTo.position, Object1.position) < dist && !audioComponent.audio.isPlaying )
        {
       	 	audioComponent.audio.Play();
			GameObject.Find(audioComponent.name + "/Shockwave").particleSystem.Play();
		}
    }

}

function TurnOn(){
	isOn = true;
}


function TurnOff(){
	isOn = false;
}
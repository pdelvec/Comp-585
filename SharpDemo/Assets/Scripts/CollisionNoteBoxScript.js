#pragma strict

var component : Component;
var correctNoteBoxName : String;
var timeInterval : int;
private var isCorrect = false;

function Start() 
{
	renderer.material.color = Color.red;
}


function OnCollisionStay(collision : Collision) 
{
	if(collision.gameObject.name == "NoteBox")
	{
		//GameObject.Find(component.name + "/RewardNote").audio.Play();
		isCorrect = true;
		renderer.material.color = Color.green;
		Destroy(GameObject.Find("endgate"));	//get rid of fence to portal
		GameObject.Find(component.name + "/RewardParticles").particleSystem.Play();
	}
		Debug.Log(collision.gameObject + "isCorrect = " + isCorrect);
}

function OnCollisionExit(collision : Collision) 
{
    if(collision.gameObject.name == "NoteBox")
	{
		
		isCorrect = false;
		renderer.material.color = Color.red;
		GameObject.Find(component.name + "/RewardParticles").particleSystem.Stop();
		Debug.Log("No longer in contact");
	}
}


function Update()
{
	var reward = GameObject.Find(component.name + "/RewardNote");
	if(isCorrect)
	{
		if (Time.time % timeInterval < 1) 
		{
			if (!reward.audio.isPlaying) 
			{
				reward.audio.Play();
				reward.particleSystem.Play();
			}
		}
	}
}
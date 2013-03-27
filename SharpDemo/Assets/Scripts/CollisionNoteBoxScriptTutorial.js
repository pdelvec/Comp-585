#pragma strict

var component : Component;
var correctNoteBoxName : String;
var timeInterval : int;
private var isCorrect = false;
private var portal : Component;

function Start() 
{
	renderer.material.color = Color.red;
	portal = GameObject.Find("Return Portal").GetComponent("ScalePuzzleScript");
}


function OnCollisionStay(collision : Collision) 
{
	if(collision.gameObject.name == correctNoteBoxName)
	{
		//GameObject.Find(component.name + "/RewardNote").audio.Play();
		/*if(isCorrect == false){
			portal.SendMessage("AddNote");
			component.GetComponent("notereceptorplay").SendMessage("TurnOn");
		}*/
		collision.gameObject.audio.enabled = false;
		isCorrect = true;
		renderer.material.color = Color.green;
		Destroy(GameObject.Find("endgate"));	//get rid of fence to portal
		GameObject.Find(component.name + "/RewardParticles").particleSystem.Play();
		
	}
		Debug.Log(collision.gameObject + "isCorrect = " + isCorrect);
}

function OnCollisionExit(collision : Collision) 
{
    if(collision.gameObject.name == correctNoteBoxName)
	{
		
		/*if(isCorrect) {
			portal.SendMessage("RemoveNote");
			component.GetComponent("notereceptorplay").SendMessage("TurnOff");
		}*/
		isCorrect = false;
		collision.gameObject.audio.enabled = true;
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

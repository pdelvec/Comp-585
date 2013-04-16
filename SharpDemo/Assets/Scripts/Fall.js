#pragma strict

var levelToLoad : String = "level1";



function Start () {

}

function OnTriggerEnter (other : Collider) 
{

//play a death sound


	if (levelToLoad == "spacestation")	//your code is bad and you should feel bad
	{
		other.transform.position = Vector3(-38.24667, 2.731857, 41.28137);
	}
	else if (levelToLoad == "space1")
	{
		other.transform.position = Vector3(-38.24667, 2.731857, 41.28137);
	}
	else if (levelToLoad == "space2")
	{
		other.transform.position = Vector3(75, 0, 49.14264);
	}
	else
	{
		Application.LoadLevel (levelToLoad);
	}
}
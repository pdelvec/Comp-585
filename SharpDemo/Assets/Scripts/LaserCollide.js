#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) 
{
	other.transform.position = Vector3(0.9015362, -0.4936832, -39.66883);
}

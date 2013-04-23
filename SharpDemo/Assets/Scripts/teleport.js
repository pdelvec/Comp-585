#pragma strict

var x: float = 0;
var y: float = 0;
var z: float = 0;

function OnTriggerEnter (other : Collider) 
{
		other.transform.position = Vector3(x, y, z);
}
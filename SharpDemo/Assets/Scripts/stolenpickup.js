#pragma strict
var SpawnTo : Transform; //your hand for example, attack an object to your character that you want the position of what you picked up to go to
var Object1 : Transform; //what you're picking up, the object that you want to move
var dist = 5; //distance at which you can pick things up
private var isHolding = false;
 
function Update () 
{

   
    if(Input.GetKeyDown(KeyCode.E))
    { //if you press 'e'
        if(Vector3.Distance(SpawnTo.position, Object1.position) < dist) //if distance is less than dist variable
        {
            isHolding = !isHolding; //changes isHolding var from false to true 
            Debug.Log("HAI GUYZ");
        }
    }
 
    if(isHolding == true)
    {
    	//Object1.collider.enabled = false;
        Object1.rigidbody.useGravity = false; //sets gravity to not on so it doesn't just fall to the ground
 
        Object1.parent = SpawnTo; //parents the object
	 	  
	 	  
	 	  
        Object1.transform.position = SpawnTo.transform.position;//sets position
 
        Object1.transform.rotation = SpawnTo.transform.rotation; //sets rotation
    }
    else
    { //if isHolding isn't true
        	//Object1.collider.enabled = true;
            SpawnTo.transform.DetachChildren(); //detach child (object) from hand
            Object1.rigidbody.useGravity = true; //add the gravity back on
    }
}

function createVectorFromCamera()
{
	var deg2rad = -2 * Mathf.PI / 360;
	var xAngle = Camera.mainCamera.transform.localEulerAngles.x;
	var yAngle = Camera.mainCamera.transform.localEulerAngles.y;
	var zAngle = Camera.mainCamera.transform.localEulerAngles.z;
	
	var x = 2 * Mathf.Cos(xAngle * deg2rad);
	var z = 2 * Mathf.Cos(zAngle * deg2rad);
	var y = 2 * Mathf.Cos(yAngle * deg2rad);
	
	return Vector3(x,y,z);
	
}
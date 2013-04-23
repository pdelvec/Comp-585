var SpawnTo : Transform; //your hand for example, attack an object to your character that you want the position of what you picked up to go to
var Object1 : Transform; //what you're picking up, the object that you want to move

function Update () {
	 if(Input.GetKeyDown(KeyCode.E)){
	 	if(Vector3.Distance(SpawnTo.position,Object1.position)<5){
	 		GameObject.Find("SimpleFlame(Blue)").particleSystem.Stop();
	 		rigidbody.constraints = RigidbodyConstraints.None;
	 	}
	 }

}
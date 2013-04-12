
var world : World;
var character: CharacterMotor;

function Start() {
   world = GameObject.Find("World").GetComponent("World");
   character = GameObject.Find("Player").GetComponent("CharacterMotor");
}
function OnTriggerEnter( other : Collider ) {
   world.SendMessage("Addjump");
   character.jumping.baseHeight = 12;
   this.renderer.enabled = false;
   this.collider.enabled = false;

   
   if ( audio ) { 
      audio.Play(); 
   }
}
function Update()
{
	if(Time.time % 60 < 1 )
	{
		this.renderer.enabled = true;
		this.collider.enabled = true;
	}	
	
}
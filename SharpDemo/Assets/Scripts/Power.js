
var world : World;
var character: CharacterMotor;

function Start() {
   world = GameObject.Find("World").GetComponent("World");
   character = GameObject.Find("Player").GetComponent("CharacterMotor");
}
function OnTriggerEnter( other : Collider ) {
   world.SendMessage("Addjump");
   character.jumping.baseHeight = 12;

   
   if ( audio ) { 
      audio.Play(); 
   }
}
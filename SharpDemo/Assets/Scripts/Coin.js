
var world : World;
function Start() {
   world = GameObject.Find("World").GetComponent("World");
}
function OnTriggerEnter( other : Collider ) {
   world.SendMessage("AddCoin");
   renderer.enabled = false;
   collider.enabled = false;
   if ( audio ) { 
      audio.Play(); 
   }
}
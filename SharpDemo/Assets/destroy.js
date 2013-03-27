function Start() {
 
}
function OnTriggerEnter( other : Collider ) {
   Destroy(this.gameObject);
}
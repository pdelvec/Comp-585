var world : World;
var character : CharacterMotor;

function Start () {
	world = GameObject.Find("World").GetComponent("World");
	character = GameObject.Find("Player").GetComponent("CharacterMotor");
}

function Update () {
			if (character.IsGrounded () == true )	
			{
				Debug.Log("GROUNDED!");
			}
	if(world.powerdrain > 0) 
	{
		if(Input.GetKeyDown(KeyCode.Space) )
		{	

				world.powerdrain--;
				if(world.powerdrain == 0)
				{
					character.jumping.baseHeight = 1;
					world.power = "";
				}
			
		}
	}
}
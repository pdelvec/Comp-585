var size = .1;
var delay = .5;
var originalsize = 5;
var returndelay = 1;
private var count = 0;
private var counter = 50;

function Start () { 
counter = originalsize/size;

while(true){
transform.localScale += Vector3(size,size,size);
yield WaitForSeconds(delay);
count++;
if(count == counter){
	yield WaitForSeconds(returndelay);
	while(count != 0){
	transform.localScale -= Vector3(size,size,size);
	yield WaitForSeconds(delay);
	count --;
	}
	yield WaitForSeconds(returndelay);
}
}

}
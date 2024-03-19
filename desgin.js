var num= (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function findnumber()
{
    var numuser = parseInt(document.getElementById("n1").value);
    if(numuser == num)
    {
        alert("Congratulations!!! You guessed the number in "+count+" tries.");
    }
    else if(numuser > num)
    {
        document.getElementById("res").textContent = "Try with lesser value ";
    }
    else 
    {
        document.getElementById("res").textContent = "try with greater value";
    }
    document.getElementById("tries").textContent = count;
    count++;
}
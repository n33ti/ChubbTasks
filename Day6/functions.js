var f = function()
{
    return  Math.floor(Math.random()*11);
}

var add = function(val1, val2)
{
    return val1 + val2;
}
var sub = function(val1, val2)
{
    return val1 - val2;
}
var mul = function(val1, val2)
{
    return val1 * val2;
}
var div = function(val1, val2)
{
    return val1 / val2;
}



var calculate = function(val1, val2, op)
{
 if(op === '+')
 return add(val1, val2);
 if (op === '-')
return sub(val1, val2);
 if (op === '*')
return mul(val1, val2);
return div(val1, val2);

}

var add1 = function(val1)
{
    return val1+  f();
}


var waitforasecond = function(timer){
 
console.log(timer)
 
}

var countDown = function()
{
    var timer = 10
    var count = 1
        while (timer>=0)
        {
        setTimeout(waitforasecond, count *1000, timer);
        count = count + 1;
        timer = timer - 1;
        
        }

        setTimeout(console.log , 11000, "Happy Birthday")
        
    
}

countDown();

// Qus:-  Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let  Counter = 10 
function conunter (){
    Counter = Counter +1 ;
    console.log(Counter);
    return Counter
}

conunter ()
conunter ()
conunter ()

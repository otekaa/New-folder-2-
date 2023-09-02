
function* fib(n)
{
    let num1 = 0;
    let num2 = 1;

    for(let i = 0; i < n; i++)
    {
        yield num1;
        [num1, num2] = [num2, num1 + num2];
    }
}


function* fibAlt(n)
{
    let num1 = 0;
    let num2 = 1;
    
    while (num1 <= n)
    {
        yield num1;
        [num1, num2] = [num2, num1 + num2];
        
    }
}



const generator = fib(8);
for (const num of generator) 
{
    console.log(num);
}

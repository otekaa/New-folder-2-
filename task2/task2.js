
let myPromise = new Promise(function(resolve, reject) 
{
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.onreadystatechange = function() 
    {
        if (request.readyState==4)
        {
            if (request.status>=200 && request.status<300)
            {
                resolve(request.responseText);
            }
            else
            {
                reject("error");
            }
        }
    }

    request.send();
})

myPromise.then((data) => {
    let result = JSON.parse(data);
    console.log(result);
}).catch((error) => console.log(error));


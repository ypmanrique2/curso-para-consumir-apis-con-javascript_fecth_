
let parametros = {
    userId: 1,
    _limit: 3
}

let url = new URL('https://jsonplaceholder.typicode.com/posts');

Object.keys(parametros).forEach(paramKey => {
    url.searchParams.append(
         paramKey,
        parametros[paramKey]
    )
});

fetch(url).then(r => r.json()).then(data => console.log(data));

/* fetch()
    .then(response=>{
            if(response.status >= 200 && response.status < 300){

            }
            return response.json();
    }).then(
        (data) => console.log(data)
    ).catch(err=>{
        console.log(err);
    }) */
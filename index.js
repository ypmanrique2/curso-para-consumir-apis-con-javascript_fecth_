fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
        (response) => {
            if(response.status >= 200 && response.status < 300){

            }
            console.log(response);
            return response.json()
        }  
    ).then(
        (data) => console.log(data)
    ).catch(
        err => console.log(err)
    )
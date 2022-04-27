const baseUrl = 'http://localhost:5000/api/scores/';

export const getScores = ()=>

{
    return fetch(baseUrl)
    .then(re=> re.json())
}

export const postScores = (data)=>
{
    return  fetch(baseUrl, 
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}
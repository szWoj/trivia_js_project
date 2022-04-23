const baseURL = 'http://localhost:5000/api/scores/'

export const getScores = () => {
    return fetch(baseURL)
        .then(res => res.json())
        .then(res => res.toArray())
}

export const postScore = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
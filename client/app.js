const offBtn = document.getElementById('btn-off')
const url = 'http://192.168.100.45:3000/signal'
const test = {signal: "OFF"}

window.addEventListener('DOMContentLoaded' , () => {
    offBtn.addEventListener('click', async() => {
        await loadMessage(url, test)
     })
     
})
 
const loadMessage = async (url ,data) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return await response.json()
}

// const test = { signal: "OFF" };
// const shutDown = async () => {
//   const response = await fetch('http://192.168.100.45:3000/signal', {
//     method: "POST",
//     body: JSON.stringify(test),
//     headers: { "Content-type": "application/json; charset=UTF-8" },
//   });
//   return await response.json();
// };
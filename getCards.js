// const getPhotos = () => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         const test = document.querySelector('.test')

//         for (let index = 0; index < 5; index++) {
//             const rnd = Math.floor(Math.random()*(100-1+1)+ 1)
//             const img = document.createElement('img')
//             img.src = `${data[rnd].url}`
//             img.width = '100'
//             test.append(img)   
//         }
//       })
// }

// // getPhotos()

// const getActivity = () => {
//     fetch('https://www.boredapi.com/api/activity')
//     .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         console.log(data.activity);
//         const test = document.querySelector('.test')
//         const text = document.createElement('p')
//         text.innerText = data.activity
//         text.classList.add('text')
//         test.append(text) 
//       })
// }
// getActivity()


const getCards = () => {
    fetch('https://test4-d0426-default-rtdb.firebaseio.com/db.json')
        .then(response => {
          return response.json()
        })
        .then(cards => {
            console.log(cards);
        })
}
getCards()
//***ФУНКЦИЯ получения локально массива обьектов
// const getCards = () => {
//     fetch('db/db3.json')
//     .then(response => {
//         if (response.status === 200 || response.status === 304) {
//             return response.json()
//         } else {
//             throw new Error(response.status)
//         }
//     })
//     .then(cards => {
//         localStorage.setItem('cards', JSON.stringify(cards))
//     })
//     .catch(error => {
//         alert('Ошибка подключения. статус ' + error)
//         console.log(error);
//     })
// }
// getCards()
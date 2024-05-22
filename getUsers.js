const getUsers = () => {
    fetch('https://test4-d0426-default-rtdb.firebaseio.com/users.json')
        .then(response => {
          return response.json()
        })
        .then(cards => {
            console.log(cards);
        })
}
getUsers()

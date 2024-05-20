function shopCart() {
    



const shopContent = document.querySelector('.shop__content')
const tableBody = document.querySelector('.table__body')
const navCount = document.querySelector('.nav__count')
const modalSum = document.querySelector('.modal__sum')
const modalCount = document.querySelector('.modal__count')

//***ФУНКЦИЯ изменения кол-ва товара в корзине */
const updateCardsInShopCart = (card, count) => {
    const cardsLS = JSON.parse(localStorage.getItem('shopCart')) || []
    const newArr = cardsLS.map(el => {
        if (el.id === card.id) {
            el.count = count
        }
        return el
    })
    localStorage.setItem('shopCart', JSON.stringify(newArr))
    paintShopCart()
}

//***ФУНКЦИЯ подсчета количества товаров и суммы (позже) */
const calcCountItemsInShopCart = () => {
    const cardsLS = JSON.parse(localStorage.getItem('shopCart')) || []
    const sum = cardsLS.reduce((acc,el) => {
        return el.price*el.count+acc
    }, 0)
    const count = cardsLS.reduce((acc,el)=> acc+ +el.count, 0)
    modalSum.textContent = `Общая сумма ${sum}`
    modalCount.textContent = `Общее кол-во ${count}`
    navCount.textContent = cardsLS.length
}

//***ФУНКЦИЯ отрисовки карточек в корзине */
const paintShopCart = () => {
    // let i = 0
    tableBody.innerHTML = ''
    const cardsLS = JSON.parse(localStorage.getItem('shopCart')) || []
    cardsLS.forEach((el, index) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${index+1}</td>
            <td class="table__photo">
                <div class="table__img ${imgCards[el.type]}"></div>
            </td>
            <td>${el.name}</td> 
            <td>${el.price}</td>
            <td class="table__count">
                <div class="table__count-add">&#9650;</div>
                <input class="table__input" type='number' min="1" value="${el.count}">
                <div class="table__count-remove">&#9660;</div>   
            </td>
            <td>${el.price*el.count}</td>
            <td>
                <button class="table__delete">X</button>
            </td>
        `
        tableBody.append(tr)
        tr.addEventListener('click', (e)=> {
           if (e.target.closest('.table__delete')) {
                cardsLS.splice(index,1)
                localStorage.setItem('shopCart', JSON.stringify(cardsLS))
                paintShopCart()
           }
           if (e.target.closest('.table__count-add')) {
                updateCardsInShopCart(el,++el.count)
           }

           if (e.target.closest('.table__count-remove')) {
            updateCardsInShopCart(el, Math.max(1, --el.count))
           }

           if (e.target.closest('.table__input')) {
                const tableInput = e.target;
                
                tableInput.addEventListener('change', ()=> {
                    (tableInput.value > 1) ? updateCardsInShopCart(el, tableInput.value) : updateCardsInShopCart(el, el.count)
                })
           }
        })
    })
    calcCountItemsInShopCart()
}

//метод some возвращает true если найден обьект ПЕРВЫЙ удовлетворяющий условию
//***ФУНКЦИЯ поиска карточки товара (объекта)
const searchCard = (clickedCardId) => { 
    cardsInShopCart = JSON.parse(localStorage.getItem('shopCart')) || []
    const cards = JSON.parse(localStorage.getItem('cards')) || []
    const foundCard = cards.find(el => el.id === clickedCardId)
    //проверка обьекта в корзине
    if(cardsInShopCart.some(el => el.id === foundCard.id)) {
        cardsInShopCart.map(el => {
            if (el.id === foundCard.id) {
                el.count++
            }
        })
    } else {
        foundCard.count = 1
        cardsInShopCart.push(foundCard)
    }     
    localStorage.setItem('shopCart', JSON.stringify(cardsInShopCart))
    paintShopCart()
}

//получение ID карточки товара по клику на товар
shopContent.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('shop__link') && e.target.dataset.id !== undefined) {
        const clickedCardId = e.target.dataset.id;
        searchCard(clickedCardId);
    }
})

//открытие модального окна 
navLinkShopCart.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.style.display = 'flex';
    paintShopCart() //метод отрисовки
 })
//закрытие модального окна
 modal.addEventListener('click', (e)=> {
    e.preventDefault();
    if (e.target.classList.contains('modal')) {
        modal.style.display = 'none';
    }
    if (e.target.closest('.modal__clear')) {
        localStorage.removeItem('shopCart')
        paintShopCart() 
    }
 })



 calcCountItemsInShopCart()

}
shopCart()



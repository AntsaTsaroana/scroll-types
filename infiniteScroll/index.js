const container =document.querySelector('.container');

// window.addEventListener('scroll', (e) => {
//     console.dir(e.target);
// })

// io code io ambony io dia mitovy amin'ito code ito ambany ito :

// window.addEventListener('scroll', () => {
//     console.dir(document.documentElement);
// })
//
//Ny .dir() dia ahafahana mampiseho ireo attribut rehetra 


window.addEventListener('scroll', (e) => {
    //Destructuring
    const {scrollTop, clientHeight, scrollHeight} = e.target.scrollingElement;
    //Mitovy @ hoe :
    // const {scrollTop, clientHeight, scrollHeight} = document.documentElement;

    //scrollTop = scroll depuis eo am top
    //clientHeight = mitovy am "vh" ihany
    //scrollHeight = ny hauteur anle scroll rehetra eo am ecran
    //Izany hoe scrollTop + clientHeight = scrollHeight
    if (scrollTop + clientHeight === scrollHeight) {
        addItem(10);
    }
})

const addItem = (index) => {
    for (let i = 0; i < index; i++) {
        const item = document.createElement('div');
        item.setAttribute('class','item');

        container.appendChild(item);    
    }
}
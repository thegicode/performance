

function fn(){
    const fragment = new DocumentFragment
    for(let i = 0 ; i < 100 ; i++) {
        const node = document.createElement('p')
        node.textContent = i
        fragment.appendChild(node)
    }
    document.querySelector('#log').appendChild(fragment)
}

fn()
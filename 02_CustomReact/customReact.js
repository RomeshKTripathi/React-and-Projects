const reactElement = {
    type: 'a',
    props: {
        'href':'https://google.com',
        'target':'_blank'
    },
    child:'Click me to visit google'
}

const paragraph = {
    type:'p',
    child: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto doloribus dolor! Ipsam dolores nihil reiciendis, quo similique delectus debitis.'
}

const root = document.getElementById('root');

customRender(reactElement, root);
customRender(paragraph, root);

function customRender(reactElement, root){
    const domElement = document.createElement(reactElement.type);
    for (const key in reactElement.props) {
            domElement.setAttribute(key, reactElement.props.key);
            console.log(key)
        }
    
    domElement.innerHTML = reactElement.child;

    root.appendChild(domElement);
    
}




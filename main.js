/// task 1
const extractNumbers = (str) => {
    const matches = str.match(/\d+/g)
    return matches ? matches.map(Number) : []
};


const example = "qwerty1234";
const result = extractNumbers(example);
console.log(result)

/// task 2
function number(prev = 0, current = 1) {
    console.log(prev);
    if (current > 144) return;

    setTimeout(() => {
        number(current, prev + current)
    }, 1000)
}
number();

/// task 3
const fetchTitle = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`)
        }

        const data = await response.json()
        data.forEach(product => console.log(product.title))
    } catch (error) {
        console.error("анные не получены:", error);
    }
}


fetchTitle()

/// task 4
const buttonContainer = document.querySelector('#buttons');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent
        document.body.style.backgroundColor = color
    }
})

// task 5
const button = document.querySelector('#button-eye')
const display = document.querySelector('#display-eye')
button.addEventListener('click', () => {
    if (display.style.display === 'none') {
        display.style.display = 'block'
    } else {
        display.style.display = 'none';
    }
})

/// task 6
const counterElement = document.querySelector('#counter');
let count = 0;

const interval = setInterval(() => {
    count ++;
    counterElement.textContent = count;

    if (count >= 100) {
        clearInterval(interval);
    }
}, 100);
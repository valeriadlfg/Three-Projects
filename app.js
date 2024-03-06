const closedEmoji = document.querySelector('.closed')
const openEmoji = document.querySelector('.open')

closedEmoji.addEventListener('click', () => {
    if(openEmoji.classList.contains('open')) {
        openEmoji.classList.add('active');
        closedEmoji.classList.remove('active');
    }
});

openEmoji.addEventListener('click', () => {
    if(closedEmoji.classList.contains('closed')) {
        closedEmoji.classList.add('active');
        openEmoji.classList.remove('active');
    }
});

//Project two

let data = [
    {
        name: 'Val',
        age: '24'
    },
    {
        name: 'Nassia',
        age: '27'
    },{
        name: 'Marisa',
        age: '50'
    },{
        name: 'Tuna',
        age: '8'
    },{
        name: 'Chuckie',
        age: '4'
    },{
        name: 'Tommy',
        age: '7'
    },
];

const infoContainer = document.querySelector('#info');

function createRectangles() {
    data.forEach(function(item) {
        const rectangle = document.createElement('div');
        rectangle.classList.add('rectangle');
        rectangle.innerHTML = '<div class="info">' + item.name + ' ' + 'is ' + item.age + ' years old 🐒' + '</div>';
        rectangle.addEventListener('click', function() {
            toggleInfo(rectangle, item);
        });
        infoContainer.appendChild(rectangle);
    });
}

function toggleInfo(rectangle, item) {
    const infoElement = rectangle.querySelector('.info');
    if (infoElement.classList.contains('additional-info')) {
        infoElement.textContent = item.name + ' ' + 'is ' + item.age + ' years old 🐒';
        infoElement.classList.remove('additional-info');
    } else {
        infoElement.textContent = item.name  + ' is fun '+ 'to be around 🎉';
        infoElement.classList.add('additional-info');
    }
}


createRectangles();

///Project three

const circle = document.querySelector('#circle');


circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});

const cornerCircles = document.querySelectorAll('.corner-circle');
cornerCircles.forEach(cornerCircle => {
    cornerCircle.addEventListener('mouseenter', () => {
        if (!cornerCircle.classList.contains('hover')) {
            cornerCircle.classList.add('hover');
        }
    });

    cornerCircle.addEventListener('mouseleave', () => {
        if (cornerCircle.classList.contains('hover')) {
            cornerCircle.classList.remove('hover');
        }
    });
});





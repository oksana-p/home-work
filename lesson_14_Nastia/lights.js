function createCircles(count) {
    let root;
    const body = document.querySelector('body');

    function createRoot() {
        root = document.createElement('div');
        root.classList.add('circles');
        body.append(root);
    }

    function createCircle() {
        for(let i = 0; i < count; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            circle.style.background = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
            
            circle.addEventListener('click', function() {
                circle.style.background = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';  
            })

            root.append(circle);
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

    }

    createRoot();
    createCircle();

}

createCircles(5);


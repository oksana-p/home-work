(() => {

    const allCircleBtns = document.querySelectorAll('.main__circle');
    const allPopups = document.querySelectorAll('.main__circle_popup');

    function btnClick(currentBtn) {
        const circleBtn = currentBtn.querySelector('.circle');
        const popup = currentBtn.querySelector('.main__circle_popup');

        circleBtn.addEventListener('click', showPopup)

        function showPopup() {
            hidePopups();
            popup.classList.add('active');            
        }
    }    

    function hidePopups() {
        allPopups.forEach((popup) => {
            popup.classList.remove('active');
        })
    }

    for (const element of allCircleBtns) {  
        btnClick(element);
    }
    
})()

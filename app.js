//Setting up initial count

let count = 0;

//select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'skyblue';
        }
        else if(count < 0) {
            value.style.color = 'midnightblue';
        }
        else {
            value.style.color = 'magenta';
        }
        value.textContent = count;
    })
});

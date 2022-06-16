const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e)=> {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-formTop', (cursor.offsetTop - screenY));
});

window.addEventListener('scroll', ()=>{
    const fromTop = cursor.getAttribute('data-fromTop');
    cursor.style.top = scrollY + parseInt(fromTop) + 'px';
    console.log(screenY);
});

window.addEventListener('click', () => {
    if(cursor.classList.contains('click')){
        cursor.classList.remove('click');
        void cursor.offsetWidth;
        cursor.classList.add('click');
    }else{
        cursor.classList.add('click');
    }
});
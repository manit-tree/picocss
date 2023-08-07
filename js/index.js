let init = () => {
    let scheme = themeSwitcher.scheme;

    let switch1 = document.querySelector('#switch1');
    switch1.checked = (scheme=='dark'?true:false);
    
    switch1.addEventListener('click', (evt) => {
        let el = evt.currentTarget;
        themeSwitcher.scheme = el.checked==true?'dark':'light';
    })    
}

init();
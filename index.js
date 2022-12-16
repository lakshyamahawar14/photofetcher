let box = document.getElementById('box');
let btn = document.getElementById('btn');
let x = document.getElementById('mbox');
let dwnld = document.getElementById('dwnld');

function loader(){  
    if(x.style.width != '100%'){
        x.style.transition = 'all 2s linear';
        x.style.width = '100%';
    }

    setTimeout(() => {
        if(x.style.width != '0px'){
            x.style.transition = 'unset';
            x.style.width = '0px';
        }
    }, 2000);       
}

function loaded(){
  btn.innerText='Fetch';
}

function loading(){
  btn.innerText='Fetching...';
}


function download(){
  dwnld.style.display='block';
}

    btn.addEventListener('click', (e) => {
    
    e.preventDefault();
if(document.getElementById('height').value != 0 && document.getElementById('width').value != 0 && document.getElementById('type').value != 0 ){
    loader();
    loading();
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
    let type = document.getElementById('type').value;
    fetch(`https://source.unsplash.com/${width}x${height}/?${type}`).then((res) => {
        
        if (!res.status) {
            throw Error(res.statusText);
        }
        return res;
       
    }).then((data) => {
        loader();
        loaded();
        box.innerHTML = `<img src=${data.url} alt="damn">`;
        dwnld.innerHTML = `<a href=${data.url} target="_blank" download>Full Screen</a>`;
        download();
        
    }).catch((error) => {
        console.log(error);
    })
}else{
    alert('Please Fill Out All Fields!')
}
})




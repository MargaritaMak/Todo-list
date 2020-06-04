const close =  document.getElementsByClassName('close');


for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let elem = document.getElementsByClassName('list');
        elem[i].style.display ='none';
        console.log(elem)
    }
}
const div=document.querySelectorAll('div')
const li=document.querySelectorAll('li')
for(let i=0;i<div.length;i++){
    div[i].addEventListener('click',()=>{
        if(div[i].parentElement===li[0]){
            li[1].appendChild(div[i])
        }
        else{
            li[0].appendChild(div[i])
        }
    })
}
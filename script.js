const hex=[
    "00",
    "33",
    "66",
    "99",
    "CC",
    "FF"
]

let colors = []

for (let i=0;i<hex.length;i++){
    for (let j=0;j<hex.length;j++){
        for (let k=0;k<hex.length;k++){
            colors.push(hex[i]+hex[j]+hex[k])
        }
    }
}

colors.forEach((elem)=>{
    let bod= document.querySelector('.colorpicker');
    bod.innerHTML+=`<div class='colorblock' style='background-color:#${elem}'></div>`;
    //console.log(bod.innerHTML)
})
let button = document.querySelector('button');
button.addEventListener('click',(ev)=>{
    let rowInput=document.querySelector('[name="row"]').value
    let columnInput=document.querySelector('[name="column"]').value
    ev.preventDefault();
    console.log(rowInput,columnInput)
})
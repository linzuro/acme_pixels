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
    let rowInput=parseInt(document.querySelector('[name="row"]').value)
    let columnInput=parseInt(document.querySelector('[name="column"]').value)
    let table = document.querySelector('tbody')
    ev.preventDefault();
    table.innerHTML=""
    for (let i = 0; i < rowInput; i++){
        table.innerHTML += '<tr>'
        for (let j = 0; j < columnInput; j++){
            let tr = document.querySelectorAll('tr')[i]
            tr.innerHTML += '<td></td>'     
        }
        //table.innerHTML += '</tr>'
    }

    table.style.width=rowInput*100+rowInput
    let cells = [...document.querySelectorAll("td")]
    cells.forEach((elem)=>{
        elem.style.width="25%";
    })
    

})

let colorGrid = document.querySelector('.colorpicker')
document.querySelectorAll('.colorblock')[0].classList.add("selected")
colorGrid.addEventListener('click',(ev)=>{
    const target=ev.target
    const current = colorGrid.querySelector(".selected")
    current.classList.remove('selected')
    target.classList.add('selected')
})

let gridCells=document.querySelector("table")
gridCells.addEventListener('click',(ev)=>{
    const target=ev.target;
    if(target.style.backgroundColor===colorGrid.querySelector(".selected").style.backgroundColor){
        target.style.backgroundColor="#FFFFFF";
    }else{
        target.style.backgroundColor=colorGrid.querySelector(".selected").style.backgroundColor
    }
    
})
let colSize = document.querySelectorAll('td').length / document.querySelectorAll('tr').length
let rowSize = document.querySelectorAll('tr').length
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
    let table = document.querySelector('table')
    ev.preventDefault();
    for (let i = 0; i < rowInput; i++){
        table.innerHTML += '<tr>'
        console.log(table.innerHTML)

        for (let j = 0; j < columnInput; j++){
            table.innerHTML += '<td></td>'     

        }
        table.innerHTML += '</tr>'
    }

    

})

let colSize = document.querySelectorAll('td').length / document.querySelectorAll('tr').length

let rowSize = document.querySelectorAll('tr').length
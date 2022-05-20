
const inp = prompt('son kiriting');

if(inp == ''){
    alert('Siz xech narsa kiritmadingiz,\Son kiriting!')
}
else if(isNaN(inp)){
    alert('Harf emas Son kiriting')
}
else if(inp % 2 === 0){
    alert('Juft son')
}
else{
    alert('Toq son')
}
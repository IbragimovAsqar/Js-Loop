const son=prompt('son kiriting');
const daraja=prompt('darajani kiriting');
if(son==''|| isNaN(son)||daraja==''||isNaN(daraja)){
    alert('Xatolik');
}
else{
    alert(son**daraja);
}
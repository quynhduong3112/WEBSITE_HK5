function congSanpham(){
    var a = document.getElementById('chitiet__product--input').value;
    var cong = ++a;
    document.getElementById('chitiet__product--input').value = cong;
}
function truSanpham(){
    var a = document.getElementById('chitiet__product--input').value;
    var tru = --a;
    if(tru < 1){
        document.getElementById('chitiet__product--input').value = 1;
    }
    else
    document.getElementById('chitiet__product--input').value = tru;
}
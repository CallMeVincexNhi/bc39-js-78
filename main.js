function getEle(params) {
    return document.getElementById(params)
}

var array = []

getEle('btnNhapMang').onclick = function(){
    var phanTuMang = getEle('phanTuMang').value*1;
    array.push(phanTuMang) ;
    getEle('infoArray').innerHTML = array;
}

// phần chọn chức năng 

getEle('MenuChucNang').onchange = function(){
    var chucNang = getEle('MenuChucNang').value;
    var content = "";
    if(chucNang === "1"){
        // Tính tổng số dương
        content += ' <button class="btn btn-danger"  onclick="tinhTongSoDuong()" >Tính tổng</button>'; 
        content += '<div class="alert alert-success mt-3">';
        content +=  '  tổng các số dương là:' ;
        content += ' <span id="tongSoDuong"></span></div>';
    }else if(chucNang === "2"){
        // Đếm số dương 
        content += ' <button class="btn btn-danger"  onclick="demSoDuong()" >Đếm</button>'
        content += '<div class="alert alert-success mt-3">Số lượng số dương trong mảng là: <span id="sLSoDuong"></span> </div> '
    }else if(chucNang === '3'){
        // tìm số nhỏ nhất 
        content = ' <button class="btn btn-danger"  onclick="timSoNhoNhat()" >Tìm</button>'
        content += '<div class="alert alert-success mt-3">Số nhỏ nhất trong mảng là: <span id="soNhoNhat"></span> </div> '
    }else if(chucNang === "4"){
        // tìm số lớn nhất 
        content = ' <button class="btn btn-danger"  onclick="timSoDuongNhoNhat()" >Tìm</button>'
        content += '<div class="alert alert-success mt-3">Số dương nhỏ nhất trong mảng là: <span id="soDuongNhoNhat"></span> </div> '
    }else if(chucNang === "5"){
        // tìm số chẵn cuối 
        content = ' <button class="btn btn-danger"  onclick="timSoChanCuoiCung()" >Tìm</button>'
        content += '<div class="alert alert-success mt-3">Số chẵn cuối cùng trong mảng là: <span id="soChanCuoiCung"></span> </div> '
    }else if(chucNang === "6"){

        content += '<input type="text" class="form-control mt-2" placeholder="Vị trí thứ nhất" id="viTri1">'
        content += '<input type="text" class="form-control mt-2" placeholder="Vị trí thứ hai" id="viTri2">'
        content += '<button class="btn btn-danger mt-2" onclick="doiViTri()">Đổi</button>'
        content += '<div class="alert alert-success mt-3">Mảng sau khi đổi vị trí là: <span id="mangDoiViTri"></span></div>'
    }else if(chucNang === "7"){
        // sắp xếp mảng 
        content += ' <button class="btn btn-danger"  onclick="sapXepMang()" >Sắp Xếp</button>'
        content += '<div class="alert alert-success mt-3">Mảng sau khi sắp xếp là: <span id="mangSapXep"></span> </div> '
    }else if(chucNang === "8"){
        // tìm nguyên số còn lại 
        content += ' <button class="btn btn-danger"  onclick="timSoNguyenTo()" >Tìm</button>'
        content += '<div class="alert alert-success mt-3">Số nguyên tố đầu tiên trong mảng là: <span id="soNguyenTo"></span> </div> '
    }

    getEle('infoChucNang').innerHTML = content;
}

// tính số dương tổng 

function tinhTongSoDuong (){

    var tong = 0;
    for(var i=0;i<array.length;i++){
        if(array[i] > 0){
            tong += array[i];
        }
    }
    getEle('tongSoDuong').innerHTML = tong;
}

// đếm số dương 

function demSoDuong(){
    var count = 0 ;
    for(var i=0;i<array.length;i++){
        if(array[i] > 0){
            count += 1;
        }
    }
    getEle('sLSoDuong').innerHTML = count;
}

// tìm số có giá trị nhỏ nhất 


function timSoNhoNhat(){
    var min = array[0];
    for(var i = 1; i< array.length;  i++){
        if(min >  array[i]){
            min = array[i];
        }
    }
    getEle('soNhoNhat').innerHTML = min;
}

// tìm số dương nhỏ nhất 

function timSoDuongNhoNhat()    {
    var arr2 = []
    for(var i = 0; i<array.length; i++){
        if(array[i] > 0){
            arr2.push(array[i])
        }
    }
    if( arr2.length === 0 ){
        getEle('soDuongNhoNhat').innerHTML = "Không có số dương trong mảng"
    } else{
        var min = arr2[0]
        for(var i = 1; i<arr2.length; i++){
            if(min > arr2[i])
                min = arr2[i]
        }
        getEle('soDuongNhoNhat').innerHTML = min;
    }
}

// tìm số chãn cuối cùng

function timSoChanCuoiCung(){
    var lastEven = -1;
    for(var i = array.length - 1; i >= 0; i--){
        if(array[i]%2 === 0){
            lastEven = array[i]
            break
        }
    }
    getEle('soChanCuoiCung').innerHTML = lastEven;
}

// đổi vị trí 

function doiViTri(){
    var arr2 = array;
    var viTri1 = getEle('viTri1').value*1;
    var viTri2 = getEle('viTri2').value*1;

    var temp = arr2[viTri1];
    arr2[viTri1] = arr2 [viTri2];
    arr2[viTri2] = temp;

    getEle('mangDoiViTri').innerHTML = arr2;
}

// tìm số nguyên tố 


function timSoNguyenTo(){
    var soNguyenTo = -1;
    for(var i =0; i<array.length; i++){
        var count = 0;
        if(array[i] < 2){
            continue;
        }
        for(var j = 2; j<= Math.sqrt(array[i]); j ++){
            if(array[i]%j === 0){
                count +=1
                break
            }
        }
        if(count === 0){
            soNguyenTo = array[i];
            break
        }
    }
    getEle('soNguyenTo').innerHTML = soNguyenTo;
}   

// sắp xếp mảng 

function sapXepMang(){
    var arr2 = array;
    for(var i = 0; i<arr2.length; i++){
        
        for(var j = i + 1; j < arr2.length; j++){
            if(arr2[i] > arr2[j]){
                var temp = arr2[i]
                arr2[i] = arr2 [j]
                arr2[j] = temp
            }
        }
    }
    getEle('mangSapXep').innerHTML = arr2
}






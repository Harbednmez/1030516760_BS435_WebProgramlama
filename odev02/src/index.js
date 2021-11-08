var tahmin=2;
var disabled=false;
var kedi;
export function displayKart(value){
    if(disabled){
        confirm('Oyun sona erdi yeniden başlamak ister misiniz ? ') ? location.reload() : null;
        return;
    }
    //document.getElementById("img_0").src=`./img/${selected_image}`
    if (parseInt(kedi) === parseInt(value)) { //kedi kartı seçilirse
        document.getElementById(`img${value}`).src = "images/kedi.png"; 
        document.getElementById('kazandiId').style.display = 'block'; //kazandiId için tanımladığımız mesaj gösterilecek
        document.getElementById('alanId').style.display = 'none'; 
        disabled = true;
    } else {
        document.getElementById(`img${value}`).src = "images/köpek.png"; //köpek kartı seçilirse
        if (tahmin === 1) {
            document.getElementById('yenildiId').style.display = 'block'; //yenildiId için tanımladığımız mesaj gösterilecek
            document.getElementById('alanId').style.display = 'none';
            disabled = true;
            return;
        }
    }
        tahmin--;
}
function getRandomInt(max) { //kediyi rastgele yerleştirmek için kullanıldı.
    return Math.floor(Math.random() * Math.floor(max));
}

export function YeniOyun(){ //yeni oyun oluşturmak için kullanıldı
    tahmin = 2;
    kedi = getRandomInt(3);
    disabled = false;
    for (let bg = 0; bg< 3; bg++) { // her yeni oyunda üç kart için default arkaplan oluşturuldu.
        document.getElementById(`img${bg}`).src = "images/kart.png"; 
    }
} //

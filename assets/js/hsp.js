let sayı1 = Number(prompt("1. sayıyı girin:"));
let sayı2 = Number(prompt("2. sayıyı girin:"));
let işlem = prompt("Yapmak istediğiniz işlemi girin (+, -, *, /):");

let sonuç;

if (işlem === "+") 
{ sonuç = sayı1 + sayı2; } 
else if (işlem === "-") { sonuç = sayı1 - sayı2; } 
else if (işlem === "*") { sonuç = sayı1 * sayı2; } 
else if (işlem === "/") {
 if (sayı2 !== 0) { sonuç = sayı1 / sayı2; } 

else { alert("Hata: Bir sayı 0'a bölünemez."); }
} 
else { alert("Geçersiz işlem seçtiniz."); }

if (sonuç !== undefined) 
{alert("İşlem sonucunuz " + sonuç + " 'tur.");}
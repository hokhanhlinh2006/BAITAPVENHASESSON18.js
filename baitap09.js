
let gio = parseInt(prompt("Nhập giờ (0-23):"));
let phut = parseInt(prompt("Nhập phút (0-59):"));
let giay = parseInt(prompt("Nhập giây (0-59):"));
let suffix = gio >= 12 ? "PM" : "AM";
gio = gio % 12;
gio = gio === 0 ? 12 : gio; 
let giochuan = gio.toString().padStart(2, "0");
let phutchuan = phut.toString().padStart(2, "0");
let giaychuan = giay.toString().padStart(2, "0");
let ketqua = `${giochuan}:${phutchuan}:${giaychuan} ${suffix}`;
alert(`Thời gian định dạng 12 giờ: ${ketqua}`);
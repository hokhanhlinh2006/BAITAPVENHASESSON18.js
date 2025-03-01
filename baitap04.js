let so = parseInt(prompt("Nhập một số từ 0 đến 9:"));
let cachdoc = [
    "Số Không" ,"Số Một", "Số Hai", "Số Ba", "Số Bốn",
    "Số Năm", "Số Sáu", "Số Bảy", "Số Tám", "Số Chín"
];
if (so >= 0 && so <= 9) {
    document.write(`${cachdoc[so]}`);
} else {
    document.write("Vui lòng nhập số từ 0 đến 9");
}

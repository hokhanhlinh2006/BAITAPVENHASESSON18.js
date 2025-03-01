let namkinhnghiem = parseFloat(prompt("Nhập số năm kinh nghiệm của nhân viên:"));
let xeploai;
if (namkinhnghiem < 1) {
    xeploai = "Mới vào nghề";
} else if (namkinhnghiem >= 1 && namkinhnghiem <= 3) {
    xeploai = "Nhân viên có kinh nghiệm";
} else if (namkinhnghiem >= 4 && namkinhnghiem <= 6) {
    xeploai = "Chuyên viên";
} else {
    xeploai = "Quản lý";
}
document.write(`<h2>Xếp loại: ${xeploai}</h2>`);
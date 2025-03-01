let toan = parseFloat(prompt("Nhập điểm Toán:"));
let van = parseFloat(prompt("Nhập điểm Văn:"));
let anh = parseFloat(prompt("Nhập điểm Anh:"));
let diem_tb = (toan + van + anh) / 3;
let xep_loai;
if (diem_tb >= 8.0) {
    xep_loai = "Giỏi";
} else if (diem_tb >= 6.5) {
    xep_loai = "Khá";
} else if (diem_tb >= 5.0) {
    xep_loai = "Trung bình";
} else {
    xep_loai = "Yếu";
}
document.write(`Điểm trung bình của bạn là: ${diem_tb.toFixed(2)}`);
document.write(`Xếp loại học lực: ${xep_loai}`);
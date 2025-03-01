let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));
let pheptoan = prompt("Mời bạn nhập vào phép tính (+, -, *, /)");
let ketqua;
if (pheptoan === "+") {
    ketQua = a + b;
} else if (pheptoan === "-") {
    ketQua = a - b;
} else if (pheptoan === "*") {
    ketQua = a * b;
} else if (pheptoan === "/") {
    if (b !== 0) {
        ketqua = a / b;
    } else {
        ketqua = "Lỗi: Không thể chia cho 0!";
    }
} else {
    ketqua = "Lỗi: Phép toán không hợp lệ!";
}
alert(`Kết quả của phép tính: ${a} ${pheptoan} ${b} = ${ketqua}`);
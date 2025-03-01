let a = parseFloat(prompt("Nhập cạnh a:"));
let b = parseFloat(prompt("Nhập cạnh b:"));
let c = parseFloat(prompt("Nhập cạnh c:"));
if (a + b > c && a + c > b && b + c > a) {
    let loaitamgiac;
    if (a === b && b === c) {
        loaitamgiac = "Tam giác đều";
    } else if (a === b || a === c || b === c) {
        loaitamgiac = "Tam giác cân";
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        loaitamgiac = "Tam giác vuông";
    } else {
        loaitamgiac = "Tam giác thường";
    }

    document.write(`Đây là ${loaitamgiac}.`);
} else {
    document.write("Ba cạnh không tạo thành tam giác hợp lệ.");
}
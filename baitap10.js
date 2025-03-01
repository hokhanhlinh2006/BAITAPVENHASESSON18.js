function docso(n) {
    if (n < 0 || n > 999) return "Số không hợp lệ!";
    let dv = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    let ch = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];  
    let [tram, chuc, donvi] = [Math.floor(n / 100), Math.floor(n % 100 / 10), n % 10];
    let kq = tram ? dv[tram] + " trăm" + (chuc || donvi ? " " : "") : "";
    kq += chuc ? ch[chuc] : (donvi ? " linh" : "");
    kq += donvi ? (chuc > 0 && donvi === 5 ? " lăm" : " " + dv[donvi]) : "";
    return kq.trim();
}
let soNhap = parseInt(prompt("Nhập số (0-999):"));
alert(docso(soNhap));
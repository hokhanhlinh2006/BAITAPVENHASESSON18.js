
let soNguyen = parseInt(prompt("Nhập một số nguyên:"));

// Kiểm tra số chẵn hay lẻ
if (soNguyen % 2 === 0) {
    document.write(`<h2>${soNguyen} là số chẵn.</h2>`);
} else {
    document.write(`<h2>${soNguyen} là số lẻ.</h2>`);
}

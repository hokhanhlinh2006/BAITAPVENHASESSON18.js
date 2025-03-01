let nam = parseInt(prompt("Nhập một năm bất kỳ:"));
let ketqua;
if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
    ketqua = `${nam} là năm nhuận.`;
} else {
    ketqua = `${nam} không phải là năm nhuận.`;
}
document.write(`<h2>${ketqua}</h2>`);

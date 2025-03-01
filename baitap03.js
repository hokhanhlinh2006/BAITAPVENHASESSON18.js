let usename=prompt("Bạn hãy nhập vào");
if(usename=="ADMIN"){
        let pass=prompt("Nhập mật khẩu:");
        if (pass === "TheMaster"){
            document.write("Welcome");
        } else if (pass === ""){
            document.write("Cancelled");
        } else {
            document.write("Wrong password");
        }
} else if (usename === null || usename === ""){
    document.write("Cancelled");
} else {
    document.write("I Don’t know you");
}

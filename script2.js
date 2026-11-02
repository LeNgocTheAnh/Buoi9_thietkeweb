// ==========================================
// BÀI 1: Bảng cửu chương 7
// ==========================================
function bai1() {
    console.clear();
    console.log("--- BÀI 1: BẢNG CỬU CHƯƠNG 7 ---");
    let resultText = "Bảng cửu chương 7:\n";
    
    for (let i = 1; i <= 10; i++) {
        let tich = 7 * i;
        let dong = `7 x ${i} = ${tich}`;
        console.log(dong);
        resultText += dong + "\n";
    }
    alert(resultText);
}

// ==========================================
// BÀI 2: Tính tổng dãy số từ 1 đến n
// ==========================================
function tinhTong(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += i;
    }
    return tong;
}

function bai2() {
    console.clear();
    console.log("--- BÀI 2: TÍNH TỔNG DÃY SỐ ---");
    let input = prompt("Bài 2: Nhập số nguyên n:", "10");
    let n = parseInt(input);
    
    if (isNaN(n) || n < 1) {
        console.log("Vui lòng nhập số nguyên dương hợp lệ!");
        alert("Vui lòng nhập số nguyên dương hợp lệ!");
        return;
    }
    
    let ketQua = tinhTong(n);
    let msg = `Tổng các số từ 1 đến ${n} là: ${ketQua}`;
    console.log(msg);
    alert(msg);
}

// ==========================================
// BÀI 3: Kiểm tra số nguyên tố cơ bản
// ==========================================
function kiemTraSoNguyenTo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function bai3() {
    console.clear();
    console.log("--- BÀI 3: KIỂM TRA SỐ NGUYÊN TỐ ---");
    let input = prompt("Bài 3: Nhập một số cần kiểm tra nguyên tố:", "11");
    let num = parseInt(input);
    
    if (isNaN(num)) {
        console.log("Vui lòng nhập vào một số nguyên hợp lệ!");
        alert("Vui lòng nhập vào một số nguyên hợp lệ!");
        return;
    }
    
    if (kiemTraSoNguyenTo(num)) {
        console.log(`${num} LÀ số nguyên tố.`);
        alert(`${num} LÀ số nguyên tố.`);
    } else {
        console.log(`${num} KHÔNG PHẢI là số nguyên tố.`);
        alert(`${num} KHÔNG PHẢI là số nguyên tố.`);
    }
}

// ==========================================
// BÀI 4: Máy tính cá nhân (Calculator Function)
// ==========================================
function calculator(so1, so2, phepTinh) {
    switch (phepTinh) {
        case '+':
            return so1 + so2;
        case '-':
            return so1 - so2;
        case '*':
            return so1 * so2;
        case '/':
            if (so2 === 0) return "Lỗi: Không thể chia cho 0!";
            return so1 / so2;
        default:
            return "Phép tính không hợp lệ! (Dùng +, -, *, /)";
    }
}

function bai4() {
    console.clear();
    console.log("--- BÀI 4: MÁY TÍNH CÁ NHÂN ---");
    let so1 = parseFloat(prompt("Bài 4: Nhập số thứ nhất:", "10"));
    let phepTinh = prompt("Bài 4: Nhập phép tính (+, -, *, /):", "+");
    let so2 = parseFloat(prompt("Bài 4: Nhập số thứ hai:", "5"));
    
    if (isNaN(so1) || isNaN(so2)) {
        console.log("Giá trị số nhập vào không hợp lệ!");
        alert("Giá trị số nhập vào không hợp lệ!");
        return;
    }
    
    let ketQua = calculator(so1, so2, phepTinh);
    let msg = `${so1} ${phepTinh} ${so2} = ${ketQua}`;
    console.log(msg);
    alert(msg);
}

// ==========================================
// BÀI 5: Tìm số lớn nhất trong 3 số
// ==========================================
function timMax(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

function bai5() {
    console.clear();
    console.log("--- BÀI 5: TÌM SỐ LỚN NHẤT TRONG 3 SỐ ---");
    let a = parseFloat(prompt("Bài 5: Nhập số a:", "5"));
    let b = parseFloat(prompt("Bài 5: Nhập số b:", "12"));
    let c = parseFloat(prompt("Bài 5: Nhập số c:", "9"));
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Vui lòng nhập đầy đủ 3 số hợp lệ!");
        alert("Vui lòng nhập đầy đủ 3 số hợp lệ!");
        return;
    }
    
    let soLonNhat = timMax(a, b, c);
    let msg = `Trong 3 số (${a}, ${b}, ${c}), số lớn nhất là: ${soLonNhat}`;
    console.log(msg);
    alert(msg);
}

// ==========================================
// BÀI 6: Vòng lặp "Chào hỏi"
// ==========================================
function bai6() {
    console.clear();
    console.log("--- BÀI 6: VÒNG LẶP CHÀO HỎI THÀNH VIÊN NHÓM ---");
    
    // Tạo mảng chứa 5 tên thành viên trong nhóm
    let danhSachNhom = ["Tiến", "Huy", "Nam", "Lan", "Phương"];
    let logSummary = "Danh sách lời chào:\n";
    
    danhSachNhom.forEach((ten, index) => {
        let loiChao = `Xin chào bạn ${ten}! (Thành viên số ${index + 1})`;
        console.log(loiChao);
        logSummary += loiChao + "\n";
    });
    
    alert(logSummary);
}
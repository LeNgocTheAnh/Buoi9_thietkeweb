// =========================================================================
// HOẠT ĐỘNG 1: "The Counting Machine" - Máy đếm tự động (Vòng lặp for)
// =========================================================================
function hoatDong1() {
    console.clear();
    console.log("=== HOẠT ĐỘNG 1: THE COUNTING MACHINE ===");

    // 1. In dãy số từ 1 đến 100
    console.log("--- Dãy số từ 1 đến 100 ---");
    let daySo = "";
    for (let i = 1; i <= 100; i++) {
        daySo += i + (i < 100 ? ", " : "");
    }
    console.log(daySo);

    // 2. Chỉ in các số chẵn từ 1 đến 100
    console.log("\n--- Dãy số CHẴN từ 1 đến 100 ---");
    let daySoChan = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            daySoChan += i + (i < 100 ? ", " : "");
        }
    }
    console.log(daySoChan);

    // 3. Vibe Coding AI Explainer: Giải thích 3 thành phần (khởi tạo; điều kiện; bước nhảy)
    console.log("\n--- VIBE CODING EXPLAINER: GIẢI THÍCH VÒNG LẶP FOR ---");
    console.log("Cú pháp: for (khởi tạo; điều kiện; bước nhảy)");
    console.log("1. Khởi tạo (let i = 1): Chạy ĐÚNG 1 LẦN duy nhất khi bắt đầu vòng lặp để tạo biến đếm.");
    console.log("2. Điều kiện (i <= 100): Kiểm tra TRƯỚC MỖI VÒNG LẶP. Nếu true thì thực thi code bên trong, nếu false thì thoát vòng lặp.");
    console.log("3. Bước nhảy (i++ hoặc i += 2): Thực thi SAU MỖI VÒNG LẶP để cập nhật biến đếm, giúp vòng lặp tiến dần tới điểm dừng.");

    alert("Hoạt động 1 hoàn tất! Xem danh sách số và giải thích chi tiết tại Console (F12).");
}

// =========================================================================
// HOẠT ĐỘNG 2: "Function Factory" - Nhà máy xử lý dữ liệu (Xây dựng Hàm)
// =========================================================================

// Khai báo hàm tính diện tích hình chữ nhật
function tinhDienTich(dai, rong) {
    return dai * rong;
}

// Khai báo hàm chào và tính tuổi theo Prompt mẫu
function chaoVaTinhTuoi(ten, namSinh) {
    let namHienTai = new Date().getFullYear();
    let tuoi = namHienTai - namSinh;
    return `Chào ${ten}, bạn hiện tại ${tuoi} tuổi.`;
}

function hoatDong2() {
    console.clear();
    console.log("=== HOẠT ĐỘNG 2: FUNCTION FACTORY ===");

    // 1. Gọi hàm tinhDienTich 3 lần với các tham số khác nhau
    console.log("--- 1. Tính diện tích hình chữ nhật ---");
    let dt1 = tinhDienTich(5, 3);
    let dt2 = tinhDienTich(10, 4.5);
    let dt3 = tinhDienTich(12, 8);

    console.log(`Lần 1 (dài 5, rộng 3): Diện tích = ${dt1}`);
    console.log(`Lần 2 (dài 10, rộng 4.5): Diện tích = ${dt2}`);
    console.log(`Lần 3 (dài 12, rộng 8): Diện tích = ${dt3}`);

    // 2. Chạy hàm chào & tính tuổi theo Prompt mẫu
    console.log("\n--- 2. Hàm chào và tính tuổi (Prompt mẫu) ---");
    let tenNhap = prompt("Hoạt động 2 - Nhập tên của bạn:", "Nguyễn Văn A");
    let namSinhNhap = parseInt(prompt("Hoạt động 2 - Nhập năm sinh của bạn:", "2005"));

    if (tenNhap && !isNaN(namSinhNhap)) {
        let thongBao = chaoVaTinhTuoi(tenNhap, namSinhNhap);
        console.log(thongBao);
        alert(thongBao);
    } else {
        console.log("Thông tin nhập vào không hợp lệ!");
    }
}

// =========================================================================
// HOẠT ĐỘNG 3: "Refactoring Challenge" - Tái cấu trúc mã nguồn tính thuế
// =========================================================================

// Hàm đóng gói logic tính thuế thu nhập cá nhân (Refactored Code)
function tinhThueThuNhap(luong) {
    let thue = 0;
    if (luong > 20000000) {
        thue = luong * 0.2; // Thuế 20% cho mức lương trên 20 triệu
    } else if (luong > 10000000) {
        thue = luong * 0.1; // Thuế 10% cho mức lương từ 10 - 20 triệu
    } else {
        thue = 0; // Dưới 10 triệu không tính thuế
    }
    return thue;
}

function hoatDong3() {
    console.clear();
    console.log("=== HOẠT ĐỘNG 3: REFACTORING CHALLENGE ===");

    console.log("--- Mã chưa refactor (Code lặp lại ban đầu): ---");
    console.log(`
    // Lương người 1: 25tr -> if (luong1 > 20tr) thue1 = luong1 * 0.2 ...
    // Lương người 2: 15tr -> if (luong2 > 20tr) thue2 = luong2 * 0.2 ...
    // Lương người 3: 8tr  -> if (luong3 > 20tr) thue3 = luong3 * 0.2 ...
    `);

    console.log("--- Mã SAU KHI REFACTOR (Tái sử dụng bằng Hàm): ---");
    let danhSachLuong = [25000000, 15000000, 8000000, 30000000];

    danhSachLuong.forEach((luong, index) => {
        let thue = tinhThueThuNhap(luong);
        let thuNhapRong = luong - thue;
        console.log(`Nhân viên ${index + 1}: Lương = ${luong.toLocaleString('vi-VN')} VNĐ | Thuế phải nộp = ${thue.toLocaleString('vi-VN')} VNĐ | Thực nhận = ${thuNhapRong.toLocaleString('vi-VN')} VNĐ`);
    });

    alert("Hoạt động 3 hoàn tất! Kiểm tra Console (F12) để xem mã refactor tính thuế thu nhập.");
}
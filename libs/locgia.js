const locGia=(tag)=>{
    dsTmp = [...dsFood]; // Tạo một bản sao đầy đủ của dsFood
    dsTmp.sort((a, b) => a.Don_gia_Ban - b.Don_gia_Ban);

    console.log("Before sorting:", dsTmp);

    if (dsTmp.length === 0) {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
        return;
    }

    let giaMin = parseInt(tag.min);
    let giaMax = parseInt(tag.max);
    let step = 1000;
    let selectedPrice = parseInt(tag.value);

    tag.setAttribute("min", giaMin);
    tag.setAttribute("max", giaMax);
    tag.setAttribute("step", step);

    document.getElementById("lblLocgia").innerHTML = `${Number(tag.value).toLocaleString()}<sup>đ</sup>`;

    console.log("giaMin (kéo):", giaMin);
    console.log("giaMax (kéo):", giaMax);
    console.log("tag.value (kéo):", tag.value);

    console.log("First product price:", dsTmp[0].Don_gia_Ban);
    console.log("Last product price:", dsTmp[dsTmp.length - 1].Don_gia_Ban);

    hienThiSanPham();
}

const hienThiSanPham = (giaHienTai) => {
    // Lấy danh sách sản phẩm từ điểm min đến điểm max
    // let sanPhamButton = document.getElementById("sanPhamContainer");
    // sanPhamButton.innerHTML = ""; // Xóa nội dung hiện tại

    // // Tính toán số sản phẩm phù hợp với giá hiện tại
    // let soSanPham = 9; // Số sản phẩm bạn muốn hiển thị
    // let giaMin = parseInt(document.getElementById("locGia").min);
    // let giaMax = parseInt(document.getElementById("locGia").max);

    // for (let i = 0; i < soSanPham; i++) {
    //     let giaSanPham = giaMin + i * ((giaMax - giaMin) / (soSanPham - 1));

    //     // Sử dụng tham số giaHienTai để lọc sản phẩm
    //     if (giaSanPham <= giaHienTai) {
    //         // Tạo một sản phẩm mới và thêm vào danh sách
    //         let sanPhamElement = document.createElement("div");
    //         sanPhamElement.innerHTML = "Sản phẩm " + (i + 1) + ": " + giaSanPham + "<sup>đ</sup>";
    //         sanPhamButton.appendChild(sanPhamElement);
    //     }
    // }

    // Lấy danh sách sản phẩm từ điểm min đến điểm max
    var sanPhamContainer = document.getElementById("sanPhamContainer");
    sanPhamContainer.innerHTML = ""; // Xóa nội dung hiện tại

    // Tìm các sản phẩm nằm trong khoảng giá từ điểm min đến điểm max
    var giaMin = parseInt(document.getElementById("locGia").min);
    var giaMax = parseInt(document.getElementById("locGia").max);

    dsTmp.filter(sanPham => sanPham.Don_gia_Ban >= giaMin && sanPham.Don_gia_Ban <= giaMax)
         .forEach(sanPham => {
            // Tạo một sản phẩm mới và thêm vào danh sách
            var sanPhamElement = document.createElement("div");
            sanPhamElement.innerHTML = "Sản phẩm: " + sanPham.Don_gia_Ban + "<sup>đ</sup>";
            sanPhamContainer.appendChild(sanPhamElement);
        });
}

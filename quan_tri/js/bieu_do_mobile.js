let dsMobile = [];
let dsHangSX = [];
let chuDe = [];
let data = [{
    name: 'Loại Sản Phẩm',
    data: [],
    color: randomColor()
}]
apiDienthoai().then((result) => {
    dsMobile = result;
    taoHangSX();
    dsHangSX.forEach(x => {
        chuDe.push(x.Ten);
        let tongSoSanpham = dsMobile.filter(mb => mb.Nhom.Ma_so == x.Ma_so).length;
        data[0].data.push(tongSoSanpham)
    })
    //console.log(dsMobile);
    // console.log(dsMobile);
    //console.log(data);
    taoBaocao();
})

const taoHangSX = () => {
    dsHangSX = Array.from(new Set(dsMobile.map(x => x.Nhom.Ma_so))).map(Ma_so => {
        nhom = {
            Ma_so: Ma_so,
            Ten: dsMobile.find(x => x.Nhom.Ma_so == Ma_so).Nhom.Ten.toUpperCase()
        }
        return nhom
    })
}

const taoBaocao=()=>{
    Highcharts.setOptions({
        lang: {
            numericSymbols: [` Ngàn`, ` Triệu`],
            numericSymbolMagnitude: 1000,
            decimalPoint: ',',  ///phân cách thập phân
            thousandsSep: '.' ///hàng ngàn
        },
        chart: {
            style: {
                fontFamily: `tahoma`, /// chỉnh font cho chữ thống dc đúng
                fontSize: 16
            }
        }
    })
    
    
    Highcharts.chart('Th_Bieu_do_Mobile', {
        chart: {
            type: 'column' // column, bar, line
        },
        title: {
            text: 'Tieu Phi Shop 289'
        },
        subtitle: {
            text: ' Thống kê Mobile theo Nhà Sản xuất'
        },
        xAxis: {
            categories: chuDe
        },
        yAxis: {
            title: {
                text: 'Số Lượng'
            }
        },

        series: data
    });
}
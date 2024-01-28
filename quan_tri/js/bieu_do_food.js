let dsFood = [];
let dsHangSX_Food = [];
let chuDe_Food = [];
let data_Food = [{
    name: 'Loại Sản Phẩm',
    data: [],
    color: randomColor()
}]
apiMathang().then((result) => {
    dsFood = result;
    taoHangSX_Food();
    dsHangSX_Food.forEach(x => {
        chuDe_Food.push(x.Ten);
        let tongSoSanpham = dsFood.filter(fo => fo.Nhom.Ma_so == x.Ma_so).length;
        data_Food[0].data.push(tongSoSanpham)
    })
    //console.log(dsFood);
    //console.log(data_Food);
    //console.log(chuDe_Food);
    taoBaocao_Food();
    
})

const taoHangSX_Food = () => {
    dsHangSX_Food = Array.from(new Set(dsFood.map(x => x.Nhom.Ma_so))).map(Ma_so => {
        nhom = {
            Ma_so: Ma_so,
            Ten: dsFood.find(x => x.Nhom.Ma_so == Ma_so).Nhom.Ten.toUpperCase()
        }
        return nhom
    })
}

const taoBaocao_Food=()=>{
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
    
//     console.log("Chu de Food:", chuDe_Food);
// console.log("Data Food:", data_Food);

    Highcharts.chart('Th_Bieu_do_Food', {
        chart: {
            type: 'column' // column, bar, line
        },
        title: {
            text: 'Tieu Phi Shop 289'
        },
        subtitle: {
            text: ' Thống kê Food theo Loại Sản Phẩm'
        },
        xAxis: {
            categories: chuDe_Food
        },
        yAxis: {
            title: {
                text: 'Số Lượng'
            }
        },

        series: data_Food
    });
}




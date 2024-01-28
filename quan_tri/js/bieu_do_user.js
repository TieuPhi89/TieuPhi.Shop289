let dsUser = [];
let dsNhomUser = [];
let chuDeUser = [];
let dataUser = [{
    name: 'Nhân Sự',
    data: [],
    color: randomColor()
}]
apiNguoidung().then((result) => {
    dsUser = result;
    taoNhomUser();
    dsNhomUser.forEach(x => {
        chuDeUser.push(x.Ten);
        let tongSoUser = dsUser.filter(nd => nd.Nhom_Nguoi_dung.Ma_so == x.Ma_so).length;
        dataUser[0].data.push(tongSoUser)
    })
    console.log(chuDeUser);
    console.log(dsUser);
    console.log(dsUser.length);
     console.log(dataUser);
    taoBaocao_User();
})

const taoNhomUser = () => {
    dsNhomUser = Array.from(new Set(dsUser.map(x => x.Nhom_Nguoi_dung.Ma_so))).map(Ma_so => {
        nhom = {
            Ma_so: Ma_so,
            Ten: dsUser.find(x => x.Nhom_Nguoi_dung.Ma_so == Ma_so).Nhom_Nguoi_dung.Ten.toUpperCase()
        }
        return nhom
    })
    console.log(dsNhomUser)
}

const taoBaocao_User=()=>{
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
    


    Highcharts.chart('Th_Bieu_do_User', {
        chart: {
            type: 'line' // column, bar, line
        },
        title: {
            text: 'Tieu Phi Shop 289'
        },
        subtitle: {
            text: ' Thống kê Nhân Sự Shop 289'
        },
        xAxis: {
            categories: chuDeUser
        },
        yAxis: {
            title: {
                text: 'Số Nhân Sự'
            }
        },

        series: dataUser
    });
}




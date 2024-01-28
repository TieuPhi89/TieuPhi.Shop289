let dsTivi = [];
let dsHangSX_Tivi = [];
let chuDe_Tivi = [];

let data_Tivi = [{
    name: '',
    data: [],
    color: []
}]

apiTivi().then((result)=>{
    dsTivi = result;
    taoNhom();
    let colors = random_Color(dsHangSX_Tivi.length);
    dsHangSX_Tivi.forEach((item, index)=>{
        chuDe_Tivi.push(item.Ten);
        let tongsoSanPham = dsTivi.filter(tivi => tivi.Nhom.Ma_so == item.Ma_so).length;
        data_Tivi[0].data.push({y: tongsoSanPham, color:colors[index]});
    })
    TaoBaoCao();
})

const taoNhom=()=>{
    dsHangSX_Tivi = Array.from(new Set(dsTivi.map(tivi=>tivi.Nhom.Ma_so))).map((Ma_so)=>{
        nhom = {
            Ma_so: Ma_so,
            Ten: dsTivi.find(tivi => tivi.Nhom.Ma_so==Ma_so).Nhom.Ten
        }
        return nhom
    })
    return dsHangSX_Tivi;
}

const TaoBaoCao=()=>{
    Highcharts.chart('Th_Bieu_do_Tivi',{
        chart:{
            type: 'bar' // column, bar, line
        },
        title:{
            text: 'Tieu Phi Shop'
        },
        subtitle:{
            text: 'Thống Kê Tivi'
        },
        xAxis: {
            categories: chuDe_Tivi
        },
        yAxis:{
            title:{
                text: 'Số Sản Phẩm'
            }
        },
        series: data_Tivi
    });
}
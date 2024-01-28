const Dia_chi_Dich_vu = `https://tieuphihephucvu289.onrender.com`
const Dia_chi_Img=`https://res.cloudinary.com/djqfelq4l/image/upload/v1/images`;

const apiDangnhap=(nguoidung)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `Login`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(nguoidung))
    })
}


function apiTivi() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsTivi"
        Xu_ly_HTTP.open("GET", `${Dia_chi_Dich_vu}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

function apiDienthoai() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsDienthoai"
        Xu_ly_HTTP.open("GET", `${Dia_chi_Dich_vu}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

const apiDienthoaiInsert=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `ThemDienthoai`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}

const apiImageDienthoai=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `ImagesDienthoai`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}



function apiMathang() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsMathang"
        Xu_ly_HTTP.open("GET", `${Dia_chi_Dich_vu}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

function apiHocsinh() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsHocsinh"
        Xu_ly_HTTP.open("GET", `${Dia_chi_Dich_vu}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

function apiCuahang() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "Cuahang"
        Xu_ly_HTTP.open("GET", `${Dia_chi_Dich_vu}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

function apiNguoidung() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsNguoidung"
        Xu_ly_HTTP.open("GET", `${Dia_chi_Dich_vu}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
}

const  random_Color=(count)=> {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push('#' + Math.floor(Math.random()*16777215).toString(16));
    }
    return result;
}

const Dia_chi_Dich_vu='https://tieuphihephucvu289.onrender.com';
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
// =====================================API Mobile =================================================
const apiDienthoai=()=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `dsDienthoai`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send()
    })
}
// 
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
const apiDienthoaiUpdate=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `SuaDienthoai`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("PUT", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}

const apiDienthoaiDelete=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `XoaDienthoai`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("DELETE", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}
// ===================================== End API Mobile =================================================

// ===================================== API Tivi =======================================================
const apiTivi=()=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `dsTivi`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send()
    })
}
// 
const apiImageTivi=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `ImagesTivi`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}
const apiTiviInsert=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `ThemTivi`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}
const apiTiviUpdate=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `SuaTivi`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("PUT", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}

const apiTiviDelete=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `XoaTivi`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("DELETE", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}
// ===================================== End API Tivi =======================================================

// =====================================API Food ============================================================
const apiFood=()=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `dsMathang`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send()
    })
}
// 
const apiImageFood=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `ImagesFood`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}
const apiFoodInsert=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            console.log(Chuoi_JSON);
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `ThemFood`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}
const apiFoodUpdate=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `SuaFood`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("PUT", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}

const apiFoodDelete=(item)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `XoaFood`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("DELETE", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(item))
    })
}
// ===================================== End API Food ============================================================

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

const paras = document.querySelectorAll(".section_para");

document.addEventListener("scroll", ()=>{
    paras.forEach((para)=>{
        if (isInView(para)) {
            para.classList.add("section_para--visible")
        }
    })
})

isInView=(element)=>{
    const rect = element.getBoundingClientRect();
    return (rect.bottom > 0 && rect.top < (window.innerHeight - 
        150 || document.documentElement.clientHeight -150));

}
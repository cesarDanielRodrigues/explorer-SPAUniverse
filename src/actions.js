export function toogleActive(links){
    links.forEach(link=>{
        // const isActive = links.classList.contains('active')
        console.log(links.classList)
        links.forEach(link => link.classList.remove('active'))
        !isActive ? links.classList.contains('active') : null
    })
}
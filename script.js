


document.querySelector('.header__hamburger').addEventListener('click', () => {
    const header = document.querySelector('.header')
    header.classList.toggle('active')

    if(header.classList.contains('active')){
        hideScroll()
    }
    else{
        showScroll()
    }
})


const hideScroll = () =>{
    document.body.style.paddingRight = `${getScrollbarWidth()}px`
    document.body.style.overflow = 'hidden'
}

const showScroll = () =>{
    document.body.style.paddingRight = ''
    document.body.style.overflow = 'visible'
}

const getScrollbarWidth = ()=>{
    const outer = document.createElement('div')

    outer.style.position='absolute'
    outer.style.top='-9999px'
    outer.style.width='50px'
    outer.style.height='50px'
    outer.style.overflow='scroll'
    outer.style.visibility='hidden'

    document.body.appendChild(outer)
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth
    document.body.removeChild(outer)

    return scrollBarWidth
}
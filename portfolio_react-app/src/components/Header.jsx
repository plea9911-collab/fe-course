import Logo from "./header/Logo.jsx"
import MenuList from "./commons/MenuList.jsx"

export default function Header({ data }){
    const { menus } = data || {}; //data 객체가 존재하는 경우에만 구조분해할당 진행!
    
    // const menus = [
    //     {"href": "#home", "style":"header-menu-item active", "name": "Home"},
    //     {"href": "#about", "style":"header-menu-item", "name": "About"},
    //     {"href": "#skills", "style":"header-menu-item", "name": "Skills"},
    //     {"href": "#work", "style":"header-menu-item", "name": "Work"},
    //     {"href": "#testimonial", "style":"header-menu-item", "name": "Testimonial"},
    //     {"href": "#contect", "style":"header-menu-item", "name": "Contect"}
    // ]
    return(
        <header class="header">
            <Logo   img="/images/favicon.ico"
                    alt="header-logo" 
                    style="header-logo-img"
                    title="Judy"
            />
            <MenuList menus={menus} style="header-menu open" />
        {/* <button class="header-toggle"><i class="fa-solid fa-bars"></i></button> */}
    </header>
    )
}
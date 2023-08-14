import { Component, For, createSignal } from "solid-js";
import {A, useNavigate} from "@solidjs/router";
import Logo from "../../assets/img/logo.png"
import { IoCall, IoCloseOutline, IoLogoWhatsapp, IoMenuOutline } from 'solid-icons/io'
import { BiLogosFacebook } from 'solid-icons/bi'

const Nav: Component = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = createSignal(false);
    const navigate = useNavigate();
    const Links = [
        {
            id: 1,
            name: 'About',
            link: '/about'
        },
        {
            id: 2,
            name: 'Services',
            link: '/services'
        },
        {
            id: 5,
            name: 'Shop',
            link: 'https://petconcierge.shop.netcash.co.za/'
        },
        {
            id: 6,
            name: 'Contact us',
            link: '/contact'
        },
    ]

    const social = [
        {
            id:1,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="20px" height="20px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,2.25121 0.63234,4.35007 1.71094,6.15039l-1.60352,5.84961l5.97461,-1.56836c1.74732,0.99342 3.76446,1.56836 5.91797,1.56836c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.89258,9.40234c0.195,0 0.39536,-0.00119 0.56836,0.00781c0.214,0.005 0.44692,0.02067 0.66992,0.51367c0.265,0.586 0.84202,2.05608 0.91602,2.20508c0.074,0.149 0.12644,0.32453 0.02344,0.51953c-0.098,0.2 -0.14897,0.32105 -0.29297,0.49805c-0.149,0.172 -0.31227,0.38563 -0.44727,0.51563c-0.149,0.149 -0.30286,0.31238 -0.13086,0.60938c0.172,0.297 0.76934,1.27064 1.65234,2.05664c1.135,1.014 2.09263,1.32561 2.39063,1.47461c0.298,0.149 0.47058,0.12578 0.64258,-0.07422c0.177,-0.195 0.74336,-0.86411 0.94336,-1.16211c0.195,-0.298 0.39406,-0.24644 0.66406,-0.14844c0.274,0.098 1.7352,0.8178 2.0332,0.9668c0.298,0.149 0.49336,0.22275 0.56836,0.34375c0.077,0.125 0.07708,0.72006 -0.16992,1.41406c-0.247,0.693 -1.45991,1.36316 -2.00391,1.41016c-0.549,0.051 -1.06136,0.24677 -3.56836,-0.74023c-3.024,-1.191 -4.93108,-4.28828 -5.08008,-4.48828c-0.149,-0.195 -1.21094,-1.61031 -1.21094,-3.07031c0,-1.465 0.76811,-2.18247 1.03711,-2.48047c0.274,-0.298 0.59492,-0.37109 0.79492,-0.37109z"></path></g></g></svg>,
        },
        {
            id:2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="18px" height="18px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.69922,0 -23,9.60156 -23,21.5c0,6.30078 2.89844,12.19922 8,16.30078v8.80078l8.60156,-4.5c2.09766,0.59766 4.19922,0.79688 6.39844,0.79688c12.69922,0 23,-9.59766 23,-21.5c0,-11.79687 -10.30078,-21.39844 -23,-21.39844zM27.30078,30.60156l-5.80078,-6.20312l-10.80078,6.10156l12,-12.69922l5.90234,5.89844l10.5,-5.89844z"></path></g></g></svg>,
        }
    ];

    const handleMobileLink = (e: any) => {
        if(e === '/'){
            navigate('/')
            setToggleMobileMenu(false);
        }
        if(e === '/about'){
            navigate('/about')
            setToggleMobileMenu(false);
        }
        if(e === '/services'){
            navigate('/services')
            setToggleMobileMenu(false);
        }
        if(e === '/shop'){
            window.location = ('https://petconcierge.shop.netcash.co.za/') 
            setToggleMobileMenu(false);
        }
        if(e === '/contact'){
            navigate('/contact')
            setToggleMobileMenu(false);
        }
    }

    return (
        <>
            <div class="w-full bg-black flex">
                <div class="w-11/12 lg:w-10/12 text-white m-auto flex justify-between h-8 items-center">
                    <div class="flex gap-6 text-sm">
                        <div class="">
                            0730899949
                        </div>
                        <div>
                            info@petconcierge.com
                        </div>
                    </div>
                    <div class="text-white flex gap-8">
                        <For each={social}>{
                            (s) => <A href="">{s.icon}</A>
                        }</For>
                    </div>
                </div>
            </div>
            <nav class="w-full px-4 border flex h-16 sticky top-0 bg-white z-30">
                <div class="items-center flex justify-between w-full lg:w-10/12 m-auto h-full">
                    <div>
                        <A href="/">
                            <img src={Logo}  class="h-11"/>
                        </A>
                    </div>
                    <div class="lg:flex gap-12 text text-gray-600 hidden">
                        <For each={Links}>
                            {(i) => 
                                <A href={i.link}
                                class="link_c">
                                    <div>
                                        {i.name}
                                    </div>
                                </A>} 
                        </For>
                    </div>
                    <div>
                        <A href="https://petconciergesa.simplybook.me" class="hidden sm:block">
                            <button class="bg-blue-500 hover:bg-blue-600 text-sm h-10 rounded-sm w-28 duration-200 ease-in-out text-white">
                                Book Now
                            </button>
                        </A>
                        <button
                            onClick={() => setToggleMobileMenu(true)}
                            class="sm:hidden"
                        >
                            <IoMenuOutline class="text-2xl"/>
                        </button>
                    </div>
                </div>
            </nav>
            <div class={`${toggleMobileMenu() ? 'w-full' : 'w-0'} fixed top-0 left-0 h-screen overflow-hidden bg-opacity-70 bg-black z-40`}>
                <button
                    onClick={() => setToggleMobileMenu(false)} 
                    class="z-50 text-white mt-5 ml-5">
                    <IoCloseOutline class="text-3xl menuClose" 
                    />
                </button>
                <div class={`fixed ${toggleMobileMenu() ? 'w-[300px]' : 'w-0'} h-screen flex overflow-hidden duration-300 ease-in-out z-30 top-0 right-0 bg-black 2xl:hidden`}>
                    <div class="w-10/12 relative mx-auto text-white">
                        <ul class="">
                            <button
                                onClick={() => handleMobileLink('/')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Home</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/about')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">About us</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/services')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Services</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/shop')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Shop</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/contact')}
                                class="w-full"
                            >
                                <li class="w-full py-4">Contact us</li>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;
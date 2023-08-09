import { Component } from "solid-js";
import Logo from "../../assets/img/white_logo.png"

const Footer: Component = () => {
    return (
        <>
            <div class="w-full py-16" style={{"background-color":"#7D98B3"}}>
                <div class="w-10/12 sm:w-9/12 m-auto text-white flex flex-wrap py-5">
                    <div class="w-full sm:w-1/5">
                        <img src={Logo} class="h-14"/>
                    </div>
                    <div class="w-1/3 sm:w-1/5">
                        <h3 class="font-semibold">
                            Business
                        </h3>
                        <ul class="pt-3">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Prices</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="w-1/3 sm:w-1/5">
                        <h3 class="font-semibold">
                            Services
                        </h3>
                        <ul class="pt-3">
                            <li>Grooming</li>
                            <li>Sitting</li>
                            <li>Taxi</li>
                            <li>Walking</li>
                        </ul>
                    </div>
                    <div class="w-1/3 sm:w-1/5">
                        <h3 class="font-semibold">
                            More
                        </h3>
                        <ul class="pt-3">
                            <li>Shop</li>
                            <li>Book Now</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/5">
                        <h3 class="font-semibold">
                            Social
                        </h3>
                    </div>
                </div>
            </div>
            <div class="w-full py-2" style={{"background-color":"#5a7a99"}}>
                <div class="w-9/12 text-xs text-white m-auto flex justify-between">
                    <div>
                        Pet Concierge &copy; 2021
                    </div>
                    <div>
                        Created & Powered by Mo & Co (PTY) Ltd.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
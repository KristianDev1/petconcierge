import { Component } from "solid-js";
import Logo from "../../assets/img/white_logo.png"
import { A } from "@solidjs/router";

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
                            <A href="/">
                                <li>Home</li>
                            </A>
                            <A href="/about">
                                <li>About</li>
                            </A>
                            <A href="/services">
                                <li>Services</li>
                            </A>
                            {/* <A href="/prices">
                                <li>Prices</li>
                            </A> */}
                            <A href="/contact">
                                <li>Contact</li>
                            </A>
                        </ul>
                    </div>
                    <div class="w-1/3 sm:w-1/5">
                        <h3 class="font-semibold">
                            Services
                        </h3>
                        <ul class="pt-3">
                            <A href="/services/#concierge">
                                <li>Concierge</li>
                            </A>
                            <A href="/services/#grooming">
                                <li>Grooming</li>
                            </A>
                            <A href="/services/#sitting">
                                <li>Sitting</li>
                            </A>
                            <A href="/services/#traning">
                                <li>Traning</li>
                            </A>
                            <A href="/services/#taxi">
                                <li>Taxi</li>
                            </A>
                            <A href="/services/#walking">
                                <li>Walking</li>
                            </A>
                        </ul>
                    </div>
                    <div class="w-1/3 sm:w-1/5">
                        <h3 class="font-semibold">
                            More
                        </h3>
                        <ul class="pt-3">
                            <li>Shop</li>
                            <li>Book Now</li>
                            <li>Bloger</li>
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
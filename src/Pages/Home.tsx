import GeneralHero from "../components/heros/GeneralHero";
import {A} from "@solidjs/router"
import Grooming from "../assets/img/grooming.png"
import Taxi from "../assets/img/taxi.png"
import Bell from "../assets/img/reception-bell.png"
import Shop from "../assets/img/online-store.png"
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider, createSlider } from "solid-slider";
import { IoChevronBack, IoChevronForward } from "solid-icons/io";

const Home = () => {
    return (
        <>
            <GeneralHero url="https://images.unsplash.com/photo-1524642603405-a7c76bcde7eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
            <div class="w-full py-10 border-b">

            </div>
            <div class="w-full bg-gray-50">
                <div class="w-full sm:w-9/12 flex py-10 m-auto px-3">
                    <div class="w-1/4 border-l">
                        <div class="w-full flex justify-center">
                            <img src={Grooming} class="h-12 my-1 sm:h-28"/>
                        </div>
                        <div class="flex justify-center">
                            Grooming
                        </div>
                    </div>
                    <div class="w-1/4 border-l">
                        <div class="w-full flex justify-center">
                            <img src={Shop} class="h-10 sm:h-24 my-2 sm:py-0"/>
                        </div>
                        <div class="flex justify-center">
                            Shop
                        </div>
                    </div>
                    <div class="w-1/4 border-l">
                        <div class="w-full flex justify-center">
                            <img src={Taxi} class="h-10 sm:h-24 my-2"/>
                        </div>
                        <div class="flex justify-center">
                            Taxi
                        </div>
                    </div>
                    <div class="w-1/4 border-l border-r">
                        <div class="w-full flex justify-center">
                            <img src={Bell} class="h-10 sm:h-24 my-2"/>
                        </div>
                        <div class="flex justify-center">
                            Concierge
                        </div>
                    </div>
                </div>
                <div class="w-full px-3 sm:px-3 sm:w-10/12 pb-8 sm:py-16 sm:m-auto">
                    <h1 class="text-centern text-5xl sm:text-6xl font-bold text-center">
                        Pet Care Services
                    </h1>
                    <p class="text-lg pt-5 px-3 sm:px-28">
                        We provide concierge service to pet parents
                        and their fur babies. Making every experience 
                        stress free. We do all the running around for 
                        you, with the utmost love and respect for each 
                        pet we meet. Striving to always engage with them 
                        at their level in respect to their unique 
                        personalities, likes and preferences in mind.
                    </p>
                    <div class="w-full flex justify-center pt-10">
                        <A href="/about">
                            <button class="bg-blue-500 flex hover:bg-blue-600 h-10 text-white w-36 rounded-sm">
                                <div class="w-11/12 flex m-auto h-full">
                                    <p class="m-auto">
                                        Get To Know Us
                                    </p>
                                </div>
                            </button>
                        </A>
                    </div>
                </div>
                <div class="w-full px-3 sm:px-0 sm:w-10/12 flex flex-wrap py-8 sm:py-16 m-auto">
                    <div class="w-full sm:w-2/3">
                        <h1 class="text-5xl sm:text-6xl font-bold">Grooming Services</h1>
                        <A href="https://petconciergesa.simplybook.me">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-48 rounded-sm">Book a Appointment</button>
                        </A>
                    </div>
                    <div class="w-full px-3 sm:px-0 sm:w-1/3 h-96 bg-gray-100">

                    </div>
                </div>
                <div class="w-full px-3 sm:px-0 sm:w-10/12 flex flex-wrap-reverse py-16 m-auto">
                    <div class="w-full sm:w-1/3 h-96 bg-gray-100">

                    </div>
                    <div class="w-full sm:w-2/3 sm:pl-10">
                        <h1 class="text-5xl sm:text-6xl font-bold">Get latest Supplies</h1>
                        <A href="https://petconcierge.shop.netcash.co.za/">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-28 rounded-sm">Shop Now</button>
                        </A>
                    </div>
                </div>
                <div class="w-full px-3 sm:px-0 sm:w-10/12 flex flex-wrap py-16 m-auto">
                    <div class="w-full sm:w-2/3">
                        <h1 class="text-5xl sm:text-6xl font-bold">Pet Taxi / Chauffeur</h1>
                        <A href="/taxi">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-28 rounded-sm">Get Rates</button>
                        </A>
                    </div>
                    <div class="w-full sm:w-1/3 h-96 bg-gray-100">

                    </div>
                </div>
                <div class="w-full px-3 sm:px-0 sm:w-10/12 flex flex-wrap-reverse py-16 m-auto">
                    <div class="w-full sm:w-1/3 h-96 bg-gray-100">

                    </div>
                    <div class="w-full sm:w-2/3 pl-10">
                        <h1 class="text-5xl sm:text-6xl font-bold">Concierge service</h1>
                        <A href="https://petconciergesa.simplybook.me">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-28 rounded-sm">Shop Now</button>
                        </A>
                    </div>
                </div>
                <div class="px-4 w-full sm:w-6/12 flex relative m-auto sm:pb-16">  
                    <SliderProvider>
                    <Slider options={{ loop: true }}>
                        <div class="w-full flex m-auto sm:h-96">
                            <div class="relative w-10/12 h-80 m-auto">
                                <div class="w-full absolute bottom-10 rounded-sm border bg-white h-52">
                                    <div class="bg-gray-100 -mt-16 z-50 -mb-10 w-32 h-32 m-auto rounded-full">

                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div class="w-full flex m-auto h-96">
                            <div class="relative w-10/12 h-80 m-auto">
                                <div class="w-full absolute bottom-10 rounded-sm border bg-white h-52">
                                    <div class="bg-gray-100 -mt-16 z-50 -mb-10 w-32 h-32 m-auto rounded-full">

                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div class="w-full flex m-auto h-96">
                            <div class="relative w-10/12 h-80 m-auto">
                                <div class="w-full absolute bottom-10 rounded-sm border bg-white h-52">
                                    <div class="bg-gray-100 -mt-16 z-50 -mb-10 w-32 h-32 m-auto rounded-full">

                                    </div>
                                </div>
                            </div>    
                        </div>
                    </Slider>
                    <SliderButton prev class="absolute top-44">
                        <IoChevronBack class="text-4xl"/>
                    </SliderButton>
                    <SliderButton next class="absolute right-0 top-44">
                        <IoChevronForward class="text-4xl"/>
                    </SliderButton>
                    </ SliderProvider>
                </div>
            </div>
        </>
    )   
}

export default Home;
import GeneralHero from "../components/heros/GeneralHero";
import {A} from "@solidjs/router"
import Grooming from "../assets/img/grooming.png"
import Taxi from "../assets/img/taxi.png"
import Bell from "../assets/img/reception-bell.png"
import Shop from "../assets/img/online-store.png"
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider, createSlider } from "solid-slider";
import { IoChevronBack, IoChevronForward } from "solid-icons/io";
import TaxiBig from "../assets/img/Taxi.jpg"
import StoreBig from "../assets/img/Store.jpg"
import GroomingBig from "../assets/img/Grooming.avif"
import ConciergeBig from "../assets/img/Concierge.jpg"

const Home = () => {
    return (
        <>
            <GeneralHero url="https://images.unsplash.com/photo-1524642603405-a7c76bcde7eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
            {/* <div class="w-full py-10 border-b">

            </div> */}
            <div class="w-full bg-gray-50">
                <div class="w-full sm:w-9/12 flex py-10 m-auto px-3">
                    <A href="#about" class="w-1/4 ">
                        <div class="w-full border-l hover:bg-gray-200">
                            <div class="w-full flex justify-center">
                                <img src={Grooming} class="h-12 my-1 sm:h-28"/>
                            </div>
                            <div class="flex justify-center">
                                Grooming
                            </div>
                        </div>
                    </A>
                    <A href="#store" class="w-1/4">
                        <div class="w-full border-l hover:bg-gray-200">
                            <div class="w-full flex justify-center">
                                <img src={Shop} class="h-10 sm:h-24 my-2 sm:py-0"/>
                            </div>
                            <div class="flex justify-center">
                                Shop
                            </div>
                        </div>
                    </A>
                    <A href="#taxi" class="w-1/4">
                        <div class="w-full border-l hover:bg-gray-200">
                            <div class="w-full flex justify-center">
                                <img src={Taxi} class="h-10 sm:h-24 my-2"/>
                            </div>
                            <div class="flex justify-center">
                                Taxi
                            </div>
                        </div>
                    </A>
                    <A href="#concierge" class="w-1/4">
                        <div class="w-full border-l hover:bg-gray-200 border-r">
                            <div class="w-full flex justify-center">
                                <img src={Bell} class="h-10 sm:h-24 my-2"/>
                            </div>
                            <div class="flex justify-center">
                                Concierge
                            </div>
                        </div>
                    </A>
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
                    <div class="w-full flex justify-center pt-10" id="about">
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
                <div class="w-full px-6 sm:px-0 sm:w-10/12 flex flex-wrap py-8 sm:py-16 m-auto">
                    <div class="w-full sm:w-2/3">
                        <h1 class="text-5xl sm:text-6xl font-bold">Grooming</h1>
                        <p class="py-10 text-lg sm:pr-10">
                            Grooming your pet is essential for their overall health, well-being, and appearance.
                            We understand that different pets require different grooming routines, and the frequency 
                            of grooming will depend on their breed, coat type, and overall health. We appeal to each 
                            pet's needs and pet parents requests to ensure a happy parent and an even happier fur baby.
                        </p>
                        <div class="w-full flex justify-center sm:justify-start">
                            <A href="https://petconciergesa.simplybook.me">
                                <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-48 rounded-sm">Book a Appointment</button>
                            </A>
                        </div>
                    </div>
                    <div class="w-full px-3 sm:px-0 sm:w-1/3 h-96 bg-gray-100" style={{"background-image":`url(${GroomingBig})`,"background-size":"cover"}}>

                    </div>
                </div>
                <div class="w-full px-6 sm:px-0 sm:w-10/12 flex flex-wrap-reverse py-16 m-auto" id="store">
                    <div class="w-full sm:w-1/3 h-96 bg-gray-100" style={{"background-image":`url(${StoreBig})`,"background-size":"cover"}}>

                    </div>
                    <div class="w-full sm:w-2/3 pl-10">
                        <h1 class="text-5xl sm:text-6xl font-bold">Store</h1>
                        <p class="py-10 text-lg pl-10 sm:pl-0">
                            Your one-stop shop for all your furry friends' needs! Whether you have a 
                            loyal dog, a curious cat, a playful bird, or any other beloved pet, we've 
                            got you covered with an extensive range of high-quality products and exceptional 
                            customer service. Join the thousands of happy pet parents who have already 
                            experienced the convenience and joy of shopping with us. 
                        </p>
                        <A href="https://petconcierge.shop.netcash.co.za/">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-28 rounded-sm">Shop Now</button>
                        </A>
                    </div>
                </div>
                <div class="w-full px-3 sm:px-0 sm:w-10/12 flex flex-wrap py-16 m-auto" id="taxi">
                    <div class="w-full sm:w-2/3">
                        <h1 class="text-5xl sm:text-6xl font-bold">Taxi</h1>
                        <p class="py-10 text-lg sm:pr-10">
                            Our pet taxi service provides transportation for pets from one 
                            location to another. We are equipped with proper safety measures, 
                            such as secure crates and harnesses, to ensure a comfortable and 
                            safe experience during the journey. We have experience and 
                            knowledge in handling animals. We pride ourselves to address 
                            any specific needs during transportation.
                        </p>
                        <A href="https://petconciergesa.simplybook.me">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-28 rounded-sm">Book A Ride</button>
                        </A>
                    </div>
                    <div class="w-full sm:w-1/3 h-96 bg-gray-100" style={{"background-image":`url(${TaxiBig})`,"background-size":"cover"}}>

                    </div>
                </div>
                <div class="w-full px-3 sm:px-0 sm:w-10/12 flex flex-wrap-reverse py-16 m-auto" id="concierge">
                    <div class="w-full sm:w-1/3 h-96 bg-gray-100" style={{"background-image":`url(${ConciergeBig})`,"background-size":"cover"}}>

                    </div>
                    <div class="w-full sm:w-2/3 pl-10">
                        <h1 class="text-5xl sm:text-6xl font-bold">Concierge</h1>
                        <p class="py-10 text-lg sm:pr-10">
                            Our pet concierge will ensure that pets receive the care and attention they need while 
                            easing the responsibilities of pet ownership for their human companions. It allows pet 
                            parents/owners to have peace of mind, knowing that their furry friends are well taken 
                            care of in their absence or when they require additional assistance.
                        </p>
                        <A href="https://petconciergesa.simplybook.me">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white h-10 w-40 rounded-sm">Schedule Now</button>
                        </A>
                    </div>
                </div>
                {/* <div class="px-4 w-full sm:w-6/12 flex relative m-auto sm:pb-16">  
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
                </div> */}
            </div>
        </>
    )   
}

export default Home;
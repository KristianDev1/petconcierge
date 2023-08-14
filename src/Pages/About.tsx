import GeneralHero from "../components/heros/GeneralHero";

const About = () => {
    return (
        <>
            <GeneralHero url="https://images.unsplash.com/photo-1551902751-ec7d94221ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"/>
            <div class="py-16 flex flex-wrap w-full">
                <div class="w-11/12 sm:w-10/12 m-auto">
                    <div class="w-full px-4 flex flex-wrap">
                        <div class="w-full sm:w-2/3 sm:pr-14">
                            <h1 class="text-6xl font-bold">
                                History
                            </h1>
                            <div class="text-lg">
                                <br />
                                <p>
                                    Pet Concierge was officially 
                                    founded in 2022 by Kristian 
                                    R. Lawrence after adopting 
                                    two dogs and six cats and 
                                    assisting other families with 
                                    their pet's well-being.
                                </p>
                                <br />
                                <p>
                                    It was suggested by loved ones 
                                    that she brings this love for 
                                    animals to life by starting a 
                                    pet care service. That would 
                                    care for each pet as she does 
                                    her own while assisting pet 
                                    parents in their daily pet 
                                    errands.
                                </p>
                                <br />
                                <p>
                                    Loving each individually and 
                                    honouring each one's personality 
                                    and specific preference while meeting 
                                    them at not only their needs but wants 
                                    too, is evident in every interaction 
                                    between her and animal.
                                </p>
                            </div>
                        </div>
                        <div class="w-full bg-red-100 sm:w-1/3 flex mt-10 sm:mt-0">
                            <div 
                                class="w-full sm:w-96 h-96 m-auto"
                                style={{"background-image": "url(https://images.unsplash.com/photo-1611649743829-1ed7c968cd05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80)", "background-size":"cover"}}
                            >

                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-11/12 sm:w-10/12 m-auto pt-20">
                    <div class="w-full px-4 flex flex-wrap-reverse">
                        <div class="w-full sm:w-1/3 flex mt-10 sm:mt-0">
                            <div 
                                class="w-96 h-96 m-auto"
                                style={{"background-image": "url(https://images.unsplash.com/photo-1608928586655-36b8e0abf78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)", "background-size":"cover"}}
                            >

                            </div>
                        </div>
                        <div class="w-full sm:w-2/3 sm:pl-14">
                            <h1 class="text-6xl font-bold">
                                Our Vision, Mission and Core Value
                            </h1>
                            <div class="text-lg">
                                <br />
                                <p>
                                    Being able to help those who can’t help themselves is our vision.
                                </p>
                                <br />
                                <p>
                                    Getting to know each animal and how best to love them is our mission.
                                </p>
                                <br />
                                <p>
                                    Respect towards them should be given for trust to be earned by them is our core value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-11/12 sm:w-10/12 m-auto pt-20">
                    <h1 class="text-6xl font-bold text-center sm:px-28">
                    Wagging tails and rumbling purrs are the reasons we are in this industry.
                    </h1>
                </div>
            </div>
        </>
    )
}

export default About;
import GeneralHero from "../components/heros/GeneralHero"
import GroomingImg from "../assets/img/Grooming.avif"
import WalkingImg from "../assets/img/Walking.avif"
import SittingImg from "../assets/img/Sitting.avif"
import TaxiImg from "../assets/img/Taxi.jpg"
import ConiergeImg from "../assets/img/Concierge.jpg"
import TraningImg from "../assets/img/Training.jpg"

const Services = () => {
    return (
        <>
            <GeneralHero url="https://images.unsplash.com/photo-1615159517259-a48d184d7d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
            <div class="w-full py-16 flex flex-wrap justify-center">
                <div class="w-10/12 flex flex-wrap sm:flex-nowrap gap-5">
                    <div class="w-full sm:w-1/2" id="grooming">
                        <div class="bg-gray-300 w-full h-96" style={{"background-image":`url(${GroomingImg})`,"background-size":"cover"}}>

                        </div>
                        <h1 class="text-2xl font-semibold py-3">
                            Pet Grooming
                        </h1>
                        <p class="text-lg">
                            Total time: 30 min and up Pricing: Starts from R150
                            Shampoo wash (specific to pets’ skin). Powder (dry) 
                            wash (specific to pets’ skin). Ear clean. Nail trim. 
                            Teeth clean. Brush of coat. Sun screen. Perfume spritzes.
                            If you do not wish for a certain grooming treatment. 
                            Please do let us know.
                        </p>
                    </div>
                    <div class="w-full sm:w-1/2" id="sitting">
                        <div class="bg-gray-300 w-full h-96" style={{"background-image":`url(${SittingImg})`,"background-size":"cover"}}>

                        </div>
                        <h1 class="text-2xl font-semibold py-3">
                            Pet Sitting
                        </h1>
                        <p class="text-lg">
                            Total time: 30 min and up
                            Pricing: Starts from R137.5
                            Morning ~ cuddles then breakfast, morning walk and play time.
                            Afternoon ~ snack, late afternoon walks.
                            Evening ~ dinner, cuddles/play time and some undivided attention.
                        </p>
                    </div>
                </div>  
                <div class="w-10/12 flex flex-wrap sm:flex-nowrap gap-5 py-10">
                    <div class="w-full sm:w-1/2" id="walking">
                        <div class="bg-gray-300 w-full h-96" style={{"background-image":`url(${WalkingImg})`,"background-size":"cover"}}>

                        </div>
                        <h1 class="text-2xl font-semibold py-3">
                            Pet Walking
                        </h1>
                        <p class="text-lg">
                            Total time: 30 min
                            Pricing: Starts from R50
                            This includes pick-up, walk and drop-off. R50 per pet and 
                            R30 per additional pet.
                        </p>
                    </div>
                    <div class="w-full sm:w-1/2" id="taxi">
                        <div class="bg-gray-300 w-full h-96" style={{"background-image":`url(${TaxiImg})`,"background-size":"cover"}}>

                        </div>
                        <h1 class="text-2xl font-semibold py-3">
                            Pet Taxi
                        </h1>
                        <p class="text-lg">
                            Total time: 30 min and up
                            Pricing: Starts from R10 per kilometre
                            Pick-up from and drop-off at requested location.
                        </p>
                    </div>
                </div>  
                <div class="w-10/12 flex flex-wrap sm:flex-nowrap gap-5 py-10">
                    <div class="w-full sm:w-1/2" id="traning">
                        <div class="bg-gray-300 w-full h-96" style={{"background-image":`url(${TraningImg})`,"background-size":"cover"}}>

                        </div>
                        <h1 class="text-2xl font-semibold py-3">
                            Pet Training
                        </h1>
                        <p class="text-lg">
                            Total time: 1 hr and up
                            Pricing: Starts from R100
                            According to what training is required and the training 
                            duration period need. We train in: Encouraging positive 
                            socialisation. Positive behaviour training. Positive command 
                            training. Litter Box/Potty Training. Call Commands (Obedience 
                            Training). We have a discount package of R350 a week for 5 
                            days a week training.
                        </p>
                    </div>
                    <div class="w-full sm:w-1/2" id="concierge">
                        <div class="bg-gray-300 w-full h-96" style={{"background-image":`url(${ConiergeImg})`,"background-size":"cover"}}>

                        </div>
                        <h1 class="text-2xl font-semibold py-3">
                            Concierge
                        </h1>
                        <p class="text-lg">
                            Total time: 1 hr and up
                            Pricing: Starts from R500 excl. outsourced services
                            We run all the errands for you: To vet visits, play dates, 
                            training classes etc. We manage the bookings, payments and 
                            provide the transport. Pricing: Is determined by costs that 
                            may occur by the facilities that your fur baby has used or 
                            needed. All receipts will be kept for our proof of payment.
                        </p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Services;
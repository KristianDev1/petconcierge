import { IoBusinessSharp, IoCallSharp, IoLogoWhatsapp, IoMail, IoMailSharp, IoPhoneLandscapeSharp, IoPhonePortraitSharp } from "solid-icons/io";

const ContactForm = () => {
    return (
        <>
            <h1 class="text-5xl sm:text-6xl text-center sm:text-left font-bold">
                Get in Touch
            </h1>
            <div class="w-full flex flex-wrap">
                <form class="w-full sm:w-2/3 flex flex-wrap pt-10">
                    <div class="flex gap-4 w-full">
                        <div class="sm:w-1/2">
                            <p class="pb-2">
                                Name
                            </p>
                            <input 
                                name="name"
                                type="text"
                                placeholder="Name"
                                class="w-full h-9 border outline-none px-2"
                            />
                        </div>
                        <div class="sm:w-1/2">
                            <p class="pb-2">
                                Surname
                            </p>
                            <input 
                                name="surname"
                                type="text"
                                placeholder="Surname"
                                class="w-full h-9 border outline-none px-2"
                            />
                        </div>
                    </div>
                    <div class="flex gap-4 w-full">
                        <div class="sm:w-1/2">
                            <p class="py-2">
                                Email
                            </p>
                            <input 
                                name="email"
                                type="email"
                                placeholder="Email"
                                class="w-full h-9 border outline-none px-2"
                            />
                        </div>
                        <div class="sm:w-1/2">
                            <p class="py-2">
                                Cellphone
                            </p>
                            <input 
                                name="cellphone"
                                type="tel"
                                placeholder="Cellphone"
                                class="w-full h-9 border outline-none px-2"
                            />
                        </div>
                    </div>
                    <div class="w-full">
                        <p class="py-2">
                            Subject
                        </p>
                        <select
                            name="subject"
                            class="w-full h-9 border outline-none px-1"
                        >
                            <option value="">Information</option>
                            <option value="">Help</option>
                            <option value="">Complaint</option>
                        </select>
                    </div>
                    <div class="w-full">
                        <p class="py-2">
                            Message
                        </p>
                        <textarea
                            name="message"
                            placeholder="Enter a message"
                            class="w-full h-36 resize-none border p-2"
                        />
                    </div>
                    <button class="w-full bg-blue-500 hover:bg-blue-600 rounded-sm duration-200 ease-in-out mt-5 h-10 text-white">
                        Submit
                    </button>
                </form>
                <div class="w-full sm:w-1/3 h-full pt-10 sm:pl-5">
                   <div class="border-t sm:border-t-0 sm:border-l h-[60vh] sm:pl-5 pt-10 sm:pt-0 sm:px-0">
                        <div class="w-full flex">
                            <div class="flex gap-3">
                                <IoBusinessSharp class="text-xl"/>
                                Address:
                            </div>
                            <div class="px-3">
                                1st Floor, Block B, North Park, Black River Park, 2 Fir St, Observatory, Cape Town, 7925
                            </div>
                        </div>
                        <div class="w-full flex pt-10">
                            <div class="flex gap-3">
                                <IoMailSharp class="text-xl"/>
                                Email:
                            </div>
                            <div class="px-3">
                                info@petconcierge.com
                            </div>
                        </div>
                        <div class="w-full flex pt-10">
                            <div class="flex gap-3">
                                <IoPhonePortraitSharp class="text-xl"/>
                                Mobile:
                            </div>
                            <div class="px-3">
                            +27676420911
                            </div>
                        </div>
                        <div class="w-full flex pt-10">
                            <div class="flex gap-3">
                                <IoCallSharp class="text-xl"/>
                                Telephone:
                            </div>
                            <div class="px-3">
                                1st Floor, Block B, North Park, Black River Park, 2 Fir St, Observatory, Cape Town, 7925
                            </div>
                        </div>
                        <div class="w-full flex pt-10">
                            <div class="flex gap-3">
                                <IoLogoWhatsapp class="text-xl"/>
                                WhatsApp:
                            </div>
                            <div class="px-3">
                                +27676420911
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;
import ContactForm from "../components/forms/ContactForm";
import GeneralHero from "../components/heros/GeneralHero";

const Contact = () => {
    return (
        <>
            <GeneralHero url="https://images.unsplash.com/photo-1563305549-4ee002e6c3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"/>
            <div class="w-full px-3 sm:px-0 sm:w-10/12 m-auto py-16">
                <ContactForm />
            </div>
            <div class="w-full h-80 bg-gray-200">
            <iframe src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCw3Xn7pEMEIKLPmxwMp5EnZgNAf3Ig5ng&center=-33.93200483840732,18.471116895112292&zoom=17&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:landscape.man_made%7Celement:geometry.fill%7Cvisibility:on&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.highway.controlled_access%7Celement:geometry.fill%7Ccolor:0xffeb3b%7Cweight:8&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:transit.station%7Celement:geometry.stroke%7Ccolor:0xffeb3b%7Cweight:8&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360" width="100%" height="100%"></iframe>
            </div>
        </>
    )
}

export default Contact;
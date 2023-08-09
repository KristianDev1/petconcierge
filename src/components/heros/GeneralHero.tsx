import { Component } from "solid-js";

interface GeneralHeroProps {
    url: string
}

const GeneralHero: Component<GeneralHeroProps> = ({url}) => {
    return (
        <div class="w-full h-[53vh] sm:h-[51vh] bg-gray-200" style={{"background-image":`url(${url})`,"background-size":"cover", "background-attachment":"fixed"}}>

        </div>
    )
}

export default GeneralHero;
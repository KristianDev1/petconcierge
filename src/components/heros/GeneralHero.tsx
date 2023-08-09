import { Component } from "solid-js";

interface GeneralHeroProps {
    url: string
}

const GeneralHero: Component<GeneralHeroProps> = ({url}) => {
    return (
        <div class="w-full h-[68vh] flex sm:h-[61vh] bg-gray-200" style={{"background-image":`url(${url})`,"background-size":"cover", "background-attachment":"fixed"}}>
        </div>
    )
}

export default GeneralHero;
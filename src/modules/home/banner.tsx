import { IoStarSharp, IoStarHalfSharp } from "react-icons/io5";
import { BsFillTriangleFill } from "react-icons/bs";
import { ButtonCTA } from "#/components/button-cta";

function Tagline() {
    return (
        <h2 className="text-2xl text-center md:text-[55px] md:text-left font-semibold md:leading-[65px] !tracking-[-2px]">
            L’agence digital dédié <br /> aux entreprises
        </h2>
    )
}

function TrustedText() {
    return (
        <p className="text-sm text-center md:text-left md:text-lg font-medium text-primary translate-y-0 md:translate-y-5">Transformez votre vision en réalité numérique !</p>
    )
}

function Description() {
    return (
        <p className="text-sm text-black font-medium w-10/12">
            AGENCIFY est une agence française spécialisée dans le Développement Web, qui identifie vos besoins pour vous accompagner dans la création de votre site sur-mesure et dans vos projets digitaux.
        </p>
    )
}

function Testimony() {
    return (
        <div className="hidden md:block absolute top-40 -right-12 bg-white rounded-3xl z-10 popover-shadow w-[300px]">
            <div className="relative w-full py-6 px-7 space-y-3">
                <p className="text-[13px] font-medium">
                    "Une expérience parfaite pour obtenir mon site internet! Le processus a été rapide et efficace.”
                </p>
                <div className="center-flex justify-start" role="img" aria-label="start rating">
                    <IoStarSharp className="text-primary text-xl" />
                    <IoStarSharp className="text-primary text-xl" />
                    <IoStarSharp className="text-primary text-xl" />
                    <IoStarSharp className="text-primary text-xl" />
                    <IoStarHalfSharp className="text-primary text-xl" />
                </div>
                <div className="center-flex gap-4 justify-start">
                    <img src="/profile.png" alt="profile-picture" className="w-11" />
                    <div>
                        <h3 className="font-medium text-sm">Thibault Ernout</h3>
                        <p className="text-xs">Client du 9 Juin 2024</p>
                    </div>
                </div>
                <BsFillTriangleFill className="absolute text-white text-4xl -left-2 -bottom-3 rotate-[-30deg]" />
            </div>
        </div>
    )
}

export default function Banner() {
    return (
        <section className="container2nd relative grid grid-cols-1 md:grid-cols-2 bg-white z-10 pt-28 md:pt-16">
            <div className="hidden md:block space-y-11 translate-y-20" aria-label="tagline and description">
                <TrustedText />
                <Tagline />
                <Description />
                <div className="hidden md:flex items-center w-[75%] gap-x-5">
                    <ButtonCTA variant="primary" text="Recevoir nos offres" className="w-1/2 py-[0.6rem] rounded-3xl" />
                    <ButtonCTA variant="secondary" text="Prendre un rendez-vous" className="w-1/2 py-[0.6rem] rounded-3xl" />
                </div>
            </div>
            <div className="translate-y-0 md:translate-y-5 space-y-4" aria-label="image">
                <div className="block md:hidden space-y-4" aria-label="tagline and description">
                    <TrustedText />
                    <Tagline />
                </div>
                <div className="relative h-80 md:h-auto">
                    <img
                        src="/happy-man.png"
                        alt="banner-image"
                        width={600}
                        height={400}
                        className=" md:w-[600px]"
                    />
                    <Testimony />
                    <div className="absolute -bottom-7 md:bottom-0 w-full h-40 bg-gradient-to-b from-white/[6%] via-white/[90%] to-white" />
                </div>
                <div className="center-flex md:hidden flex-col gap-3">
                    <div className="absolute w-[54%] h-20 bg-black opacity-15 blur-2xl translate-y-2" aria-label="shadow-effect" />
                    <ButtonCTA variant="primary" text="Recevoir nos offres" className="rounded-3xl py-[.5rem] w-[60%] z-10" />
                    <ButtonCTA variant="secondary" text="Prendre un rendez-vous" className="rounded-3xl py-[.5rem] w-[60%] z-10" />
                </div>
            </div>
        </section >
    )
}


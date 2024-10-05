import hamburger from "#/assets/svg/hamburger.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function Hamburger({ className, ...rest }: Props) {
    return (
        <img
            src={hamburger}
            className={merge("w-9", className)}
            alt="icon"
            width={40}
            height={40}
            loading="lazy"
            {...rest}
        />
    )
}   
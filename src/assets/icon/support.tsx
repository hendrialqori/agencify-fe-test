import support from "#/assets/svg/support.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function Support({ className, ...rest }: Props) {
    return (
        <img
            src={support}
            className={merge("w-8", className)}
            alt="icon"
            width={40}
            height={40}
            loading="lazy"
            {...rest}
        />
    )
}   
import optimization from "#/assets/svg/optimization.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function Optimization({ className, ...rest }: Props) {
    return (
        <img
            src={optimization}
            className={merge("w-9", className)}
            alt="icon"
            width={40}
            height={40}
            loading="lazy"
            {...rest}
        />
    )
}   
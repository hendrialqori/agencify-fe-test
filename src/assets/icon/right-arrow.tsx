import right_arrow from "#/assets/svg/right-arrow.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function RightArrow({ className, ...rest }: Props) {
    return (
        <img
            src={right_arrow}
            className={merge("w-6", className)}
            alt="icon"
            width={33}
            height={15}
            loading="lazy"
            {...rest}
        />
    )
}   
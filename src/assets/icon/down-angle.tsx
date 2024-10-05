import down_angle from "#/assets/svg/down-angle.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function DownAngle({ className, ...rest }: Props) {
    return (
        <img
            src={down_angle}
            className={merge("w-4", className)}
            alt="icon"
            width={8}
            height={14}
            loading="lazy"
            {...rest}
        />
    )
}   
import wordpress from "#/assets/svg/wordpress.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function Wordpress({ className, ...rest }: Props) {
    return (
        <img
            src={wordpress}
            className={merge("w-9", className)}
            alt="icon"
            width={45}
            height={45}
            loading="lazy"
            {...rest}
        />
    )
}   
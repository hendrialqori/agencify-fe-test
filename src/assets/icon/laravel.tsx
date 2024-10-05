import laravel from "#/assets/svg/laravel.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function Laravel({ className, ...rest }: Props) {
    return (
        <img
            src={laravel}
            className={merge("w-9", className)}
            alt="icon"
            width={40}
            height={40}
            loading="lazy"
            {...rest}
        />
    )
}   
import woocommerce from "#/assets/svg/woocommerce.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function Woocommerce({ className, ...rest }: Props) {
    return (
        <img
            src={woocommerce}
            className={merge("w-9", className)}
            alt="icon"
            width={48}
            height={29}
            loading="lazy"
            {...rest}
        />
    )
}   
import magento from "#/assets/svg/magento.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function Magento({ className, ...rest }: Props) {
    return (
        <img
            src={magento}
            className={merge("w-9", className)}
            alt="icon"
            width={47}
            height={47}
            loading="lazy"
            {...rest}
        />
    )
}   
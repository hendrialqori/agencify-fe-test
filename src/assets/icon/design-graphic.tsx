import design_graphic from "#/assets/svg/design-graphic.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function DesignGraphic({ className, ...rest }: Props) {
    return (
        <img
            src={design_graphic}
            className={merge("w-9", className)}
            alt="icon"
            width={40}
            height={40}
            loading="lazy"
            {...rest}
        />
    )
}   
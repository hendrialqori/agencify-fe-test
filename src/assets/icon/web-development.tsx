import web_development from "#/assets/svg/web-development.svg"
import { merge } from "#/lib/utils"

type Props = React.ComponentPropsWithoutRef<"img">

export function WebDevelopment({ className, ...rest }: Props) {
    return (
        <img
            src={web_development}
            className={merge("w-9", className)}
            alt="icon"
            width={40}
            height={40}
            loading="lazy"
            {...rest}
        />
    )
}   
import logo from "#/assets/svg/logo.svg"

type Props = React.ComponentPropsWithoutRef<"img">

export function Logo({ className, ...rest }: Props) {
    return (
        <img
            src={logo}
            className={className}
            alt="icon"
            width={30}
            height={23}
            loading="lazy"
            {...rest}
        />
    )
}   
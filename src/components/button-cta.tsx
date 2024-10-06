import { merge } from "#/lib/utils"

type Props = {
    variant: "primary" | "secondary",
    text: string;
    icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export const ButtonCTA = ({ className, variant, text, icon, ...rest }: Props) => {
    const style = {
        primary: "bg-primary text-white",
        secondary: "border-2 border-primary bg-white text-primary"
    }

    return (
        <button
            className={merge(style[variant], className)}
            aria-label="call to action"
            {...rest}
        >
            {icon}
            <span className="font-medium text-center text-xs md:text-sm">{text}</span>
        </button>
    )
}
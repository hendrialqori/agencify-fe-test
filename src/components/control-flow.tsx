import React from "react";

/**
 * Control flow
 * di buat untuk mengindari ternary condition yang berlebihan
 * yang membuat koda terkesan messy and sulit dibaca
 */

type Props = {
    children: React.ReactNode
}

export function Flow({ children }: Props) {
    let show: React.ReactNode;
    let otherwise: React.ReactNode;

    React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            if (Flow.If == child.type && child.props.condition) {
                show = child

            } else if (Flow.ElseIf == child.type && child.props.condition) {
                show = child

            } else if (Flow.Else == child.type) {
                otherwise = child
            }
        }
    })

    return show ?? otherwise
}

Flow.If = (props: Props & { condition: boolean }) => props.children
Flow.ElseIf = (props: Props & { condition: boolean }) => props.children
Flow.Else = (props: Props) => props.children

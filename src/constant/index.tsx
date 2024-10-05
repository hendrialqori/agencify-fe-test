import { Menu, Submenu } from "#/@type"
import * as Icon from "#/assets/icon"

const EXPERTISE: Submenu[] = [
    {
        icon: <Icon.Magento />,
        title: "Magento",
        subtitle: "Le CMS incontournable",
    },
    {
        icon: <Icon.Wordpress />,
        title: "Wordpress",
        subtitle: "Le CMS le plus connu"
    },
    {
        icon: <Icon.Laravel />,
        title: "Laravel",
        subtitle: "Le Framework compétant"
    },
    {
        icon: <Icon.Woocommerce />,
        title: "Woo Commerce",
        subtitle: "Création de commerce"
    }
]

const SERVICES: Submenu[] = [
    {
        icon: <Icon.Optimization />,
        title: "Optimisation",
        subtitle: "Web",
        badge: "La plus populaire",
    },
    {
        icon: <Icon.DesignGraphic />,
        title: "Design graphique",
        subtitle: "Web & print"
    },
    {
        icon: <Icon.WebDevelopment />,
        title: "Développement web",
        subtitle: "Desktop & Mobile"
    },
    {
        icon: <Icon.Support />,
        title: "Suivi & support",
        subtitle: "Dans votre projet"
    }
]

export const MENUS: Menu[] = [
    { title: "Accueil", isActive: true },
    { key: "expertise", title: "Notre expertise", submenu: EXPERTISE },
    { key: "services", title: "Nos services", submenu: SERVICES },
    { title: "A propos" },
    { title: "Contact" }

] as const
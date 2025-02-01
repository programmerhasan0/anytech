export interface Navlink {
    href: string;
    label: string;
    submenu?: string[];
    type?: 'link' | 'lang-btn';
}

export interface PhilosophyCard {
    image: string;
    title: string;
    description: string;
}

export interface SlideData {
    subtitle: string;
    title: string;
    description1: string;
    description2: string;
    image: string;
    btnLabel: string;
}

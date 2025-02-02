import { Navlink } from '@/app/definitions/types';

export const navlinks: Navlink[] = [
    {
        href: '#',
        label: 'Solutions',
        submenu: ['AnyCaaS', 'AnyBaaS', 'AnyPaaS'],
    },
    {
        href: '/services',
        label: 'Services',
    },
    {
        href: '/about-us',
        label: 'About Us',
    },
    {
        href: '#',
        label: 'EN',
        type: 'lang-btn',
    },
];

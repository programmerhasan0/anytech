'use client';
import { Navlink } from '@/app/definitions/types';
import Link from 'next/link';
import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navlinks: React.FC = () => {
    const navlinks: Navlink[] = [
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

    const [lang, setLang] = useState<boolean>(false);

    const handleLangChange = (type: string) => {
        if (type === 'lang-btn') {
            setLang((lang) => !lang);
        }
    };

    return (
        <ul className="flex items-center">
            {navlinks.map(({ label, href, type }, idx) => (
                <li
                    key={idx}
                    className={`mr-3 ${type === 'lang-btn' && 'border px-5 py-2 rounded-xl cursor-pointer'}`}
                    onClick={() => handleLangChange(type!)}
                >
                    <Link
                        href={href}
                        className={`${type === 'lang-btn' && 'flex justify-around items-center gap-2'}`}
                    >
                        {type === 'lang-btn' && <FaGlobe />}
                        {label}
                        {type === 'lang-btn' && (
                            <MdKeyboardArrowDown
                                className={`${lang ? 'rotate-180 transform transition-all' : 'transition-all'}`}
                            />
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navlinks;

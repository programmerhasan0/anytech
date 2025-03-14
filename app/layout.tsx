import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Exam project for Edistys',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins`}
            >
                {children}
            </body>
        </html>
    );
}

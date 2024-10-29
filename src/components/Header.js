import React from 'react';

const Header = () => {
    return (
        <header className="bg-neutral-950 border-b border-neutral-900 mb-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#/" className="font-medium" p-4>AV Web IO</a>
                <nav className="flex gap-8 items-center text-neutral-400 font-medium">
                    <a href="#/" className="hover:text-neutral-300 p-4">Purpose</a>
                    <a href="#/" className="hover:text-neutral-300 p-4">Projects</a>
                    <a href="#/" className="hover:text-neutral-300 p-4">Resources</a>
                    <a href="#/" className="hover:text-neutral-300 p-4">Inquire</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
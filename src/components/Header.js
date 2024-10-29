import React from 'react';

const Header = () => {
    return (
        <header className="p-4 py-4 bg-neutral-950 border-b border-neutral-900 mb-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#/" className="font-medium">AV Web IO</a>
                <nav className="flex gap-8 items-center">
                    <a href="#/">Purpose</a>
                    <a href="#/">Projects</a>
                    <a href="#/">Resources</a>
                    <a href="#/">Inquire</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
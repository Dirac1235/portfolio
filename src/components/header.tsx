import React from 'react';
import { ModeToggle } from './mode-toggle';

const Header: React.FC = () => {
  return (
    <header
      style={{
        overflow: 'hidden', // Prevent overflow
        backgroundImage: `
          radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom right, rgba(59, 130, 246, 0.05) 0%, transparent 100%)
        `,
      }}
    >
      <nav className="nav" style={{ padding: '1rem' }}> {/* Add padding */}
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
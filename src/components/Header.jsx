import { useState, useEffect } from 'react';

function Header() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1098);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      {isMobile ? (
        <p className="titulo-mobile">Maria Bilbao</p>
      ) : (
        <p className="titulo">Maria Bilbao</p>
      )}
    </header>
  );
}

export default Header;

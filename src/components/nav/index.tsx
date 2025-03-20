import { useEffect, useState } from 'react';
import style from './style.module.scss';
import { cls } from '../../helpers';

const navLinks = [
  { path: '#', name: 'intro.' },
  { path: '#services', name: 'services.' },
  { path: '#about', name: 'about.' },
  { path: '#contact', name: 'contact.' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');
    const handleScroll = () => {
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top >= -window.innerHeight / 3 &&
          rect.top < window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection == 'root' ? '' : currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style['container']}>
      <div className={style['navbar']}>
        <div className={style['logo']}>
          <a href="#">
            <img src="/assets/logo.svg" alt="" />
          </a>
        </div>
        <div className={style['nav-items']}>
          {navLinks.map((data, index) => (
            <a
              href={data.path}
              key={index}
              className={cls(style['item'], {
                [style['active']]: activeSection == data.path.slice(1)
              })}
            >
              {data.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

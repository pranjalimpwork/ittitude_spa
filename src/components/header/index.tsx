import Button from '../button';
import style from './style.module.scss';

const stats = [
  {
    value: '250',
    label: 'clients'
  },
  {
    value: '1000+',
    label: 'solutions'
  },
  {
    value: '7.50b',
    label: 'value created'
  }
];

const Header = () => {
  return (
    <div className={style['container']}>
      <div className={style['wrapper']}>
        <div className={style['content']}>
          <div className={style['title']}>
            building <span>impactful</span> solutions together.
          </div>
          <div className={style['stats-container']}>
            {stats.map((data, index) => (
              <div className={style['stats']} key={index}>
                <div className={style['value']}>{data.value}</div>
                <div className={style['label']}>{data.label}</div>
              </div>
            ))}
          </div>

          <div className={style['action']}>
            <a href="#contact">
              <Button>let’s talk.</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

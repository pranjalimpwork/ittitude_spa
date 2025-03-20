import Button from '../button';
import style from './style.module.scss';

const Clients = () => {
  return (
    <div className={style['container']} id="client">
      <div className={style['wrapper']}>
        <div className={style['content']}>
          <div className={style['page-name']}>clients.</div>
          <div className={style['title']}>
            from innovative <span>startups</span> to industry <b>giants</b>.
          </div>

          <div className={style['action']}>
            <a href="#contact">
              <Button>let’s talk.</Button>
            </a>
          </div>
        </div>
        <img className={style['img']} src="/assets/images/clients.png" alt="" />
        <img className={style['bg']} src="/assets/images/lines-bg.png" alt="" />
      </div>
    </div>
  );
};

export default Clients;

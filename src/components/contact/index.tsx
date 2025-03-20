import Button from '../button';
import style from './style.module.scss';

const Contact = () => {
  return (
    <div className={style['container']} id="contact">
      <div className={style['wrapper']}>
        <div className={style['content']}>
          <div className={style['page-name']}>contact.</div>
          <div className={style['title']}>
            let’s create an impact <b>together</b>.
          </div>

          <div className={style['info']}>
            <a href="tel:+919810716677">
              <span className="material-symbols-outlined">call_log</span>{' '}
              <p>
                +91 <b>98107 16677</b>
              </p>
            </a>
            <a href="mailto:hello@ittitude.com">
              <span className="material-symbols-outlined">
                mark_email_unread
              </span>{' '}
              <p>
                <b>hello</b>@ittitude.com
              </p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">captive_portal</span>{' '}
              ittitude.com
            </a>
          </div>

          <div className={style['action']}>
            <Button type="secondary" kind="small">
              <span className="material-symbols-outlined">downloading</span>
              download deck.
            </Button>
          </div>
        </div>
        <img className={style['img']} src="/assets/images/call.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;

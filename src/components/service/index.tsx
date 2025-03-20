import { cls } from '../../helpers';
import style from './style.module.scss';

const services = [
  {
    icon: 'smart_toy', // Replace with actual icon path or component
    title: 'LLMs and chatbots solutions.'
  },
  {
    icon: 'dataset_linked', // Replace with actual icon path or component
    title: 'Custom blockchain solutions.'
  },
  {
    icon: 'foggy', // Replace with actual icon path or component
    title: 'Cloud native solutions.'
  },
  {
    icon: 'token', // Replace with actual icon path or component
    title: 'Product and tech auditing.'
  },
  {
    icon: 'desktop_cloud', // Replace with actual icon path or component
    title: 'Cloud and infra auditing.'
  },
  {
    icon: 'design_services', // Replace with actual icon path or component
    title: 'UI/UX and design auditing.'
  }
];

const Service = () => {
  return (
    <div className="container" id="services">
      <div className={style['wrapper']}>
        <div className={style['page-name']}>services.</div>
        <div className={style['content']}>
          <div className={style['title']}>
            offerings that ensures a <span>seamless</span> execution.
          </div>

          <div className={style['card-container']}>
            <div className={cls(style['card'], style['accent'])}>
              <span className="material-symbols-outlined">sdk</span>
              <div className={style['title']}>
                holistic product development.
              </div>
            </div>
            <div className={cls(style['card'])}>
              <span className="material-symbols-outlined">frame_source</span>
              <div className={style['title']}>technology consulting.</div>
            </div>
          </div>

          <div className={style['stats-container']}>
            {services.map((data, index) => (
              <div className={style['stats']} key={index}>
                <span className="material-symbols-outlined">{data.icon}</span>
                <div className={style['value']}>{data.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

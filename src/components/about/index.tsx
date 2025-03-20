import { cls } from '../../helpers';

import style from './style.module.scss';

const memebers = [
  {
    img: '/assets/images/rahul.png',
    first: 'Rahul',
    last: 'Singh',
    title: 'CEO.'
  },
  {
    img: '/assets/images/ashok.png',
    first: 'Ashok',
    last: 'Vishwakarma',
    title: 'CTO.'
  },
  {
    img: '/assets/images/person2.png',
    first: 'Anshuman',
    last: 'Thakur',
    title: 'Growth Head.'
  },
  {
    img: '/assets/images/person1.png',
    first: 'Tanpreet',
    last: '',
    title: 'CFO.'
  }
];

const About = () => {
  return (
    <div className={style['container']} id="about">
      <div className={style['wrapper']}>
        <div className={style['page-name']}>about.</div>
        <div className={style['content']}>
          <div className={style['title']}>
            the team that can go <b>above</b> and <span>beyond</span>.
          </div>

          <div className={style['card-container']}>
            {memebers.map((data) => (
              <div className={cls(style['card'])} key={data.title}>
                <img src={data.img} alt={data.title} />

                <div className={style['overlay']}>
                  <div className={style['info']}>
                    <div className={style['first']}>{data.first}</div>
                    {data.last && (
                      <div className={style['last']}>{data.last}</div>
                    )}
                    <div className={style['title']}>{data.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

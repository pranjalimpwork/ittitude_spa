import { ReactNode } from 'react';
import style from './style.module.scss';
import { cls } from '../../helpers';
type ButtonType = {
  type?: 'primary' | 'secondary';
  kind?: 'default' | 'small';
  children?: ReactNode;
};

const Button = ({
  type = 'primary',
  kind = 'default',
  children
}: ButtonType) => {
  return (
    <button
      className={cls(style['button'], {
        [style['secondary']]: type == 'secondary',
        [style['small']]: kind == 'small'
      })}
    >
      {children}
    </button>
  );
};

export default Button;

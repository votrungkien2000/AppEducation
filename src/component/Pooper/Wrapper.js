import classNames from 'classnames/bind';
import styles from './Pooper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Wrapper;

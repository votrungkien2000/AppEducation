import Button from '@/component/Button';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img src="https://avatars.githubusercontent.com/u/18712667?v=4" className={cx('avatar')} alt="" />
        <Button primary className={cx('follow-btn')}>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>QuocNguyenPhu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <p className={cx('name')}>Quốc Nguyễn Phú</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('lable')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('lable')}>Likes</span>
        </p>
      </div>
    </div>
  );
}
export default AccountPreview;

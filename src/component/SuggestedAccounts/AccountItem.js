import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '@/component/Pooper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ label }) {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview></AccountPreview>
        </PopperWrapper>
      </div>
    );
  };

  return (
    <Tippy delay={[800, 0]} offset={[-20, 0]} interactive placement="bottom" render={renderPreview}>
      <div className={cx('account-item')}>
        <img src="https://avatars.githubusercontent.com/u/18712667?v=4" className={cx('avatar')} />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>QuocNguyenPhu</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
          </p>
          <p className={cx('name')}>Quốc Nguyễn Phú</p>
        </div>
      </div>
    </Tippy>
  );
}

AccountItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default AccountItem;

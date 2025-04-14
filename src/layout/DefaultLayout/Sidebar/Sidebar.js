import config from '@/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import classNames from 'classnames/bind';
import {
  RectangleIcon,
  RectangleActiveIcon,
  SquareIcon,
  SquareActiveIcon,
  TriangularIcon,
  TriangularActiveIcon,
} from '@/component/Icon';
// import SuggestedAccounts from '@/component/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="Diện tích hình chữ nhật"
          to={config.routes.Rectangle}
          icon={<RectangleIcon />}
          activeIcon={<RectangleActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="Diện tích hình vuông"
          to={config.routes.Square}
          icon={<SquareIcon />}
          activeIcon={<SquareActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="Diện tích hình tam giác"
          to={config.routes.Triangular}
          icon={<TriangularIcon />}
          activeIcon={<TriangularActiveIcon />}
        ></MenuItem>
      </Menu>
      {/* <SuggestedAccounts label="Suggested accounts" /> */}
      {/* <SuggestedAccounts label="Following accounts" /> */}
    </aside>
  );
}

export default Sidebar;

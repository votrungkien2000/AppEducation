import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import config from '@/config';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCircleQuestion,
//   faCoins,
//   faEarthAsia,
//   faEllipsisVertical,
//   faGear,
//   faKeyboard,
//   faSignIn,
//   faSignOut,
//   faUser,
// } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// import Button from '@/component/Button/Button';
// import Menu from '@/component/Pooper/Menu';
// import { UploadIcon, MessageIcon, InboxIcon } from '@/component/Icon/Icon';
// import Image from '@/component/Image/Image';
// import Search from '../Search';

function Header() {
  const cx = classNames.bind(styles);
  // const currentUser = true;

  // const MENU_ITEMS = [
  //   {
  //     icon: <FontAwesomeIcon icon={faEarthAsia} />,
  //     title: 'English',
  //     children: {
  //       title: 'language',
  //       data: [
  //         {
  //           type: 'language',
  //           code: 'en',
  //           title: 'English',
  //         },
  //         {
  //           type: 'language',
  //           code: 'vi',
  //           title: 'Tiếng Việt',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faCircleQuestion} />,
  //     title: 'Feedback and help',
  //     to: 'http://localhost:3000/feedback',
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faKeyboard} />,
  //     title: 'keyboard shortcuts',
  //   },
  // ];

  // const userMenu = [
  //   {
  //     icon: <FontAwesomeIcon icon={faUser} />,
  //     title: 'View profile',
  //     to: '/@hoaa',
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faCoins} />,
  //     title: 'Get coins',
  //     to: '/coins',
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faGear} />,
  //     title: 'Setting',
  //     to: '/setting',
  //   },
  //   ...MENU_ITEMS,
  //   {
  //     icon: <FontAwesomeIcon icon={faSignOut} />,
  //     title: 'Log out',
  //     to: '/logout',
  //     separate: true,
  //   },
  // ];

  //handle Logic
  // const handleMenuChange = (nemuItem) => {
  //   switch (nemuItem.type) {
  //     case 'language':
  //       break;
  //     default:
  //   }
  // };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/*logo*/}
        <div className={cx('logo')}>
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img className={cx('student-logo')} src={images.logo} alt="student-logo" />
          </Link>
        </div>
        {/* <Search></Search>
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 100]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon></UploadIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon></MessageIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon></InboxIcon>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/04c26c73206e8997c961c50194ee9ae5~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&nonce=286&refresh_token=304ce8f00b41e5ee675a2bf5fd53c346&x-expires=1739606400&x-signature=gnXD93LX1FuUSmAYqTh877Nhm0I%3D&idc=my&ps=13740610&shcp=c1333099&shp=a5d48078&t=4d5b0474"
                alt="Nguyen Van A"
                className={cx('user-avatar')}
              ></Image>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div> */}
      </div>
    </header>
  );
}

export default Header;

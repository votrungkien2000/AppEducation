import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';
import styles from './Rectangle.module.scss';
import Button from '@/component/Button';
import { InputLabel } from '@mui/material';
function Rectangle() {
  const cx = classNames.bind(styles);
  const [length, setLength] = useState(null);
  const [width, setWidth] = useState(null);
  const [error, setError] = useState(false);

  const handelLength = (event) => {
    let inputValue = event.target.value;
    const regex = /^\d*([.,]?\d*)$/;

    // Kiểm tra nếu input hợp lệ (số nguyên hoặc số thập phân, không có chữ)
    if (regex.test(inputValue) && !/[a-zA-Z]/.test(inputValue)) {
      setLength(inputValue);
      setError(''); // Xóa thông báo lỗi nếu hợp lệ
    } else {
      setError('Vui lòng nhập số hợp lệ!'); // Thông báo lỗi nếu không hợp lệ
    }
  };
  const handeWidth = (event) => {
    let inputValue = event.target.value;
    const regex = /^\d*([.,]?\d*)$/;

    // Kiểm tra nếu input hợp lệ (số nguyên hoặc số thập phân, không có chữ)
    if (regex.test(inputValue) && !/[a-zA-Z]/.test(inputValue)) {
      setWidth(inputValue);
      setError(''); // Xóa thông báo lỗi nếu hợp lệ
    } else {
      setError('Vui lòng nhập số hợp lệ!'); // Thông báo lỗi nếu không hợp lệ
    }
  };

  return (
    <Box
      className={cx('container')}
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      // noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          className={cx('length-input')}
          required
          value={length}
          id="outlined-required"
          label="Chiều dài"
          onChange={handelLength}
          sx={{
            '& label': {
              fontSize: '1.4rem', //  tăng size label
            },
            '& input': {
              fontSize: '1.6rem', //  tăng size value (text nhập vào)
            },
          }}
          error={!!error} // Hiển thị lỗi nếu có
          helperText={error} // Hiển thị thông báo lỗi
        />
        <TextField
          className={cx('length-input')}
          required
          id="outlined-required"
          label="Chiều rộng"
          onChange={handeWidth}
          sx={{
            '& label': {
              fontSize: '1.4rem', //  tăng size label
            },
            '& input': {
              fontSize: '1.6rem', //  tăng size value (text nhập vào)
            },
          }}
          error={!!error} // Hiển thị lỗi nếu có
          helperText={error} // Hiển thị thông báo lỗi
        />
        <Button primary className={cx('follow-btn')}>
          Follow
        </Button>
      </div>
    </Box>
  );
}

export default Rectangle;

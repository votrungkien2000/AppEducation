import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';
import styles from './Rectangle.module.scss';
import Button from '@/component/Button';
import HCN from '@/assets/images/DienTichHCN.jpg';
import ButtonMui from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
function Rectangle() {
  const cx = classNames.bind(styles);
  const [length, setLength] = useState(null);
  const [width, setWidth] = useState(null);
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [result, setResult] = useState(null);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState('km²');

  const areaUnits = ['km²', 'ha²', 'm²', 'dm²', 'cm²', 'mm²'];
  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const l = parseFloat(length?.replace(',', '.'));
    const w = parseFloat(width?.replace(',', '.'));
    const isValid = error1 === '' && error2 === '' && length && width && !isNaN(l) && !isNaN(w) && l > w;

    setDisabledBtn(!isValid);
    setResult(null);
  }, [error1, error2, length, width]);

  const handelLength = async (event) => {
    let inputValue = event.target.value;
    const regex = /^\d*([.,]?\d*)$/;

    // Kiểm tra nếu input hợp lệ (số nguyên hoặc số thập phân, không có chữ)
    if (regex.test(inputValue) && !/[a-zA-Z]/.test(inputValue)) {
      setLength(inputValue);
      setError1(''); // Xóa thông báo lỗi nếu hợp lệ
      setDisabledBtn(false);
    } else {
      setError1('Vui lòng nhập số hợp lệ (số tự nhiên hoặc số thập phân)!'); // Thông báo lỗi nếu không hợp lệ
      setDisabledBtn(true);
    }
  };
  const handeWidth = async (event) => {
    let inputValue = event.target.value;
    const regex = /^\d*([.,]?\d*)$/;

    // Kiểm tra nếu input hợp lệ (số nguyên hoặc số thập phân, không có chữ)
    if (regex.test(inputValue) && !/[a-zA-Z]/.test(inputValue)) {
      setWidth(inputValue);
      setError2(''); // Xóa thông báo lỗi nếu hợp lệ
    } else {
      setError2('Vui lòng nhập số hợp lệ (số tự nhiên hoặc số thập phân)!'); // Thông báo lỗi nếu không hợp lệ
    }
  };

  const handelClick = () => {
    setResult(parseFloat(parseFloat(length.replace(',', '.')) * parseFloat(width.replace(',', '.'))));
    setOpen(true);
  };

  return (
    <div className={cx('container')}>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={cx('container')}>
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
              '& MuiTextField-root': {
                marginTop: '0px', //  tăng size value (text nhập vào)
              },
            }}
            error={!!error1} // Hiển thị lỗi nếu có
            helperText={error1} // Hiển thị thông báo lỗi
          />
          <TextField
            className={cx('length-input')}
            required
            value={width}
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
            error={!!error2} // Hiển thị lỗi nếu có
            helperText={error2} // Hiển thị thông báo lỗi
          />
          <Select
            value={unit}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={{
              height: '56px',
              fontSize: '1.6rem',
            }}
          >
            {areaUnits.map((u) => (
              <MenuItem key={u} value={u}>
                {u}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={cx('result')}>
          <Button disabled={disabledBtn} onClick={handelClick} primary large className={cx('result-btn')}>
            Tính
          </Button>
        </div>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          <h2>Diện tích hình chữ nhật</h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={HCN} alt=""></img>
            <div className={cx('detail-result')}>
              <h2>
                Chiều dài hình chữ nhật a: {length} {unit.slice(0, unit.length - 1)}
              </h2>
              <h2>
                Chiều rộng hình chữ nhật b: {width} {unit.slice(0, unit.length - 1)}
              </h2>
              <h2>
                {'=> Diện tích hình chữ nhật S:'} {result} {unit}
              </h2>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonMui onClick={handleClose} autoFocus>
            Thoát
          </ButtonMui>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Rectangle;

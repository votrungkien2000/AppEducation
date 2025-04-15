import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';
import styles from './Square.module.scss';
import Button from '@/component/Button';
import HCN from '@/assets/images/DienTichHV.png';
import ButtonMui from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const cx = classNames.bind(styles);
function Square() {
  const [side, setSide] = useState(null);
  const [error, setError] = useState('');
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
    const s = parseFloat(side?.replace(',', '.'));
    const isValid = error === '' && !isNaN(s);

    setDisabledBtn(!isValid);
    setResult(null);
  }, [error, side]);

  const handelSide = async (event) => {
    let inputValue = event.target.value;
    const regex = /^\d*([.,]?\d*)$/;

    // Kiểm tra nếu input hợp lệ (số nguyên hoặc số thập phân, không có chữ)
    if (regex.test(inputValue) && !/[a-zA-Z]/.test(inputValue)) {
      setSide(inputValue);
      setError(''); // Xóa thông báo lỗi nếu hợp lệ
      setDisabledBtn(false);
    } else {
      setError('Vui lòng nhập số hợp lệ (số tự nhiên hoặc số thập phân)!'); // Thông báo lỗi nếu không hợp lệ
      setDisabledBtn(true);
    }
  };

  const handelClick = () => {
    setResult(parseFloat(parseFloat(side.replace(',', '.')) * parseFloat(side.replace(',', '.'))));
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
            value={side}
            id="outlined-required"
            label="Chiều rộng"
            onChange={handelSide}
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
            error={!!error} // Hiển thị lỗi nếu có
            helperText={error} // Hiển thị thông báo lỗi
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
          <h2>Diện tích hình vuông</h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img className={cx('img')} src={HCN} alt=""></img>
            <div className={cx('detail-result')}>
              <h2>
                Chiều dài cạnh hình vuông a: {side} {unit.slice(0, unit.length - 1)}
              </h2>
              <h2>
                {'=> Diện tích hình vuông S:'} {result} {unit}
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

export default Square;

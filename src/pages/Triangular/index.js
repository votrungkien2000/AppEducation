import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';
import styles from './Triangular.module.scss';
import Button from '@/component/Button';
import TG from '@/assets/images/DienTichTG.jpg';
import ButtonMui from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Triangular() {
  const cx = classNames.bind(styles);
  const [altitude, setAltitude] = useState(null);
  const [side, setSide] = useState(null);
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
    const a = parseFloat(altitude?.replace(',', '.'));
    const s = parseFloat(side?.replace(',', '.'));
    const isValid = error1 === '' && error2 === '' && altitude && side && !isNaN(a) && !isNaN(s);

    setDisabledBtn(!isValid);
    setResult(null);
  }, [error1, error2, altitude, side]);

  const handeAltitude = async (event) => {
    let inputValue = event.target.value;
    const regex = /^\d*([.,]?\d*)$/;

    // Kiểm tra nếu input hợp lệ (số nguyên hoặc số thập phân, không có chữ)
    if (regex.test(inputValue) && !/[a-zA-Z]/.test(inputValue)) {
      setAltitude(inputValue);
      setError1(''); // Xóa thông báo lỗi nếu hợp lệ
      setDisabledBtn(false);
    } else {
      setError1('Vui lòng nhập số hợp lệ (số tự nhiên hoặc số thập phân)!'); // Thông báo lỗi nếu không hợp lệ
      setDisabledBtn(true);
    }
  };

  const handeSide = async (event) => {
    let inputValue = event.target.value;
    const regex = /^\d*([.,]?\d*)$/;

    // Kiểm tra nếu input hợp lệ (số nguyên hoặc số thập phân, không có chữ)
    if (regex.test(inputValue) && !/[a-zA-Z]/.test(inputValue)) {
      setSide(inputValue);
      setError2(''); // Xóa thông báo lỗi nếu hợp lệ
    } else {
      setError2('Vui lòng nhập số hợp lệ (số tự nhiên hoặc số thập phân)!'); // Thông báo lỗi nếu không hợp lệ
    }
  };

  const handelClick = () => {
    setResult(parseFloat(parseFloat(altitude.replace(',', '.')) * parseFloat(side.replace(',', '.')) * 0.5));
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
            value={altitude}
            id="outlined-required"
            label="Chiều cao"
            onChange={handeAltitude}
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
            value={side}
            id="outlined-required"
            label="Độ dài cạnh đáy"
            onChange={handeSide}
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
            <img className={cx('img')} src={TG} alt=""></img>
            <div className={cx('detail-result')}>
              <h2>
                Chiều cao hình tam giác h: {altitude} {unit.slice(0, unit.length - 1)}
              </h2>
              <h2>
                Chiều dài cạnh đáy hình tam giác a: {side} {unit.slice(0, unit.length - 1)}
              </h2>
              <h2>
                {'=> Diện tích hình tam giác S:'} {result} {unit}
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

export default Triangular;

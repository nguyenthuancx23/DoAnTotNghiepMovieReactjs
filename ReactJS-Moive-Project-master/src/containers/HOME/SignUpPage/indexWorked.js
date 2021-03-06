import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
// import { Link } from "react-router-dom"; 
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useUserStyles from "../../../style/useUserStyle";

import { connect } from "react-redux";
import { actFetchSignUp } from "./modules/action";
import useSetBackGround from "./../../../Hook/useSetBackground";
import ErrorUI from "../../../Components/ErrorUI";
import Copyright from "../../../Components/Copyright";

const logo = "/images/logo.png";

function SignUp(props) {
  const classes = useUserStyles();
  const { fetchSighUp, loading, error } = props; // lay tu store redux
  // console.log(props.history);
  /*
  const [state, setState] = useState({
    signUp: {
      ho: "",
      ten: "",
      // hoTen: state.ho + state.ten,
      taiKhoan: "",
      matKhau: "",
      matKhau2: "",
      email: "",
      soDt: "",
      maNhom: "GP09",
      maLoaiNguoiDung: "KhachHang",
    },
    logIn: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  */

  const [state, setState] = useState({
    ho: "",
    ten: "",
    // hoTen: state.ho + state.ten,
    taiKhoan: "",
    matKhau: "",
    matKhau2: "",
    email: "",
    soDt: "",
    maNhom: "GP09",
    maLoaiNguoiDung: "KhachHang",
  });
  // console.log(state);

  useSetBackGround();

  // const validEmpty = () => {
  //   //moi phan tu deu khac ""
  //   return Object.values(state).every((item) => item !== "");
  // };

  const handleChange = (e) => {
    setState(state, (state[e.target.name] = e.target.value));
    // console.log();
    // console.log(state);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      ho,
      ten,
      taiKhoan,
      matKhau,
      // matKhau2,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
    } = state;
    const user = {
      hoTen: `${ho} ${ten}`,
      taiKhoan,
      matKhau,
      // matKhau2,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
    };
    console.log(user);

    fetchSighUp(user, props.history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.wrapper}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logo} alt="user thumbnails" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="ho"
                name="ho"
                variant="outlined"
                required
                fullWidth
                id="ho"
                label="H???"
                autoFocus
                defaultValue={state.ho}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ten"
                label="T??n"
                name="ten"
                autoComplete="ten"
                defaultValue={state.ten}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="T??i kho???n"
                name="taiKhoan"
                autoComplete="taiKhoan"
                defaultValue={state.taiKhoan}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                label="M???t kh???u"
                type="password"
                id="matKhau"
                autoComplete="current-password"
                defaultValue={state.matKhau}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                // error={renderWarn(this)[0]}
                required
                fullWidth
                name="matKhau2"
                label="X??c nh???n m???t kh???u"
                type="password"
                id="matKhau2"
                autoComplete="current-password"
                defaultValue={state.matKhau2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                defaultValue={state.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="soDt"
                label="S??? ??i???n Tho???i"
                name="soDt"
                autoComplete="soDt"
                defaultValue={state.soDt}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Nh???n c??c th??ng b??o v?? ??u ????i m???i nh???t"
              />
            </Grid>
          </Grid>
          {error && <ErrorUI message={error.response.data} />}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                ???? c?? t??i kho???n t???i Tix? ????ng nh???p ngay
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.userSignUpReducer.loading,
    error: state.userSignUpReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSighUp: (user, history) => {
      dispatch(actFetchSignUp(user, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

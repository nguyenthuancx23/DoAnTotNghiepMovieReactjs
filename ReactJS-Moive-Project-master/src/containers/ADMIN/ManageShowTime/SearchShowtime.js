import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { AddShowtimeContext } from ".";
import { connect } from "react-redux";
// import MySelect from "../Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import theatersApi from "../../../api/theatersApi";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";

import bookingApi from "../../../api/bookingApi";
import Swal from "sweetalert2";

import { actFetchDetailMovie } from "../../HOME/DetailPage/modules/action";
import Title from "../Title";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import { prefixHttp, renderTenCumRap } from "./../../../utils/movies";
const getUniqueSet = (arr = [], key) => {
  let newA = arr.map((item) => item[key]);
  return [...new Set(newA)];
};
// import 'da'
// import {AddShowtimeContext} from "./index"
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  adjust: {
    marginTop: theme.spacing(1),
  },
  title: {
    textAlign: "center",
    margin: 0,
    padding: theme.spacing(1),
    width: "100%",
  },
  headCell: {
    background: theme.palette.primary.main,
    color: "#fff",
    fontWeight: "600",
    padding: "6px 16px 6px 16px",
    width: "30%",
    maxWidth: "120px",
  },
  logoImg: {
    width: "calc(100% / 6)",
    display: "inline-block",
    padding: "0 3px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
const giaVeArr = [
  {
    value: 75000,
    label: "75k",
  },
  {
    value: 100000,
    label: "100k",
  },
  {
    value: 120000,
    label: "120k",
  },
  {
    value: 150000,
    label: "150k",
  },
];
function SearchShowtime(props) {
  const classes = useStyles();
  const {
    listMovie,
    listHeThongRap,
    fetchDetailMovie,
    detailMovie,
    loadingDetailMovie,
  } = props;

  const { state, dispatch } = useContext(AddShowtimeContext);

  const {
    maHeThongRap,
    maPhim,
    maCumRap,
    maRap,
    ngayChieuGioChieu,
    giaVe,
    canSubmit,
  } = state;

  // console.log("state", state);

  //Khi ch???n m?? h??? th???ng r???p th?? g???i api l???y danh s??ch c???m r???p t????ng ???ng
  //????? render dnah s??ch c???m r???p theo h??? th???ng r???p ???? ch???n
  const [listCumRap, setListCumRap] = useState([]);
  // ????? render select ch???n r???p
  const [listRap, setListRap] = useState([]);

  //g???i aoi l???y th??ng tin chi ti???t phim khi ch???n maPhim (res s??? l??u tr??n store)
  useEffect(() => {
    let didCancel = false;
    if (maPhim !== "" && !didCancel) {
      fetchDetailMovie(maPhim);
      setDsCumRapDangChieu([]);
    }
    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maPhim]);

  //g???i api c???p nh???t C???m r???p theo maHeThongRap ch???n
  useEffect(() => {
    let didCancel = false;
    if (maHeThongRap) {
      theatersApi
        .getListCumRapTheoHeThong(maHeThongRap)
        .then((res) => {
          if (!didCancel) {
            //trc ???? ???? ch???n h??? th???ng r???p r???i th?? reset maRap, listRap, maCumRap ???? ch???n
            if (listCumRap.length > 0) {
              setListRap([]);
              dispatch({ type: "CHOOSE_AGAIN" });
            }

            setListCumRap(res);
          }
        })
        .catch((err) => {
          if (!didCancel) {
            console.log(err);
          }
        });
    }
    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maHeThongRap]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    //khi ch???n c???m r???p m???i set Data cho ch???n R???p
    if (name === "maCumRap") {
      let prevValue = maCumRap;
      //t???c l?? thao t??c ch???n l???i c???m r???p, th?? reset maRap v?? listRap (v?? maCumRap lu??n, s??? set l???i value m???i ??? dispatch b??n d?????i)
      if (prevValue.length !== 0 && value !== prevValue) {
        setListRap([]);
        dispatch({ type: "CHOOSE_AGAIN" });
      }

      let selectCumRap = listCumRap.find((item) => {
        return item.maCumRap === value;
      });
      //ch???n ???????c c???m r???m th?? g??n danh s??ch R???p v??o
      if (selectCumRap) {
        setListRap(selectCumRap.danhSachRap);
      } else {
        setListRap([]);
      }
    }

    dispatch({ type: "CHOOSE_FIELD", field: name, data: value });

    dispatch({ type: "CHECK_ALLOW" });
  };

  const [selectedDate, setSelectedDate] = useState("2020-10-01T00:00:00");
  const handleDateChange = (name, date, value) => {
    if (date instanceof Date && !isNaN(date)) {
      setSelectedDate(date);
      dispatch({ type: "CHOOSE_FIELD", field: name, data: value });
      dispatch({ type: "CHECK_ALLOW" });
    } else {
      setSelectedDate(date);
      dispatch({ type: "NOT_ALLOW" });
    }
    // console.log(new Date(value));
  };

  const handleCreateShowTime = () => {
    if (!maPhim || !maRap || !ngayChieuGioChieu) {
      alert("b???n ph???i nh???p ????? th??ng tin l???ch chi???u c???n t???p");
      return;
    }

    const data = {
      maPhim: parseInt(maPhim),
      maRap: parseInt(maRap),
      //th??m gi??y
      ngayChieuGioChieu: `${ngayChieuGioChieu}:00`,
      giaVe,
    };

    bookingApi
      .postTaoLichChieu(data)
      .then((res) => {
        Swal.fire("", res, "success");
        //clear h???t ch??? gi??? l???i field maPhim
        dispatch({ type: "CLEAR_FORM" });
        setDsCumRapDangChieu([]);
        // g???i l???i Api
        fetchDetailMovie(maPhim);
      })
      .catch((err) => {
        Swal.fire("L???i", "L???i khi c???p nh???t d??? li???u", "error");
      });
  };

  const [dsCumRapDangChieu, setDsCumRapDangChieu] = useState([]);
  const handleClickImg = (e, arr) => {
    const { name } = e.target; // maHeThongRap

    const selectedHeThongRap = arr.find(
      (heThong) => heThong.maHeThongRap === name
    );
    if (selectedHeThongRap) {
      setDsCumRapDangChieu(selectedHeThongRap.cumRapChieu);
    }
  };

  return (
    <Grid container spacing={2}>
      {/* SECTION LEFT */}
      <Grid item md={7} sm={12} container spacing={2}>
        {/* COL 1 (maPhim, maHeThongRap, maCumRap) */}
        <Grid item xs={12} sm={6}>
          {/* Ch???n phim */}
          <FormControl
            className={classes.formControl}
            required
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor={"chonPhim"}>Ch???n phim</InputLabel>
            <Select
              native
              value={maPhim}
              onChange={handleChange}
              label="Ch???n phim"
              inputProps={{
                name: `maPhim`,
                id: `chonPhim`,
              }}
            >
              <option aria-label="None" value="" />
              {listMovie.map((item) => (
                <option key={item.maPhim} value={item.maPhim}>
                  {item.tenPhim}
                </option>
              ))}
            </Select>
          </FormControl>
          {/* <MySelect/> */}
          {/* Ch???n h??? th???ng r???p */}
          <FormControl
            className={classes.formControl}
            required
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor={"chonHeThongRap"}>
              Ch???n h??? th???ng r???p
            </InputLabel>
            <Select
              native
              value={maHeThongRap}
              onChange={handleChange}
              label="Ch???n h??? th???ng r???p"
              inputProps={{
                name: `maHeThongRap`,
                id: `chonHeThongRap`,
              }}
            >
              <option aria-label="None" value="" />
              {listHeThongRap.map((item) => (
                <option key={item.maHeThongRap} value={item.maHeThongRap}>
                  {item.maHeThongRap}
                </option>
              ))}
            </Select>
          </FormControl>
          {/* Ch???n c???m r???p */}
          <FormControl
            className={classes.formControl}
            required
            fullWidth
            variant="outlined"
            disabled={listCumRap.length === 0}
          >
            <InputLabel htmlFor={"chonCumRap"}>Ch???n c???m r???p</InputLabel>
            <Select
              native
              value={maCumRap}
              onChange={handleChange}
              label="Ch???n c???m r???p"
              inputProps={{
                name: `maCumRap`,
                id: `chonCumRap`,
              }}
            >
              <option aria-label="None" value="" />
              {listCumRap &&
                listCumRap.length > 0 &&
                listCumRap.map((item) => (
                  <option key={item.maCumRap} value={item.maCumRap}>
                    {item.tenCumRap}
                  </option>
                ))}
            </Select>
          </FormControl>
        </Grid>

        {/* COL 2 (maRap, ngayChieuGioChieu, giaVe) */}
        <Grid item xs={12} sm={6}>
          {/* Ch???n r???p (sau khi ch???n c???m r???p m???i c?? data list R???p n??n tr?????c ???? ph???i disable) */}
          <FormControl
            className={classes.formControl}
            required
            fullWidth
            variant="outlined"
            disabled={listRap.length === 0}
          >
            <InputLabel htmlFor={"chonRap"}>Ch???n r???p</InputLabel>
            <Select
              native
              value={maRap}
              onChange={handleChange}
              label="Ch???n r???p"
              inputProps={{
                name: `maRap`,
                id: `chonRap`,
              }}
            >
              <option aria-label="None" value="" />
              {listRap &&
                listRap.length > 0 &&
                listRap.map((item) => (
                  <option key={item.maRap} value={item.maRap}>
                    {item.tenRap}
                  </option>
                ))}
            </Select>
          </FormControl>

          {/* ng??y v?? gi??? */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              fullWidth
              className={classes.formControl}
              required
              inputVariant="outlined"
              ampm={false}
              label="Ch???n ng??y gi??? chi???u"
              value={selectedDate}
              name="ngayChieuGioChieu"
              onChange={handleDateChange.bind(this, "ngayChieuGioChieu")}
              invalidDateMessage='H??y ch???n ?????nh d???ng "dd/mm/yyyy hh:mm"'
              format="dd/MM/yyyy HH:mm"
              minutesStep={5}
            />
          </MuiPickersUtilsProvider>

          {/* Ch???n gi?? v?? */}
          <FormControl
            className={classes.formControl}
            required
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor={"chonGiaVe"}>
              Ch???n gi?? v?? (VIP = 6/5)
            </InputLabel>
            <Select
              native
              value={giaVe}
              onChange={handleChange}
              label="Ch???n gi?? v?? (VIP = 6/5)"
              inputProps={{
                name: `giaVe`,
                id: `chonGiaVe`,
              }}
            >
              {giaVeArr.map((item) => (
                <option key={item.label} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* BUTTON */}
        <Grid item xs={12}>
          {/* Submit */}
          <Button
            variant="contained"
            color="primary"
            className={classes.formControl}
            
            fullWidth
            disabled={!canSubmit}
            onClick={handleCreateShowTime}
          >
            T???o l???ch chi???u
          </Button>
        </Grid>
      </Grid>
      {/* END SECTION LEFT */}

      {/* SECTION RIGHT */}
      <Hidden smDown>
        <Grid item md container spacing={2}>
          {maPhim === "" ? (
            <Title className={classes.title}>Ch???n phim ????? xem th???ng k??!</Title>
          ) : loadingDetailMovie ? (
            <Title className={classes.title}>??ang t???i d??? li???u...</Title>
          ) : (
            <>
              <Grid item xs={12}>
                <Table className={classes.adjust} size="small">
                  <caption>
                    ????y l?? th???ng k?? chung, chi ti???t xem ??? b???ng d?????i.
                  </caption>
                  <TableBody>
                    {/* H??? th???ng r???p ??ang chi???u */}
                    <TableRow>
                      <TableCell
                        className={classes.headCell}
                        component="th"
                        variant="head"
                      >
                        HT r???p
                      </TableCell>
                      <TableCell>
                        {detailMovie?.heThongRapChieu?.map(
                          (heThong, idx, arr) => {
                            return (
                              <img
                                key={heThong.maHeThongRap}
                                className={classes.logoImg}
                                src={prefixHttp(heThong.logo)}
                                alt={heThong.maHeThongRap}
                                name={heThong.maHeThongRap}
                                onClick={(e) => handleClickImg(e, arr)}
                              />
                            );
                          }
                        )}
                      </TableCell>
                    </TableRow>
                    {/* C???m r???p ??ang chi???u */}
                    <TableRow>
                      <TableCell
                        className={classes.headCell}
                        component="th"
                        variant="head"
                      >
                        C???m r???p
                      </TableCell>
                      <TableCell>
                        {dsCumRapDangChieu.length === 0
                          ? "B???m v??o h??nh tr??n ????? hi???n th??? c???m r???p ??ang chi???u t????ng ???ng"
                          : dsCumRapDangChieu.map((cumRap, idx) => {
                              const [preName, longName] = renderTenCumRap(
                                cumRap
                              );
                              return (
                                <div key={cumRap.maCumRap}>
                                  {/* <span>{idx + 1}. </span> */}
                                  <span className={preName}>
                                    {idx + 1}. {preName}
                                  </span>{" "}
                                  -{longName}
                                </div>
                              );
                            })}
                      </TableCell>
                    </TableRow>
                    {/* L???ch chi???u */}
                    <TableRow>
                      <TableCell
                        className={classes.headCell}
                        component="th"
                        variant="head"
                      >
                        L???ch chi???u
                      </TableCell>
                      <TableCell>
                        {dsCumRapDangChieu.length === 0
                          ? "B???m v??o h??nh tr??n ????? hi???n th??? c??c l???ch chi???u t????ng ???ng v???i c???m r???p"
                          : dsCumRapDangChieu.map((cumRap, idx) => {
                              return (
                                <div key={cumRap.maCumRap}>
                                  <span>
                                    {idx + 1}. {cumRap.lichChieuPhim.length}{" "}
                                    l???ch chi???u phim ??? -{" "}
                                    {getUniqueSet(
                                      cumRap.lichChieuPhim,
                                      "tenRap"
                                    ).join(", ")}
                                  </span>
                                </div>
                              );
                            })}
                      </TableCell>
                    </TableRow>
                    {/* Ng??y chi???u */}
                    <TableRow>
                      <TableCell
                        className={classes.headCell}
                        component="th"
                        variant="head"
                      >
                        Ng??y chi???u
                      </TableCell>
                      <TableCell>
                        {dsCumRapDangChieu.length === 0
                          ? "C??c ng??y chi???u"
                          : dsCumRapDangChieu.map((cumRap, idx) => {
                              // const mangNgayGioChieu = getUniqueSet(cumRap.lichChieuPhim,'ngayChieuGioChieu');
                              const styleMangNgayGio = cumRap.lichChieuPhim.map(
                                (item) => ({
                                  ...item,
                                  ngayChieuGioChieu: new Date(
                                    item.ngayChieuGioChieu
                                  ).toLocaleDateString("it-IT"),
                                })
                              );
                              return (
                                <div key={cumRap.maCumRap}>
                                  <span>
                                    {idx + 1}.{" "}
                                    {getUniqueSet(
                                      styleMangNgayGio,
                                      "ngayChieuGioChieu"
                                    ).join(", ")}
                                  </span>
                                </div>
                              );
                            })}
                      </TableCell>
                    </TableRow>
                    {/* Gi??? chi???u */}
                    <TableRow>
                      <TableCell
                        className={classes.headCell}
                        component="th"
                        variant="head"
                      >
                        Gi??? chi???u
                      </TableCell>
                      <TableCell>
                        {dsCumRapDangChieu.length === 0
                          ? "C??c gi??? chi???u"
                          : dsCumRapDangChieu.map((cumRap, idx) => {
                              // const mangNgayGioChieu = getUniqueSet(cumRap.lichChieuPhim,'ngayChieuGioChieu');
                              const styleMangNgayGio = cumRap.lichChieuPhim.map(
                                (item) => ({
                                  ...item,
                                  ngayChieuGioChieu: new Date(
                                    item.ngayChieuGioChieu
                                  ).toLocaleTimeString("it-IT"),
                                })
                              );
                              return (
                                <div key={cumRap.maCumRap}>
                                  <span>
                                    {idx + 1}.{" "}
                                    {getUniqueSet(
                                      styleMangNgayGio,
                                      "ngayChieuGioChieu"
                                    ).join(", ")}
                                  </span>
                                </div>
                              );
                            })}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </>
          )}
        </Grid>
      </Hidden>
      {/* END SECTION RIGHT */}
    </Grid>
  );
}

SearchShowtime.propTypes = {
  listMovie: PropTypes.array.isRequired,
  listHeThongRap: PropTypes.array.isRequired,
  detailMovie: PropTypes.object,
  loadingDetailMovie: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    listMovie: state.listMovieReducer.listMovie,
    listHeThongRap: state.listHeThongRapReducer.listHeThongRap,
    detailMovie: state.detailMovieReducer.detailMovie,
    loadingDetailMovie: state.detailMovieReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetCumRapTheoHeThong: (maHTR) => {
      // dispatch()
    },
    fetchDetailMovie: (maPhim) => {
      dispatch(actFetchDetailMovie(maPhim));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchShowtime);

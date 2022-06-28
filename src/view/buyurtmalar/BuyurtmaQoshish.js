import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import config from "./../../config.json";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import './Buyurtmachi.css'
const BuyurtmaQoshish = () => {
  const navigate = useNavigate();
  const Close = () => {
    navigate("/buyrtma");
  };
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [xona, setXona] = useState([]);
  const [lavozim, setLavozim] = useState([]);
  const [bolim, setBolim] = useState([]);
  const [buyrtmachi, setBuyrtmachi] = useState({
    fish: "",
    bolim: "",
    kabinet: "",
    lavozim: "",
    tel: "",
  });

  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xona`, TOKEN)
      .then(
        (res) => {
          setXona(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    axios
      .get(`${config.SERVER_URL}lavozim`, TOKEN)
      .then(
        (res) => {
          setLavozim(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    axios
      .get(`${config.SERVER_URL}bolim`, TOKEN)
      .then(
        (res) => {
          setBolim(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, []);
  const changeHandler = (e) => {
    setBuyrtmachi({ ...buyrtmachi, [e.target.name]: e.target.value });
  };
  const Send = async () => {
    await axios
      .post(`${config.SERVER_URL}cilient`, buyrtmachi, TOKEN)
      .then(
        (res) => {
          alert("buyrtmachi malumotlari qo'shildi.");
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    navigate("/buyrtma");
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} />
      </div>
      <div className="w-100  px-5 py-2 position-relative">
        <h4 className="title-1 mt-2">
          Буюртмачи қўшиш
        </h4>
        <div className="page-bg mt-3">
          <div className="position-relative w-100 me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form action="" className="buyurtmachi-form ps-5 pt-4 pe-5 pb-2 w-100"
            onSubmit={Submit}
          >
            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Ф.И.Ш:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="text"
                  name="fish"
                  value={buyrtmachi.fish}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Бўлим:</label>
              <div className="col-sm-10">
                <select className="form-select  slect-buyurtma"
                  id="bolim"
                  onChange={changeHandler}
                  value={buyrtmachi.bolim}
                  name="bolim"
                >
                  {bolim.map((item) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Хона:</label>
              <div className="col-sm-10">
                <select className="form-select  slect-buyurtma"
                  id="kabinet"
                  onChange={changeHandler}
                  value={buyrtmachi.kabinet}
                  name="kabinet"
                >
                  {xona.map((item) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Лавозими:</label>
              <div className="col-sm-10">
                <select className="form-select  slect-buyurtma"
                  id="lavozim"
                  onChange={changeHandler}
                  value={buyrtmachi.lavozim}
                  name="lavozim"
                >
                  {lavozim.map((item) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Телефон:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  id="tel"
                  type="text"
                  placeholder="+998"
                  name="tel"
                  value={buyrtmachi.tel}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                name="Йангилаш"
                ButtonFunction={Send}
                ButtonStyle="oq-button"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyurtmaQoshish;

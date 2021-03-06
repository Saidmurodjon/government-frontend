import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";

const TashkilotQoshish = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };

  const [Text, setText] = useState({
    name: "",
    admin: "",
    login: "",
    parol: "",
  });

  const Submit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setText({ ...Text, [e.target.name]: e.target.value });
  };

  const Close = () => {
    navigate("/tashkilot");
  };

  // Qo'shish funksiyasi
  const AddTash = async () => {
    if (Text.name) {
      try{
        const res = await axios.post(`${config.SERVER_URL}tashkilot`, Text, TOKEN)
        if(res.status===200){
          alert("Tashkilot qo'shildi");
          navigate("/tashkilot");
        }
      }catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }else{
      alert("Tashkilot kiriting");
    }
  };
  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <div className="addTashkilot bg-light mx-3 mt-3 py-2">
        <form
          onSubmit={Submit}
          className="m-5 py-5 pe-5 bg-white addTash position-relative"
        >
          <i className="bi bi-x" onClick={Close}></i>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Ташкилот номи:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                name="name"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Администратор Ф.И.О.:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                name="admin"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Логин(телефон):
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                name="login"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Пароль:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                name="parol"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="mt-5">
            <Button
              ButtonStyle={"oq-button d-block mx-auto"}
              name="Қўшиш"
              ButtonFunction={AddTash}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TashkilotQoshish;

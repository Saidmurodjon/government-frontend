import React, { useState } from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

const QurilmaQoshish = () => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  const [device, setDevice] = useState({
    name: "",
    tashkilot_id: tashkilot_id,
    date: new Date(),
  });

  const changeHandler = (e) => {
    setDevice({ ...device, [e.target.name]: e.target.value });
  };
  // Qo'shish funksiyasi
  const Add = async () => {
    if (device.name) {
      try {
        const res = await axios.post(
          `${config.SERVER_URL}device`,
          device,
          TOKEN
        );
        if (res.status === 200) {
          alert("Kategoriya qo'shildi");
          setDevice({
            name: "",
            date: new Date(),
          });
          navigate(`/qurilmakategoriya/${res.data._id}`);
        }
      } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    } else {
      alert("Ma'lumot kiriting");
    }
  };

  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <h1 className="ms-5">Қурилмалар тоифаси</h1>
      <div className="d-flex justify-content-end me-5">
        <Button ButtonStyle={"oq-button"} name="Категория қўшиш" />
      </div>
      <div className="AddDevice bg-light mt-5 p-3">
        <div className=" mt-3 bg-white p-3">
          <div className="d-flex pt-3">
            <h2>Категория номи:</h2>
            <input
              name="name"
              onChange={changeHandler}
              type="text"
              className="form-control form-control-lg ms-3 ps-3 deviceName bg-light"
            />
          </div>
          <div className="my-4 d-flex justify-content-center">
            <Button
              ButtonStyle={"oq-button"}
              name="Қўшиш"
              ButtonFunction={Add}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QurilmaQoshish;

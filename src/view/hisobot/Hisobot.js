import React, { useRef, useState, useEffect } from "react";
import Dalolatnoma from "../../components/dalolatnoma/Dalolatnoma";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import config from "../../config.json";
import ChandeDalolatnoma from "../../components/change-dalolatnoma/ChangeDalolatnoma";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import { useNavigate } from "react-router-dom";
import "./Hisobot.css";

export default function Hisobot() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const componentRef = useRef();
  const [text, setText] = useState([]);
  const [report, setReport] = useState([]);

  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xisobot`, TOKEN)
      .then(
        (res) => {
          setText(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/login");
          }
        }
      )
      .catch((error) => console.log(error.status));
  }, [showModal]);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const ShowModal = () => {
    setShowModal(false);
  };
  // console.log(TOKEN);

  // Dalolatnoma uchun fiter qilingan hisobotlar
  const Filters = () => {
    const time = JSON.parse(localStorage.getItem("time"));
    axios
      .post(`${config.SERVER_URL}report/filter`, time, TOKEN)
      .then(
        (res) => {
          setReport(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/login");
          }
        }
      )
      .catch((error) => console.log(error));
  };
  // console.log(report);
  return (
    <>
      <Navbar />
      <div className="">
        <div className="row justify-content-center">
          <div className="col-md-12  d-flex justify-content-center align-items-center">
            <div className="hisobot-filter">
              <div className="row">
                <div className="col-12 "></div>
                <div className="col-md-6">
                  <h3>Xisobot</h3>
                </div>
                <div className="col-md-6">
                  <div className="col-md-6 float-end">
                    <Filter FilterFunction={Filters} />

                    <button
                      className="btn btn-light p-2 float-end"
                      onClick={handlePrint}
                    >
                      Print
                    </button>
                    <button
                      onClick={() => setShowModal(true)}
                      className="btn btn-light p-2 float-end "
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 d-flex justify-content-center">
            <Dalolatnoma ref={componentRef} text={text[0]} reports={report} />
            {showModal ? (
              <ChandeDalolatnoma text={text[0]} Show={ShowModal} />
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </>
  );
}

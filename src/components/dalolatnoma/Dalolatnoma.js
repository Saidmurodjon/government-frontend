import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import gerb from "../../assets/gerb.jpg";

import "./Dalolatnoma.css";
const Dalolatnoma = React.forwardRef((props, ref) => {
  const { text = [], reports = [] } = props;
  const [service, setService] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [total, setTotal] = useState();
  console.log(reports);
  useEffect(() => {
    if (reports.length > 0) {
      setQuantity([]);
      let t = 0;
      const newArr = [];
      for (let i = 0; i < service.length; i++) {
        const newService = reports.filter((elem) =>
          elem.category.toLowerCase().includes(service[i].name.toLowerCase())
        );
        if (newService.length > 0) {
          newArr.push({
            name: newService[0].category,
            quantity: newService.length,
          });
          t += newService.length;
        }
      }
      setTotal(t);
      setQuantity(newArr);
    }
  }, [reports]);
  // console.log(total);
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}ish`)
      .then((res) => {
        setService(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(reports);
  return (
    <>
      <div
        ref={ref}
        className="dalolatnoma d-flex justify-content-center align-items-center pt-5"
      >
        {text.length <= 0 ? (
          <>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          <>
            <div className="dalolatnoma-print">
            <div className="w-100">
              <div className="row justify-content-center">
                <div className="col-5 justify-content-center">
                  <h4 className="text-center">
                    O'ZBEKISTON RESPUBLIKASI {text.t1.toUpperCase()} "ELEKTRON
                    XOKIMYATNI ROVOJLANTIRISH MARKAZI"
                  </h4>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                  <img className="img" src={gerb} alt="gerb" />
                </div>
                <div className="col-5">
                  <h4 className="text-center">{text.t2}</h4>
                </div>
                <div className="col-md-12">
                  <h6 className="location mb-0">{text.t3}</h6>
                  {/* <img className="line" src={line} alt="" /> */}
                  <div className="line"></div>
                </div>
                <div className="col-md-12">
                  <h3 className="text-center">
                    <b>Далолатнома</b>
                  </h3>
                </div>
                <div className="col-md-6">{new Date().toDateString()}</div>
                <div className="col-md-5">
                  <h3 className="d-inline float-end">{121}</h3>
                </div>
                <div className="col-md-11">
                  <h4>
                  &nbsp;&nbsp;&nbsp;Биз куйида имзо чекувчилар: Бажарувчи {text.t1} Электрон
                    хокимятни ривожлантириш маркази номидан директори{" "}
                    <b>{text.t4}</b>&nbsp;
                    бир томондан. Бажарувчи Фаргона вилоят хокимлиги иккинчи
                    томинидан ушбу далолатномани {""}
                    {text.t1} Электрон хокимятни ривожлантириш маркази томонидан
                    ку'рсатилган хизматларни тасдиқлаш учун туздик.
                  </h4>
                  <h4>
                    &nbsp; &nbsp; &nbsp;
                    <span className="">
                      Жорий ойда марказ томонидан жами
                      <p className="d-inline text-primary">
                        {" "}
                        {reports.length > 0 ? (
                          total + " марта "
                        ) : (
                          <>
                            <p className="d-inline text-danger">
                              {" "}
                              qiymat mavjud emas
                            </p>
                          </>
                        )}
                      </p>
                      <span className=""> </span>
                      хизматлар ку'рсатилди. <br />
                      <p className="d-inline">Жумладан :</p>
                      {reports.length > 0 ? (
                        quantity.map((item, index) => {
                          return (
                            <p key={index} className="d-inline">
                              {item.name}{" "}
                              <span className="d-inline text-primary">
                                {item.quantity} марта ,{" "}
                              </span>
                            </p>
                          );
                        })
                      ) : (
                        <>
                          <p className="d-inline text-danger">
                            qiymat mavjud emas{" "}
                          </p>
                        </>
                      )}
                      текшириб камчиликлари бартараф етилди ва профилактика
                      ишлари олиб борилди
                    </span>
                  </h4>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </>
  );
});

export default Dalolatnoma;

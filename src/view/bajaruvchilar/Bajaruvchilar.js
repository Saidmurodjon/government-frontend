import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components/bajaruvchilar/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
function Bajaruvchilar(search) {
  const navigate = useNavigate();
  const [searchPage, setSearchPage] = useState([]);
  const [bajaruvchilar, setBajaruvchilar] = useState([]);

  useEffect(() => {
    const newService = bajaruvchilar.filter((elem) =>
      elem.fish.toLowerCase().includes(search.toLowerCase())
    );
    // setSearchPage(newService);
  }, [search]);
  console.log(searchPage);
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}user`)
      .then((res) => {
        setBajaruvchilar(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  async function Bqoshish() {
    navigate("/bajaruvchiqoshish");
  }
  return (
    <>
      <Navbar search={true} searchValue={bajaruvchilar} />

      <div className="d-flex justify-content-center">
        <div className="page-width">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <h4>bajaruvchi</h4>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <Button
                name={"Бажарувчи қўшиш"}
                ButtonFunction={Bqoshish}
                ButtonStyle="oq-button"
              />
            </div>

            <BList
              bajaruvchilar={
                searchPage.length <= 0 ? bajaruvchilar : searchPage
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Bajaruvchilar;

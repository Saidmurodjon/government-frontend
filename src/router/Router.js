import { Route, Routes } from "react-router-dom";
import Home from "../view/home/Home";
import Bajaruvchi from "../view/bajaruvchilar/Bajaruvchilar";
import BajaruvchiQoshish from "../view/bajaruvchilar/BajaruvchiQoshish";
import BajaruvchiYangilash from "../view/bajaruvchilar/BajaruvchiYangilash";
import Bolim from "../view/bolimlar/Bolimlar";
import BolimQoshish from "../view/bolimlar/BolimlarQoshish";
import Buyurtmalar from "../view/buyurtmalar/Buyurtmalar";
import BuyurtmalarQoshish from "../view/buyurtmalar/BuyurtmaQoshish";
import Hisobot from "../view/hisobot/Hisobot";
import Ishlar from "../view/ishlarroyhati/IshlarRoyhati";
import IshlarKategoriya from "../view/ishlarroyhati/IshKategoriyaQoshish";
import IshlarKategoriyaUpdate from "../view/ishlarroyhati/IshKategoriyaUpdate";
import Lavozim from "../view/lavozimlar/Lavozimlar";
import LavozimUpdate from "../view/lavozimlar/LavozimUpdate";
import LavozimQoshish from "../view/lavozimlar/LavozimQoshish";
import QurilmaToifa from "../view/qurilmalar/QurilmaToifa";
import QurilmaQoshish from "../view/qurilmalar/QurilmaQoshish";
import QurilmaKategoriya from "../view/qurilmalar/QurilmaKategoriya";
import Statistika from "../view/statistika/Statistika";
import Tashkilot from "../view/tashkilotlar/Tashkilotlar";
import TashkilotQoshish from "../view/tashkilotlar/TashkilotQoshish";
import Xona from "../view/xonalar/Xonalar";
import XonaQoshish from "../view/xonalar/XonaQoshish";
import XonaUpdate from "../view/xonalar/XonaUpdate";
import BoshSahifa from "../view/boshsahifa/BoshSahifa";
import BolimlarEdit from "../view/bolimlar/BolimlarEdit";
import TashkilotUpdate from "../view/tashkilotlar/TashkilotUpdate";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BoshSahifa />} />
        <Route path="/bajaruvchi" element={<Bajaruvchi />} />
        <Route path="/bajaruvchiqoshish" element={<BajaruvchiQoshish />} />
        <Route path="/bajaruvchi/:id" element={<BajaruvchiYangilash />} />
        <Route path="/bolim" element={<Bolim />} />
        <Route path="/bolim/:id" element={<BolimlarEdit />} />
        <Route path="/bolimqoshish" element={<BolimQoshish />} />
        <Route path="/buyurtma" element={<Buyurtmalar />} />
        <Route path="/buyurtmaqoshish" element={<BuyurtmalarQoshish />} />
        <Route path="/hisobot" element={<Hisobot />} />
        <Route path="/ishlar" element={<Ishlar />} />
        <Route path="/ishkategoriya" element={<IshlarKategoriya />} />
        <Route path="/ishlar/:id" element={<IshlarKategoriyaUpdate />} />
        <Route path="/lavozim" element={<Lavozim />} />
        <Route path="/lavozim/:id" element={<LavozimUpdate />} />
        <Route path="/lavozimqoshish" element={<LavozimQoshish />} />
        <Route path="/qurilmatoifa" element={<QurilmaToifa />} />
        <Route path="/qurilmakategoriya" element={<QurilmaKategoriya />} />
        <Route path="/qurilmaqoshish" element={<QurilmaQoshish />} />
        <Route path="/statistika" element={<Statistika />} />
        <Route path="/tashkilot" element={<Tashkilot />} />
        <Route path="/tashkilotqoshish" element={<TashkilotQoshish />} />
        <Route path="/kabinet" element={<Xona />} />
        <Route path="/kabinetqoshish" element={<XonaQoshish />} />
        <Route path="/kabinetyangilash" element={<XonaUpdate />} />
        <Route path="/tashkilot/:id" element={<TashkilotUpdate />} />
      </Routes>
    </>
  );
}
export default Router;

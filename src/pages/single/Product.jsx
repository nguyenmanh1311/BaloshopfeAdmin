import "./single.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

import { UserService } from "~/services/user.service";

const Product = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getUser() {
      const res = await UserService.getUser(userId);
      setData(res.data);
    }
    getUser();
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={(e) => handleEdit(e)}>
              Chỉnh sửa
            </div>
            <h1 className="title">Thông tin</h1>
            <div className="item">
              <img src="" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  {data.map((item) => item.username)}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Giới tính:</span>
                  <span className="itemValue">
                    {data.map((item) => item.gender)}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">
                    {data.map((item) => item.id)}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">
                    {data.map((item) => item.address)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Giao dịch mới nhất</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Product;

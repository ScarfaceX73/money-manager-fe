import Cards from "./cards";
import AddModal from "./add-modal";
import { fetchIncome } from "../../services/income";
import { fetchExpense } from "../../services/expense";
import { useState } from "react";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const fetchData = async () => {
    try {
      const userIncome = await fetchIncome();
      const userExpense = await fetchExpense();
      const tempData = [...(userIncome ?? []), ...(userExpense ?? [])];
      setFilterData(tempData);
      setTableData(tempData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex h-24 items-center w-full">
        <div className="justify-start flex items-center h-12 grow">
          dashboard --- please add some data as there is no data in your account then try filter function and other functions.
        </div>
        <AddModal fetchData={fetchData} />
      </div>
      <Cards fetchData={fetchData} tableData={tableData} filterData={filterData} setTableData={setTableData} setFilterData={setFilterData} />
    </>
  );
};

export default Dashboard;

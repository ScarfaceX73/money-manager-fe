import Select from "react-select";
import { useState, useMemo, useEffect } from "react";
import { fetchIncome, deleteIncome } from "../../services/income";
import { fetchExpense, deleteExpense } from "../../services/expense";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FiDelete } from "react-icons/fi";
import Modal from "react-modal";
import "react-tabs/style/react-tabs.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

Modal.setAppElement("#root");

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

const typeOptions = [
  { label: "Income", value: "income" },
  { label: "Expenditure", value: "expenditure" },
];

const workOptions = [
  { label: "Personal", value: "personal" },
  { label: "Office", value: "office" },
];

const Cards = ({ tableData, setTableData, filterData, fetchData }) => {
  const [type, setType] = useState({});
  const [workSpace, setWorkSpace] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const userIncome = await fetchIncome();
  //     const userExpense = await fetchExpense();
  //     const tempData = [...(userIncome ?? []), ...(userExpense ?? [])];
  //     setFilterData(tempData);
  //     setTableData(tempData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStartDate = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDate = (newValue) => {
    setEndDate(newValue);
  };

  const handleApply = () => {
    const payload = {
      type: type?.value,
      workSpace: workSpace?.value,
      startDate: startDate,
      endDate: endDate,
    }

    if (payload.type === "income") {
      if (payload.workSpace === undefined && payload.startDate === null && payload.endDate === null) {
        let res = fData.filter((ele) => ele.type === "income");
        setTableData(res);
      } else if (payload.workSpace === undefined && payload.startDate !== null && payload.endDate !== null) {
        let res = fData.filter((ele) => ele.type === "income" && new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
        setTableData(res);
      } else if (payload.workSpace === "personal" && payload.startDate === null && payload.endDate === null) {
        let res = fData.filter((ele) => ele.type === "income" && ele.workSpace === "personal");
        setTableData(res);
      } else if (payload.workSpace === "office" && payload.startDate === null && payload.endDate === null) {
        let res = fData.filter((ele) => ele.type === "income" && ele.workSpace === "office");
        setTableData(res);
      } else if (payload.workSpace === "personal" && payload.startDate !== null && payload.endDate !== null) {
        let res = fData.filter((ele) => ele.type === "income" && ele.workSpace === "personal" && new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
        setTableData(res);
      } else if (payload.workSpace === "office" && payload.startDate !== null && payload.endDate !== null) {
        let res = fData.filter((ele) => ele.type === "income" && ele.workSpace === "office" && new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
        setTableData(res);
      } else {
        console.log("ERROR")
      }
    } else if (payload.type === "expenditure") {
      if (payload.workSpace === undefined && payload.startDate === null && payload.endDate === null) {
        let res = fData.filter((ele) => ele.type === "expense");
        setTableData(res);
      } else if (payload.workSpace === "personal" && payload.startDate === null && payload.endDate === null) {
        let res = fData.filter((ele) => ele.type === "expense" && ele.workSpace === "personal");
        setTableData(res);
      } else if (payload.workSpace === "office" && payload.startDate === null && payload.endDate === null) {
        let res = fData.filter((ele) => ele.type === "expense" && ele.workSpace === "office");
        setTableData(res);
      } else if (payload.workSpace === "personal" && payload.startDate !== null && payload.endDate !== null) {
        let res = fData.filter((ele) => ele.type === "expense" && ele.workSpace === "personal" && new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
        setTableData(res);
      } else if (payload.workSpace === "office" && payload.startDate !== null && payload.endDate !== null) {
        let res = fData.filter((ele) => ele.type === "expense" && ele.workSpace === "office" && new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
        setTableData(res);
      } else {
        console.log("ERROR")
      }
    } else if (payload.type === undefined) {
      if (payload.workSpace === "personal") {
        if (payload.startDate === null && payload.endDate === null) {
          let res = fData.filter((ele) => ele.workSpace === "personal");
          setTableData(res);
        } else {
          let res = fData.filter((ele) => ele.workSpace === "personal" && new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
          setTableData(res);
        }
      } else if (payload.workSpace === "office") {
        if (payload.startDate === null && payload.endDate === null) {
          let res = fData.filter((ele) => ele.workSpace === "office");
          setTableData(res);
        } else {
          let res = fData.filter((ele) => ele.workSpace === "office" && new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
          setTableData(res);
        }
      } else if (payload.workSpace === undefined && payload.startDate !== null && payload.endDate !== null) {
        let res = fData.filter((ele) => new Date(ele.startDate) >= startDate && new Date(ele.startDate) <= endDate);
        setTableData(res);
      } else if (payload.startDate === null && payload.endDate === null) {
        alert("Please fill the filter to get the data");
      }
    };
    fetchData();
  }

  const tData = useMemo(() => {
    return tableData;
  }, [tableData]);

  const fData = useMemo(() => {
    return filterData;
  }, [filterData]);




  const handleDelete = async (_id) => {
    const tableData = tData.filter((row) => row._id !== _id);
    try {
      await deleteIncome(_id)
      this.setTableData({ tableData: tableData });
    } catch (error) {
      console.log(error);
    }
    try {
      await deleteExpense(_id)
      this.setTableData({ tableData: tableData });
    }
    catch (error) {
      console.log(error);
    }
    fetchData();
  };

  return (
    <>
      <div className="h-24 grow">
        <div className="w-full h-full flex items-center">
          <div className="w-64 mx-5">
            <Select
              placeholder="Type"
              options={typeOptions}
              onChange={(val) => {
                setType(val)
              }} />
          </div>
          <div className="w-64 mx-5">
            <Select
              placeholder="Work Space"
              options={workOptions}
              onChange={(val) => {
                setWorkSpace(val);
              }} />
          </div>
          <div className="w-64 mx-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DatePicker
                  views={['day']}
                  label="Start date"
                  value={startDate}
                  onChange={handleStartDate}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div className="w-64 mx-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DatePicker
                  views={['day']}
                  label="Last Date"
                  value={endDate}
                  onChange={handleEndDate}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <button
            className="mr-5 w-24 h-12 bg-blue-500 text-white rounded shadow-lg"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
      <div>
        <div>
          <TableContainer component={Paper} style={{ borderRadius: "0px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date and Time</StyledTableCell>
                  <StyledTableCell align="center">Type</StyledTableCell>
                  <StyledTableCell align="center">Work Space</StyledTableCell>
                  <StyledTableCell align="center">Source</StyledTableCell>
                  <StyledTableCell align="center">Amount</StyledTableCell>
                  <StyledTableCell align="center">Description</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tData.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row.startDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.type}</StyledTableCell>
                    <StyledTableCell align="center">{row.workSpace}</StyledTableCell>
                    <StyledTableCell align="center">{row.source}</StyledTableCell>
                    <StyledTableCell align="center">{row.amount}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <button onClick={(e) => handleDelete(row._id)}>
                        <FiDelete size={20} className="mr-5 justify-center items-center w-full" />
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};


export default Cards;


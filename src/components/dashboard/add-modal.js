import { useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import * as React from "react";
import AmountToAdd from "./amount";
import { createIncome } from "../../services/income";
import { createExpense } from "../../services/expense";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const workOptions = [
  { label: "Personal", value: "personal" },
  { label: "Office", value: "office" },
];

const expenseSrcOption = [
  { label: "Fuel", value: "fuel" },
  { label: "Movie", value: "movie" },
  { label: "Food", value: "food" },
  { label: "Medical", value: "medical" },
  { label: "Rent", value: "rent" },
  { label: "Loan", value: "loan" },
  { label: "Other", value: "other" },
];

const incomeSrcOption = [
  { label: "Salary", value: "salary" },
  { label: "Interest", value: "Interest" },
  { label: "Stock", value: "stock" },
  { label: "Other", value: "Other" },
];

Modal.setAppElement("#root");

const AddModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(dayjs("2014-08-18T21:11:00"));
  const [workSpace, setWorkSpace] = useState({});
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [source, setSource] = useState({});
  const [error, setError] = useState(undefined);

  const handleAddIncome = async () => {
    const payload = {
      startDate: startDate,
      workSpace: workSpace?.value,
      source: source?.value,
      amount: Number(amount),
      description: description,
    };
    try {
      await createIncome(payload);
    } catch (error) {
      setError(error?.message);
    }
  };

  const handleAddExpense = async () => {
    const payload = {
      startDate: startDate,
      workSpace: workSpace?.value,
      source: source?.value,
      amount: Number(amount),
      description: description,
    };
    console.log(payload);
    try {
      await createExpense(payload);
    } catch (error) {
      console.log("here");
      setError(error?.message);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (newValue) => {
    setStartDate(newValue);
  };

  const renderIncomeForm = () => {
    return (
      <div className="w-full h-full grid grid-cols-2 gap-3 p-5">
        <div className="">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Date&Time picker"
                value={startDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div className="">
          <Select
            placeholder="Select..."
            options={workOptions}
            onChange={(val) => {
              setWorkSpace(val);
            }}
          />
        </div>
        <div className="">
          <AmountToAdd amount={amount} setAmount={setAmount} />
        </div>
        <div className="">
          <Select
            placeholder="source"
            options={incomeSrcOption}
            onChange={(val) => {
              setSource(val);
            }}
          />
        </div>
        <div className="col-span-2">
          <input
            placeholder="description"
            className="h-12 border w-full p-3"
            onChange={(e) => {
              setDescription(e?.target?.value);
            }}
          />
        </div>
        <div>
          <button
            className="mr-5 w-24 h-12 bg-blue-500 text-white rounded shadow-lg"
            onClick={handleAddIncome}
          >
            Add
          </button>
        </div>
      </div>
    );
  };

  const renderExpenseForm = () => {
    return (
      <div className="w-full h-full grid grid-cols-2 gap-3 p-5">
        <div className="">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Date&Time picker"
                value={startDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div className="">
          <Select
            placeholder="Select..."
            options={workOptions}
            onChange={(val) => {
              setWorkSpace(val);
            }}
          />
        </div>
        <div className="">
          <AmountToAdd amount={amount} setAmount={setAmount} />
        </div>
        <div className="">
          <Select
            placeholder="source"
            options={expenseSrcOption}
            onChange={(val) => {
              setSource(val);
            }}
          />
        </div>
        <div className="col-span-2">
          <input
            placeholder="description"
            className="h-12 border w-full p-3"
            onChange={(e) => {
              setDescription(e?.target?.value);
            }}
          />
        </div>
        <div>
          <button
            className="mr-5 w-24 h-12 bg-blue-500 text-white rounded shadow-lg"
            onClick={handleAddExpense}
          >
            Add
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <button
        onClick={openModal}
        className="mr-5 w-24 h-12 bg-blue-500 text-white rounded shadow-lg"
      >
        Add
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-full">
          <div className="flex justify-between w-full">
            <div>Input</div>
            <button onClick={closeModal}>
              <FiX size={20} className="text-red-500" />
            </button>
          </div>
          <div></div>
        </div>
        <div className="w-full">
          <Tabs className="w-full h-full">
            <TabList>
              <Tab>Income</Tab>
              <Tab>Expense</Tab>
            </TabList>
            <TabPanel className="h-full">{renderIncomeForm()}</TabPanel>
            <TabPanel className="h-full">{renderExpenseForm()}</TabPanel>
            {error ? <div className="text-red-500">{error}</div> : <></>}
          </Tabs>
        </div>
      </Modal>
    </div>
  );
};

export default AddModal;

import axios from "axios";
import { auth } from "../auth/firebase";

const fetchIncome = async () => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: "https://money-manager-be-72sw.onrender.com/income/",
    // url: "http://localhost:3002/income/",
    method: "GET",
    headers: { Authorization: userIdToken },
  });
  return income?.data ?? [];
};

const createIncome = async (payload) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: "https://money-manager-be-72sw.onrender.com/income/add",
    // url: "http://localhost:3002/income/add",
    method: "POST",
    headers: { Authorization: userIdToken },
    data: payload,
  });
  return income;
};

const deleteIncome = async (_id) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: `https://money-manager-be-72sw.onrender.com/income/delete/${_id}`,
    // url: `http://localhost:3002/income/delete/${_id}`,
    method: "DELETE",
    headers: { Authorization: userIdToken },
  });
  return income;
};

export { fetchIncome, createIncome, deleteIncome };

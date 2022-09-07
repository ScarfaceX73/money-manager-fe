import axios from "axios";
import { auth } from "../auth/firebase";

const fetchIncome = async () => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: "https://money-manager-project-be.herokuapp.com/income",
    method: "GET",
    headers: { Authorization: userIdToken },
  });
  return income?.data ?? [];
};

const createIncome = async (payload) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: "https://money-manager-project-be.herokuapp.com/income/add",
    method: "POST",
    headers: { Authorization: userIdToken },
    data: payload,
  });
  return income;
};

const updateIncome = async (_id) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: `https://money-manager-project-be.herokuapp.com/income/update/${_id}`,
    method: "PUT",
    headers: { Authorization: userIdToken },
  });
  return income;
};

const deleteIncome = async (_id) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: `https://money-manager-project-be.herokuapp.com/income/delete/${_id}`,
    method: "DELETE",
    headers: { Authorization: userIdToken },
  });
  return income;
};

export { fetchIncome, createIncome, updateIncome, deleteIncome };

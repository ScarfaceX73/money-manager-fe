import axios from "axios";
import { auth } from "../auth/firebase";

const fetchExpense = async () => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const expense = await axios({
    url: "https://money-manager-project-be.herokuapp.com/expense",
    method: "GET",
    headers: { Authorization: userIdToken },
  });
  return expense?.data ?? [];
};

const createExpense = async (payload) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const expense = await axios({
    url: "https://money-manager-project-be.herokuapp.com/expense/add",
    method: "POST",
    headers: { Authorization: userIdToken },
    data: payload,
  });
  return expense;
};

const updateExpense = async (_id) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const expense = await axios({
    url: `https://money-manager-project-be.herokuapp.com/expense/update/${_id}`,
    method: "PUT",
    headers: { Authorization: userIdToken },
  });
  return expense;
};

const deleteExpense = async (_id) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const expense = await axios({
    url: `https://money-manager-project-be.herokuapp.com/expense/delete/${_id}`,
    method: "DELETE",
    headers: { Authorization: userIdToken },
  });
  return expense;
};

export { fetchExpense, createExpense, updateExpense, deleteExpense };

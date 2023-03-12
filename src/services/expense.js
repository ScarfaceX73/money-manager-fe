import axios from "axios";
import { auth } from "../auth/firebase";

const fetchExpense = async () => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const expense = await axios({
    url: "https://lime-tame-coyote.cyclic.app/expense/",
    method: "GET",
    headers: { Authorization: userIdToken },
  });
  return expense?.data ?? [];
};

const createExpense = async (payload) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const expense = await axios({
    url: "https://lime-tame-coyote.cyclic.app/expense/add",
    method: "POST",
    headers: { Authorization: userIdToken },
    data: payload,
  });
  return expense;
};

const deleteExpense = async (_id) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const expense = await axios({
    url: `https://lime-tame-coyote.cyclic.app/expense/delete/${_id}`,
    method: "DELETE",
    headers: { Authorization: userIdToken },
  });
  return expense;
};

export { fetchExpense, createExpense, deleteExpense };

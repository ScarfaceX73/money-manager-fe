import axios from "axios";
import { auth } from "../auth/firebase";

const fetchIncome = async () => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: "https://lime-tame-coyote.cyclic.app/income/",
    method: "GET",
    headers: { Authorization: userIdToken },
  });
  return income?.data ?? [];
};

const createIncome = async (payload) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: "https://lime-tame-coyote.cyclic.app/income/add",
    method: "POST",
    headers: { Authorization: userIdToken },
    data: payload,
  });
  return income;
};

const deleteIncome = async (_id) => {
  const userIdToken = (await auth?.currentUser?.getIdToken()) ?? undefined;
  const income = await axios({
    url: `https://lime-tame-coyote.cyclic.app/income/delete/${_id}`,
    method: "DELETE",
    headers: { Authorization: userIdToken },
  });
  return income;
};

export { fetchIncome, createIncome, deleteIncome };

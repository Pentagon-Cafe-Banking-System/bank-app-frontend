import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { AccountInfo, BankAccount } from "../../../types/accountInfo";
import { BankAccountInfo } from "./BankAccountInfo";
import { lchownSync } from "fs";

const GET_BANK_ACC = "/api/Account";
export const GetBankAccounts = () => {
  const [account, setAccount] = useState<BankAccount[]>([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const response = await axiosPrivate.get(GET_BANK_ACC);
      response.status === 403
        ? navigate("/login", { state: { from: location }, replace: true })
        : setAccount(response.data);
    })();
  }, []);

  return (
    <table className="min-w-full border text-center">
      <thead className="border-b">
        <tr>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            Id
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            First Name
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            Last Name
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            Salary
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            Date of employment
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
          >
            AppUserId
          </th>
        </tr>
      </thead>
      <tbody>
        {account &&
          account.map((c) => {
            return <BankAccountInfo account={c} key={c.id} />;
          })}
      </tbody>
    </table>
  );
};
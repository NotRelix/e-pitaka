import { useState } from "react";

const AdminUserList = ({userList, handleTransaction}) => {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <ul className="user-list">
        {userList.map((user) => (
          <li className="user" key={user.Account_ID}>
            <div className="left-side">
              <h4>
                {user.FName} {user.LName}
              </h4>
              <h5>
                {user.Account_ID} | {user.Username}
              </h5>
            </div>
            <div className="right-side">
              <input
                type="text"
                placeholder="Amount"
                className="amount-input"
                onChange={(event) => setAmount(event.target.value)}
              />
              <div className="admin-buttons">
                <button className="admin-add" onClick={() => handleTransaction(user.Account_ID, "deposit", amount)}>ADD</button>
                <button className="admin-subtract" onClick={() => handleTransaction(user.Account_ID, "withdraw", amount)}>SUBTRACT</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminUserList;

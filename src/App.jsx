import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [others, setOthers] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const calculateBalance = () => {
    // Validate
    if (
      !income ||
      !rent ||
      !food ||
      !transport ||
      !others ||
      income < 0 ||
      rent < 0 ||
      food < 0 ||
      transport < 0 ||
      others < 0
    ) {
      alert("Please enter positive values for all fields!");
      return;
    }

    const totalExpenses =
      parseFloat(rent) +
      parseFloat(food) +
      parseFloat(transport) +
      parseFloat(others);
    const result = parseFloat(income) - totalExpenses;

    setBalance(result);

    if (result < 0) {
      setMessage("⚠️ You are overspending!");
      setMessageColor("text-danger");
    } else {
      setMessage("✅ Good job managing your expenses!");
      setMessageColor("text-success");
    }
  };

  return (
    <div className="container mt-5 p-4 shadow-lg bg-light rounded-4" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4 text-primary fw-bold">💰 Budget Calculator</h1>

      <div className="mb-3">
        <label className="form-label fw-semibold">Monthly Income</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter your income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Rent / EMI</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter rent or EMI"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Food Expenses</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter food expenses"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Transport Expenses</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter transport expenses"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Other Expenses</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter other expenses"
          value={others}
          onChange={(e) => setOthers(e.target.value)}
        />
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary px-4 py-2 fw-bold" onClick={calculateBalance}>
          Calculate Balance
        </button>
      </div>

      {balance !== null && (
        <div className="mt-4 text-center">
          <h4>Remaining Balance:</h4>
          <h2 className={`${messageColor} fw-bold`}>₹{balance.toFixed(2)}</h2>
          <p className={`fw-semibold ${messageColor}`}>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;

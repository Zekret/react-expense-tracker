import { useState } from "react";
import { useGlobalState } from '../../context/GlobalState'

const TransactionForm = () => {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({ id: window.crypto.randomUUID(), description, amount: +amount })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripcion"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Agrega una transaccion</button>
      </form>
    </div>
  );
};

export default TransactionForm;

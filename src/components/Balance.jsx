import { useGlobalState } from "../context/GlobalState"

const Balance = () => {
  const { transactions } =  useGlobalState()
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0)
  return (
    <div>
        <h1>Balance</h1>
        <h1>${total}</h1>
    </div>
  )
}

export default Balance
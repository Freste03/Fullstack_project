import './App.css'
import { useState, useEffect } from 'react'

function App() {

  type Account = {
    id: number
    email: string,
    password: string,
    created: Date
  }

  const [accounts, setAccounts] = useState<Account[]>([])

  useEffect(() => {
    fetch('/accounts')
      .then(response => response.json())
      .then(data => setAccounts(data))
  }, [])

  return (
    <>
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.email}: {account.password}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

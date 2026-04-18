import { useState } from 'react'
import './App.css'
import { ShieldUser } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>

        <section>
          <div className="card">
            <div className="icon">
              <ShieldUser size={65} />
            </div>

            <h1>Bem vindo Lucas!!!</h1>
            <p>Você está acessando agora o nosso serviço moderno!!!</p>

            <button className="btn-acessar">
              Acessar
            </button>
          </div>
        </section>

        <footer></footer>
      </main>
    </>
  )
}
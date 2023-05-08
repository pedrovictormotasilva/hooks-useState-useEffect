import React, { useState, useEffect } from 'react'

function App() {
  const [produtoId, setProdutoId] = useState('3')
  const [produtoNome, setProdutoNome] = useState('')
  const [data, setData] = useState({
    nome: '',
    preco: '',
  })

  function buscarProduto() {
    console.log('Procurar produto')
    setProdutoId(4)
    setProdutoNome('Curso de ReactJs')
    setData({
      nome: 'curso de NodeJs',
      preco: 245,
    })
  }

  useEffect(() => {
    buscarProduto()
  }, [produtoId])

  return (
    <div>
      <p>Listar produto</p>
      <p>produto: {produtoNome}</p>
      <p>preço: {data.preco}</p>
    </div>
  )
}

export default App

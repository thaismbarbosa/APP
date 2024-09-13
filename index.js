let meta = {
    value: 'ler um livro por mês'
    checked: true,
    log: (info) => {
        console.log(info)
    }
}



meta.value = "não é ler um livro"
meta.log(meta.value)
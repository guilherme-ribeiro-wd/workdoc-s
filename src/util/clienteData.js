const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const userData = () => {
    return {
        nFantasia: 'Teste',
        endereco: 'Teste',
        caixas: 3,
        docs: 44,
    };
};

export function makeData(len = 30) {
    return range(len).map(d => {
        return {
            ...userData(),
            children: range(10).map(userData)
        }
    });
}
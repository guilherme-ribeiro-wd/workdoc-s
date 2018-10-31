const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const userData = () => {
    return {
        usuario: 'Teste',
        depto: 'Teste',
        login: 'Teste',
        cliente: 'Teste213',
        nivel: '+++++++++',
        ultAcesso: '22/02/2019'
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
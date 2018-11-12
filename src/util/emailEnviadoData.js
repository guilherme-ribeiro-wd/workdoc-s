const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const emailEnviadoData = () => {
    return {
        
    };
};

export function makeData(len = 30) {
    return range(len).map(d => {
        return {
            ...emailEnviadoData(),
            children: range(10).map(emailEnviadoData)
        }
    });
}
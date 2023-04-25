export function formatReal(value: string | number) {
    const number = Number(value);
    if (isNaN(number)) {
        return '';
    }
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
export const getCelcius = (fahrenheit) => {
    return ((Number(fahrenheit) - 32) * 5/9).toFixed(2)
}
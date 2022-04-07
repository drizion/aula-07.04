export const getFahrenheit = (celcius) => {
    return ((Number(celcius) * 9/5) + 32).toFixed(2)
}
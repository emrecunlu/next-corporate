export const date2str = (date) => {

    const _date = new Date(date)

    const months = ['Ocak', 'Şub', 'Mart', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Ekim', 'Kas', 'Aralık'] 

    return `${months[_date.getMonth()]} ${_date.getDay()}, ${_date.getFullYear()}`
}
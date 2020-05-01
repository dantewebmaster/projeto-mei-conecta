const formatMoney = (value, format = 'BRL', locale = 'pt-BR') =>
  Intl.NumberFormat(locale, {
    style: 'currency',
    currency: format
  }).format(value);

export default formatMoney;

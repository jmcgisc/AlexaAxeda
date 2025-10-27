export const toLocaleLong = (d) =>
  new Date(d).toLocaleDateString('es-MX', { dateStyle: 'long' });

export const toISO = (d) =>
  new Date(d || Date.now()).toISOString();

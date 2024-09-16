export const parseDuration = (segundos: number) => {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = Math.floor(segundos % 60);

  const formatoMinutos = minutos.toString().padStart(2, "0");
  const formatoSegundos = segundosRestantes.toString().padStart(2, "0");

  if (horas > 0) {
    const formatoHoras = horas.toString().padStart(2, "0");
    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
  } else {
    return `${formatoMinutos}:${formatoSegundos}`;
  }
};

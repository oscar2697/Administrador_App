export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const horas = nuevaFecha.getHours();
    const minutos = nuevaFecha.getMinutes();

    return nuevaFecha.toLocaleDateString('en-EN', opciones) + ' a las ' + horas + ':' + minutos
}
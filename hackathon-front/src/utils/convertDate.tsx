export const convertDateToMinutes = (time: string) => {
    let a = time.split(':');
    return (+a[0]) * 60 + (+a[1]);
}

export const convertMinutesToData = (totalMinutes: any) => {
    let minutes = totalMinutes % 60;
    let hours = (totalMinutes-minutes)/60;
    return '0' + hours + ':' + minutes + ':' + '00';
}
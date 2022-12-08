let today = new Date();
let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);

const week = ['일', '월', '화', '수', '목', '금', '토'];

export let weekday = week[today.getDay()];
export let dateString = year + '년 ' + month + '월 ' + day + '일';

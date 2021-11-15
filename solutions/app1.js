
const setCookie = (value) => {
    const now = new Date();
    now.setTime( now.getTime() + 15*60*1000);
    document.cookie = `token=${value}; expires=${now.toUTCString()}`;
}

export default setCookie;

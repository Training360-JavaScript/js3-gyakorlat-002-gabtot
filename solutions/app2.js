

const setCookie = (name,value) => {
    const now = new Date();
    now.setTime( now.getTime() + 15*60*1000);
    document.cookie = `${name}=${value}; expires=${now.toUTCString()}`;
}
setCookie('viewed','5');
setCookie('uid','354774631237');
setCookie('ssid','Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
    getAll() {
        return document.cookie.split('; ')
            .reduce(
                (prev,curr)=> (prev[ curr.split('=')[0] ] = curr.split('=')[1]) && prev,
                {}
            );
    },
    toSessionStorage() {
        let allCookie = cookieHandler.getAll();
        for (let k in allCookie) {
            sessionStorage.setItem( k, allCookie[k] );
        }
    },
    flush() {
        let allCookie = cookieHandler.getAll();
        for (let k in allCookie) {
            document.cookie = `${k}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        }
    }

}

export { cookieHandler };
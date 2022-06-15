// method to set expiration date in unix form (typeof number) with default value 30 minutes
export const setExpireInUnix: Function = (seconds: number = 30 * 60): number => {
    const now: string = new Date().toUTCString()
    ,   unixNow: number = Date.parse(now)
    ,   unixExp: number = unixNow + seconds;
    return unixExp;
}

// method to set Now time in unix form (typeof number)
export const nowInUnix: Function = (): number => {
    const now: string = new Date().toUTCString()
    ,   unixNow: number = Date.parse(now);
    return unixNow;
}

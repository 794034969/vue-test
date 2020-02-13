export const getLocalCache = (name: string) => {
    if (!name) { return }
    return window.localStorage.getItem(name)
}

export const setLocalCache = (name: string, content: any) => {
    let value: any = content
    if (!name) { return }
    if (typeof content !== 'string') {
        value = JSON.stringify(content)
    }
    window.localStorage.setItem(name, value)
}

export const getSessionCache = (name: string) => {
    if (!name) { return }
    return window.sessionStorage.getItem(name)
}

export const setSessionCache = (name: string, content: any) => {
    let value: any = content
    if (!name) { return }
    if (typeof content !== 'string') {
        value = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, value)
}

export const removeSessionCache = (name: string) => {
    if (!name) { return }
    window.sessionStorage.removeItem(name)
}

export const removeLocalCache = (name: string) => {
    if (!name) { return }
    window.localStorage.removeItem(name)
}

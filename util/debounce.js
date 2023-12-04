export const debounce = (fn, wait) => {
    let delay = wait|| 500
    let timer
    return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer)
        }
       
        let callNow = !timer
        timer = setTimeout(() => {
            timer = null
        }, delay)
        if (callNow) fn.apply(this, args)
    }
}

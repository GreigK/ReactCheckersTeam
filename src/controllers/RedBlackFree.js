let red_black_free = "unknown"

export const redBlackFree = (variable) => {
    if (variable === "red"){
        red_black_free = "red"
    } else if (variable === "black"){
        red_black_free = "black"
    } else if (variable === "free"){
        red_black_free = "free"
    } else {return ("something is wrong")}

return(red_black_free)
}
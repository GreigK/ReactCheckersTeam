function deathSafeExploded(variable){
    if (variable === "death"){
        death_safe_exploded = "death"
    } else if (variable === "safe"){
        death_safe_exploded = "safe"
    } else if (variable === "exploded"){
        death_safe_exploded = "exploded"
    } else {return ("something is wrong")}

return(death_safe_exploded)
}

console.log(deathSafeExploded("death"))
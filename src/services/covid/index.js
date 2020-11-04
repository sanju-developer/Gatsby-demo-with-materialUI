export async function GetCovidGlobalInfoService(){
    const response = await fetch("https://coronavirus-19-api.herokuapp.com/all")
    const jsonRes = await response.json()
    return jsonRes
}

export async function GetCovidAffectedCounteriesInfoService(){
    const response = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
    const jsonRes = await response.json()
    return jsonRes.splice(0,10)
}
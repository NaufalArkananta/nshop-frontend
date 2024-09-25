export const getData= async(url: string)=> {
    const res = await fetch(url, {
        cache: "no-store",
    })

    if(!res.ok) {
        throw new Error("Error fetching")
    }

    return res.json()
}
export const getAllNodes = (key) => { 
    try { 
        return JSON.parse(localStorage.getItem(key)) || []
    } catch (error) { 
        console.log("Something went wrong with getting all nodes!"); 
        throw error 
    } 
}

export const addNewNode = (key, userData) => { 
    try { 
        localStorage.setItem(key, JSON.stringify(userData)) 
    } catch (error) { 
        console.log("Something went wrong with getting all nodes!"); 
        throw error 
    } 
}
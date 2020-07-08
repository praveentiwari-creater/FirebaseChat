export default class Utility{

    static isValidFiled = (term) =>{
        
        let length = term.trim().length
        return length > 0 ? true : false
    }

    static isEmailValid = (term) =>{
        const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let isValid = expression.test(String(term).toLowerCase())
        return isValid 
    }
}
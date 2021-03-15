import {DomElements} from './DomElements.js'
import {html} from './Templates/HtmlTemplate.js'
import {Helper} from './Helper.js'
import {variables} from './variables.js'
export const Main = ()=> {
    const root = DomElements.root
    root.innerHTML = html   
    const HelperObj = new Helper()
    HelperObj.configureDate()
    document.addEventListener("keyup" , HelperObj.addEvent) 
    document.getElementById('list').addEventListener("click" , HelperObj.completeAndRemove)
    document.querySelector(".clear").addEventListener("click" , HelperObj.clearList)
} 
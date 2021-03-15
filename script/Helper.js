import {variables} from './variables.js'
import {listTemplate} from './Templates/ListTemplate.js'
export class Helper {
    addToDo= (toDo)=>
{
    const DONE = variables.UNCHECK;
    const LINE = "";
    const item = listTemplate(toDo , LINE , DONE)
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
};
    addEvent=()=>{
        if(event.keyCode == 13){
            const toDo = input.value.trim();
            
            // if the input isn't empty
            if(toDo){
                this.addToDo(toDo);
            }
            else{
                alert("This can't be Empty")
            }
            input.value = "";
        }
    };
    completeAndRemove=()=>{
        const element = event.target; // return the clicked element inside list
        const elementJob = element.attributes.job.value; // complete or delete
        if(elementJob == "complete"){
            this.completeToDo(element);
        }else if(elementJob == "delete"){
            this.removeToDo(element);
        }
        
        
    };
    completeToDo=(element)=>{
        element.classList.toggle(variables.CHECK);
        element.classList.toggle(variables.UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(variables.LINE_THROUGH);
        
    }
    removeToDo=(element)=>{
        element.parentNode.parentNode.removeChild(element.parentNode);
    
       
    };
    clearList = () => {
        document.getElementById('list').innerHTML = '';
        let container = document.querySelector('ul');
        container.parentNode.style.display = "";
        // location.reload()
    }
    configureDate = () =>
{const dateElement =document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
};
}
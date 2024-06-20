const display=document.getElementById("display")
function displayy(charecter){
    display.value+=charecter
}
function calculate(){
    try{
        
    display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
    }
    
}
function cleardisplay(){
    display.value=""
}

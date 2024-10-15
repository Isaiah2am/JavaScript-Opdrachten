let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());
    
if(
    huidigeTijd.getHours() > 9
    &&
    huidigeTijd.getHours()  <16
)
{
console.log ("school tijd");
}
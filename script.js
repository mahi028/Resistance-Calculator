const menuitems = document.querySelectorAll('.menu>li');
const menu=document.querySelector('.menu');
const selectedband=document.querySelectorAll('.band');
const output=document.querySelector('.value');
let bandnum=null;
let bandvalue=new Object;
let totalband;




//assigning colors to menu items
let i=0;
menuitems.forEach(item => {
    if(listcolor[i]=='Black'){
        item.style.backgroundColor='gray';
    }
    else if(listcolor[i]=='Violet'){
        item.style.backgroundColor='#8F00FF';
    }
    else{
        item.style.backgroundColor=listcolor[i];
    }
    i+=1;
});

//displaying required number of bands
function numofband(){
    totalband= document.getElementById('inputt').value
    for(band of selectedband){
        band.style.display='none';
    }
    for(let j=0;j<totalband;j++){
        selectedband[j].style.display='block';
    }
}
//selecting band and displaying menu
function dropmenu(x){
    bandnum=x;
    menu.style.display='block';
    for(y of selectedband){
        y.style.width='30px';
    }
    selectedband[x].style.width='35px';
}
//changing color of band
function changecolor(x){
    bandvalue[bandnum]=x; 
    if(listcolor[x]=='None'){
        selectedband[bandnum].style.backgroundColor='#ffd70000';
    }
    else{
    selectedband[bandnum].style.backgroundColor=listcolor[x];
}}

//calculating resistance
function calculate(){
    if(totalband==1){
        output.innerHTML='0 ohms';
    }
    else if(totalband==3){
        let number=''+bandvalue[0]+bandvalue[1];
        let m=multiplyer[bandvalue[2]];
        output.innerHTML=`${number*m}&#8486; ${tolerance[0]}`;
    }
    else if(totalband==4){
        let number=''+bandvalue[0]+bandvalue[1];
        let m=multiplyer[bandvalue[2]];
        output.innerHTML=`${number*m}&#8486; ${tolerance[bandvalue[3]]}`;
    }
    else if(totalband==5){
        if(bandvalue[3]==10 || bandvalue[3]==11){
            let number=''+bandvalue[0]+bandvalue[1];
            let m=multiplyer[bandvalue[2]];
            output.innerHTML=`${number*m}&#8486; ${tolerance[bandvalue[3]]}, TCR=${TCR[bandvalue[4]]}`;
        }

        else{
            let number=''+bandvalue[0]+bandvalue[1]+bandvalue[2];
            let m=multiplyer[bandvalue[3]];
            output.innerHTML=`${number*m}&#8486; ${tolerance[bandvalue[4]]}`;
        }
    }
    else if(totalband==6){
        let number=''+bandvalue[0]+bandvalue[1]+bandvalue[2];
        let m=multiplyer[bandvalue[3]];
        output.innerHTML=`${number*m}&#8486; ${tolerance[bandvalue[4]]}, TCR=${TCR[bandvalue[5]]}`;
    }
}

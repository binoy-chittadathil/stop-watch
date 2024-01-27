let hrs=0;
let mnts=0;
let scnds=0;
let tns=0;
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let tens=document.getElementById('tens');
let startBtn=document.getElementById('startBtn');
let stopBtn=document.getElementById('stopBtn');
let resetBtn=document.getElementById('resetBtn');
let intervalId;

function setStopWatch(){
    tns++;
    if(tns<10){
        tens.innerHTML='0'+tns
    }else{
        tens.innerHTML=tns
    }
    if(tns>99){
        tns=0
        scnds++;
       
        if(scnds<10){
           seconds.innerHTML='0'+scnds;
           
        }else{
            seconds.innerHTML=scnds;
            
        }
        if(scnds>59){
            mnts++;
            scnds=0;
            if(mnts<10){
                minutes.innerHTML='0'+mnts;
                
            }else{
                minutes.innerHTML=mnts;
                
            }
            if(mnts>59){
                hrs++;
                mnts=0;
                if(hrs<10){
                    hours.innerHTML='0'+hrs;
                }else{
                    hours.innerHTML=hrs
                }
                if(hrs>=24){
                    clearInterval(intervalId);
                    tens.innerHTML='00';
                    seconds.innerHTML='00';
                    minutes.innerHTML='00';
                    hours.innerHTML='00';
                }
            }
        }
    }
    
    
}
function stopWatch(){
    if(!intervalId){
        intervalId=setInterval(setStopWatch,10)
    }else{
        clearInterval(intervalId);
        intervalId=setInterval(setStopWatch,10)
    }
}
function stop(){
    clearInterval(intervalId);
}
function reset(){
    clearInterval(intervalId);
    tns=0;
    scnds=0;
    mnts=0;
    hrs=0;
    tens.innerHTML='0'+tns;
    seconds.innerHTML='0'+scnds;
    minutes.innerHTML='0'+mnts;
    hours.innerHTML='0'+hrs;
}
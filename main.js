let buttonpress=document.querySelectorAll('button');

let screenvalue='';


for (const btn of buttonpress) {
    btn.addEventListener('click', function() {
        const currentb=this.textContent;
        console.log(this.textContent);
        if (currentb!=='Delete'&&currentb!=='Clear'&&currentb!=='='){
            screenvalue=screenvalue+currentb;
            console.log("yo momma "+currentb);
            document.getElementById('results').textContent=screenvalue;
        }
        if(currentb=='Clear'){
            screenvalue='';
            document.getElementById('results').textContent=0;
        }
        if(currentb=='Delete'){
            screenvalue = screenvalue.slice(0, -1);
            document.getElementById('results').textContent=screenvalue;
        }
        if(currentb=='='){
            calculate=screenvalue;
            document.getElementById('results').textContent=("bruh "+calculate);

        }
        
    });
  }



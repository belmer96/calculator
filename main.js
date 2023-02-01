let buttonpress=document.querySelectorAll('button');

let screenvalue='';


for (const btn of buttonpress) {
    btn.addEventListener('click', function() {
        const currentb=this.textContent;
        const currentid=this.id;
        if (currentb!=='Delete'&&currentb!=='Clear'&&currentb!=='='){
            if (currentid=='divide'){
                currentc="/";
                screenvalue=screenvalue+currentc;
                document.getElementById('results').textContent=screenvalue;
            }
            else{
            screenvalue=screenvalue+currentb;
            document.getElementById('results').textContent=screenvalue;
            }
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
            try {
            let calculation = screenvalue;
            calculation = calculation.replace(/\+/g, ' + ');
            calculation = calculation.replace(/\-/g, ' - ');
            calculation = calculation.replace(/\X/g, ' * ');
            calculation = calculation.replace(/\//g, ' / ');
    
            let terms = calculation.split(' ');
            let result = Number(terms[0]);
    
            for (let i = 1; i < terms.length; i += 2) {
              let operator = terms[i];
              let operand = Number(terms[i + 1]);
    
              switch (operator) {
                case '+':
                  result += operand;
                  break;
                case '-':
                  result -= operand;
                  break;
                case '*':
                  result *= operand;
                  break;
                case '/':
                  result /= operand;
                  break;
                default:
                  throw new Error(`Unknown operator: ${operator}`);
              }
            }
    
            document.getElementById('results').textContent = result;
          } catch (error) {
            console.error(error);
            document.getElementById('results').textContent = 'Error';
          }
        }

    

        
    });
}




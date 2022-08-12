export default{
    
    bind: (el) => {
        el.onblur = () => {
            console.log(el.value ,'- Вывод значения при потери фокуса')
        };
      }
    }

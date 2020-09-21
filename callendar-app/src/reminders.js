const reminders = (state = [], action) => {

  switch(action.type){
      case "DAY":
        let dados = [...state, {id: state.length, ...action.dados}]
        const timeOrdered = dados.sort((a, b) => {
          if (a.time < b.time) return -1;
          if (a.time > b.time) return 1;
          return 0;
        });
        return timeOrdered
      default: 
          return state
  }
}

export default reminders;

const reminders = (state = [], action) => {
  switch(action.type){
      case "DAY":
          return [...state, action.dados]
      default: 
          return state
  }
}

export default reminders;

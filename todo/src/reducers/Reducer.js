export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 1
    }, 
    {
    item: 'do you love reducers?',
    completed: false,
    id: 2
    }, 
    {
    item: 'reducers suck right?',
    completed: false,
    id: 3
    }, 
 ];
 
 export const reducer = (state, action) => {
 
 
 
 switch(action.type) {
 
     case 'ADD_ITEM':
         return [...state, {
             item: action.payload,
             completed: false,
             id: Date.now()
         }]

         case 'TOGGLE_DONE':
          return  state.map(item => {
              if (item.id === action.payload){
                  return {
                      ...item,
                      completed: !item.completed
                  }
              }else {
                  return item
              }

          })

          case 'CLEAR_COMPLETED':
              return state.filter(item => !item.completed)



            // state.map(item => {
            //   if (item.id === action.payload){
            //     return {
            //       ...item,
            //     completed: !item.completed
            //     }
            //   }else {
            //     return item;
              
            // })
          
            
        
 

     
         default:
            return state;
        
 }

 };
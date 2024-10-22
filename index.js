const redux = require('redux')

const counterReducer = (state = {counter : 0}, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter : state.counter + 1
            }
        case 'decrement':
            return {
                counter : state.counter - 1
            }
        default:
            return state;  // return the original state if no action type matches  // for example, in a game, if no action is received, the game should continue to the same state.  // In a calculator, if no action is received, the calculator should continue to display the current value.  // In a shopping cart, if no action is received, the shopping cart should continue to display the current items.  // In a banking system, if no action is received, the banking system should continue to display the current account balance.  // In a chat application, if no action is received, the chat application should continue to display the current conversation.  // In a game, if no action is received, the game should continue to display the current level.  // In a calculator, if no action is received, the calculator should continue to display the current value
    }
    
}

const store = redux.createStore(counterReducer)


const counterSubscriber = () => {
   const latestState = store.getState()
   console.log(latestState);
}

store.subscribe(counterSubscriber);

let action = {
    type: 'increment',
}

store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);

action = {
    type: 'decrement',
}

store.dispatch(action);
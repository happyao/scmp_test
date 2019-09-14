

1. please run following commands to start the app.
   - npm install  
   - npm start


2. Since I don't have enough time to finish the voteItem function, but I know how to do it, I will update my code here:

reducer.js

    case types.VOTE_ITEM:
      return {
        ...state,
        customData: state.customData.map(cd => {
          if (state.currentID === cd.id - 1) {
            return {
              ...cd,
              answer: {
                ...cd.answer,
                options: cd.answer.options.map(item => {
                  if (item.id === action.id) {
                    return { ...item, vote: item.vote + 1 }
                  } else {
                    return item
                  }
                })
              }
            }
          } else {
            return cd
          }
        })
      }


optionButton.js

    <button key={item.id} onClick={() => this.props.onClick(item.id)}>
            {item.label}
    </button>
    
currentPoll.js

    <OptionButtons onClick={this.props.voteItem} />
    
3.Technical details 
  - use boostrap to make the responsive UI for mobile and web
  - use redux for state management 
  - use Jest for reducer test(not enough time for component test, only one reducer test)
  - use chart.js to display the bar
  
4.To do
  - UI update
  - fetch json in componentDidMount and store it in redux store
  - distinguish multiple choose from single choose
  - time format
  - test
 

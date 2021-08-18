
  
function superbowlWin(record) {  
  
    const yearCheifsWon = record.find( ( obj ) => obj.result === 'W')  
     
    if (yearCheifsWon) {
        console.log("I am here", yearCheifsWon)
    return yearCheifsWon.year
    }
    else {
    return undefined
    } 
    };



//const superbowlWin = record.find(  ({ result }) => result === 'W')

//console.log("I am here: ", superbowlWin)
//( ({ result }) => result === 'W')cs
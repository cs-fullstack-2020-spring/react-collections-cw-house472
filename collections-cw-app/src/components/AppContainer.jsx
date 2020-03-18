import React, {Component} from 'react'
import UserComponent from './UserComponent'
class AppContainer extends Component {
    state = {  }
    render() {
        
        // pull in test data
        const rawData = require('./rawData')
        // console.log(`RAWDATA ${rawData[0].username}`)
        return ( 
            <div>
                <h1>User Information</h1>
                
                {/* Loop through the array and make components */}
                {
                    rawData.map((post, id) => {
                        return (<UserComponent key = {id} postData = {post}/>)
                        
                    })
                    
                }
                
            </div>
         );
    }
}
 
export default AppContainer ;
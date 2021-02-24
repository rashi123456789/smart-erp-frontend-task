import React from 'react'
import FormData from './component/FormData'
import ListData from './component/ListData'
function App()
{
    return (
        <div>
            <h1 style={{textAlign:"center"}}>WELCOME TO SHOW POST APP</h1>
            <div>
                <div style={{width:'40%',float:'left'}}><FormData/></div>
            </div>
            <div>
                <div style={{width:'40%',float:'right'}}><ListData/></div>
            </div>
        </div>
    )
}

export default App
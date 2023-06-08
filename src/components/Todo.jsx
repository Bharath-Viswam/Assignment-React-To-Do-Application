import { AppBar, Button, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todo = () => {
  var [valOne,setValOne]= useState()
  var [valArr,setValArr] = useState([])
  var [valArr2,setValArr2] = useState([])

  const changeRecordFn = (e)=>{
    setValOne(e.target.value)
  
    
  
   
  }
  const submitFunc = ()=>{
valArr.push(valOne)
setValOne('')
setValArr2(valArr)
console.log(valArr2);
  
   
   
  
  }

 
  return (
    <div>
      <AppBar>
       
      <Toolbar>
        <Typography variant='h5' >
          To Do App
        </Typography>
      </Toolbar>
      </AppBar>
  
      <Typography variant='h4' style={{paddingTop:'110px'}}>Welcome to To Do Application</Typography>
      <br />
      
      <TextField label='Enter To Do Tasks' variant='outlined' value={valOne} onChange={changeRecordFn}></TextField>
      <br></br> <br/>
      <Button variant='contained' onClick={submitFunc} >Submit</Button>
     
      <br /><br />
      <br /><br /><br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                To Do Tasks 
              </TableCell>
              
            </TableRow>
          
              
                {valArr2.map((value,index)=>{
                  return(
                    <TableRow>
                    <TableCell  >
                    
      {value}
                    </TableCell>
                    </TableRow>
                  )
                })}
              
          
          </TableHead>
        </Table>
      </TableContainer>

    </div>
  )
}

export default Todo
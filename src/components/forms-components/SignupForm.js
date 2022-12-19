import React,{useState} from 'react'
import { Grid, TextField, Typography, Button } from "@mui/material";

const SignupForm = () => {
  const[userDetail,setUserDetail] = useState ({
    firstName:'',
    lastName:'',
    age:'',
    email:'',
    database:[]
})

const submitFrom = (e) =>{
  e.preventDefault();
  if(userDetail.firstName === 0){
    alert('Please enter First Name')
  }
  alert('Success')
}
 console.log(userDetail)

return (
  <>
  
  
   <form onSubmit={submitFrom}>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12}>
          <Typography variant="h3">Sign up</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="First Name"
            type="text"
            value={userDetail.firstName}
            onChange={(e) => setUserDetail({ ...userDetail, firstName: e.target.value })}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Last Name"
            type="text"
            value={userDetail.lastName}
            name="lastName"
            onChange={(e) => setUserDetail({ ...userDetail, lastName: e.target.value })}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Age"
            type="number"
            value={userDetail.age}
            name="age"
            onChange={(e) => setUserDetail({ ...userDetail, age: e.target.value })}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Email"
            type="email"
            value={userDetail.email}
            name="email"
            onChange={(e) => setUserDetail({ ...userDetail, email: e.target.value })}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth size="large">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>

    

</>
  )
}

export default SignupForm
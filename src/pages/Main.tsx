import {Grid} from "@mui/material";


const Main = () => {

  return (
      <Grid container spacing={6}>
          <Grid item md={4}>
              <h1>Main Page</h1>
          </Grid>
          <Grid item md={8}>
              <h1>SPA Template</h1>
          </Grid>
          <Grid item xs={50} md={50} lg={12}>
              <h1>Welcome</h1>
          </Grid>

      </Grid>
  )
}

export default Main;

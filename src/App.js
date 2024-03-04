
import './App.css';


import { AppBar, Container, ImageList, ImageListItem, Button, TextField, Toolbar, Typography  } from '@mui/material';
import ImagesData from './ImagesData.json';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function App() {
  return (
    <div className="App">
        <AppBar>
        <Toolbar>
       <ShoppingCartIcon/>
        <Typography variant='h6'>Shopping
        </Typography>
        </Toolbar>
        </AppBar>
       <Container style={{marginTop:'70px',textAlign:'center'}}>
       <Typography variant='h3'> Women's Wear
       </Typography>
       <Typography paragraph> Select Styles You'll Love On Sale Now! SAVE UP TO 40%</Typography>
       </Container>
       <Container >
       <ImageList rowHeight={300} cols={4}>
       {ImagesData.map((item)=>
        
        
        <ImageListItem  key={item.id} cols={1} >
        <img src={item.image} alt={item.brand}/>
        </ImageListItem>)}
       
       </ImageList>
       </Container>
       <center>
       <Container>
       <Typography variant='h6'>Contact from</Typography>
       <form>
       <TextField style={{width:'500px',margin:'5px'}} type='text' label="Name" variant='outlined' /> <br/>
       
       <TextField style={{width:'500px',margin:'5px'}} type='email' label="Email" variant='outlined' /> <br/>
       
       <TextField style={{width:'500px',margin:'5px'}} type='number' label="Phone No
       " variant='outlined' /> <br/>
       
       <TextField style={{width:'500px',margin:'5px'}} type='text' label="Address" variant='outlined' /> <br/>
      <Button style={{marginBottom:"20px"}} variant='contained'> Submit</Button>
       </form>
       </Container>
       </center>
    </div>
  );
}

export default App;

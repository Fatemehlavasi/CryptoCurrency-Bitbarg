import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid';


import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
const Search = ({ setSearch }) => {
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        // <Grid item sx={{ border: '1px solid #727272 ', borderRadius: '8px' }} bgcolor="green" spacing={10} width={"100%"} >
        //     <IconButton type="button" sx={{ p:"10px " }} aria-label="search" xs={6} md={12}>
        //         <SearchIcon />
        //     </IconButton>
        //     <InputBase sx={{ flex: 1 }}
        //         placeholder="جستجو"
        //         inputProps={{ 'aria-label': 'search google maps' }}
        //         onChange={handleSearch}

        //     />
        // </Grid>

<>
{/* <TextField
       
       fullWidth
       type="search"
       size="small"
       placeholder="جستجو"
       onChange={handleSearch}
       InputProps={{
         startAdornment: (
           <InputAdornment position="start">
             <SearchOutlinedIcon />
           </InputAdornment>
         ),
       }} */}


<Grid 
        item
        display={'flex'}
        sx={{ border: "1px solid #8888 ", borderRadius: "10px"}}
        xs={12}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="جستجو"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleSearch}
        />
    </Grid>
</>
        
    );
}

export default Search;
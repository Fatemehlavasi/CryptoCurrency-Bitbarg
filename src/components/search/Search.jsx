import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
import  Grid  from '@mui/material/Grid';
const Search = ({setSearch}) => {
    const handleSearch=(e)=>{
        setSearch(e.target.value)
      }
    return ( 
        <Grid item sx={{ border: '1px solid #727272 ', borderRadius: '8px' }}>
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }}
            placeholder="جستجو"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={handleSearch}

        />
    </Grid>
     );
}
 
export default Search;
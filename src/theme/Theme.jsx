

import {createTheme} from '@mui/material/styles';
export const Theme = createTheme ({
   components:{
        MuiButton:{
            variants:[
                {props:{variant:'mainButton'},
                 style:{
                  color: '#fff',
                  backgroundColor: '#4285F2',
                  borderRadius: '4px',
                  textAlign: 'center',
                  height: 40,
                  width:"150",
                  lineheight: 1.75,
                //   transition:" background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                '&:hover': {
                    backgroundColor: 'blue',
                   
          
                   }
        
            }},
        //     {
        //     props: {variant: 'secondaryButton'},
        //     style: {
        //      color:"#727272",
        //      // backgroundColor:"#f2f2f2"
        //      //width:'100%'
        //      borderRadius: '4px',
        //      height: 40
              
        //     }
        //   }
    ]}
   },
    typography:{
        fontFamily:'IRANSANS', 
        h1: {
        
          fontSize: '2rem',
          fontWeight: 600,
          lineHeight: 1.5,
          color:'rgba(0, 0, 0, 0.85)'
      },
        h2: {
    
          fontSize: '1rem',
          fontWeight: 500,
          lineHeight: 1.5,
          color: 'rgba(255, 255, 255, 0.85)'
          },
        h3: {
       
          fontSize: 12,
          fontWeight: 700,
          lineHeight: '18px',
          color:'rgba(0, 0, 0, 0.85)'
      },
      subtitle1:{
      
        fontSize:"0.8rem",
        fontWeight: 400,
        lineHeight: 1.5,
    
      },
      subtitle2:{
        
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '21px',
    
      },
      button:{
        fontSize:"0.7rem",
        fontWeight:400,
        lineHeight: 1.75,
        color:'#727272',
        fontFamily:'IRANSANS',
        padding:'0'
       
      },
    
        mobi:{
            fontSize:50
        }
      }  
        

})
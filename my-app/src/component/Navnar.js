import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Navbar(props) {

    return(
        <>
            <div className='navbar-container'>
            <div  className="navbar" onClick={() => props.handleShow(true)} >shop here</div>

            {/* <div onClick={() => props.handleShow(false)}> */}
            <div className='cart'>
                <ShoppingCartOutlinedIcon  onClick={() => props.handleShow(false)} style={{width:'50px', height:'50px',color:'darkgoldenrod'}}/>
                <span className='count' >{props.count}</span>
                </div>
                </div>
        </>
    )

} 

export default Navbar
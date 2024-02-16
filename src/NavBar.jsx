import {Link} from "react-router-dom"

// For displaying the navbar
function NavBar() {
 return (
    <nav style={{ padding:'0 15px', display: 'inlineblock' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', left:'-90px', fontSize: '1.2rem' }}>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}> 
             <Link style={{ color: 'white', fontWeight: 'bold' }} to="/"> Home </Link></a></li>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}> 
            <Link style={{ color: 'white', fontWeight: 'bold' }} to="/listings"> Listings </Link> </a></li>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}>
            <Link style={{ color: 'white', fontWeight: 'bold' }} to="/mortgage"> Mortgage </Link></a></li>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}> 
            <Link style={{ color: 'white', fontWeight: 'bold' }} to= "/contact"> Contact </Link> </a></li>
          </ul>
       </nav>
 )   
}

export default NavBar;
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'



const HomeLogo = styled.img`
color: rgb(190, 0, 105);
    background-color: rgb(53, 53, 61);
`
const RhostecLogo = styled.div`

float: left;
    margin: 5px 0 0 10px;
    height: 51px;
    width: 192px;
    text-indent: -5000px;
    background: black;
    color: brown;

`

function Debut() {
  return (
    <div className="container">
      <div className="row">
        <RhostecLogo>
          <Link to="/">
            <HomeLogo src={Logo} className="img-fluid" />
          </Link>
        </RhostecLogo>
        <h4>
          
          <em className="logo2">Leader à téléphonie mobile.</em>
        </h4>

      </div>
    </div>




  )
}

export default Debut

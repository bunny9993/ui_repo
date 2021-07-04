import React from 'react'
import { useHistory } from 'react-router';

function Navbar(props) {
  const history  = useHistory();
  const logout = () => {
    // props.logout()
    // logoutServiceApi({});
    // props.logout()
    localStorage.clear('userType')
    history.push('/');
  }
  const goToHome = () => {
    // setSelectedProgramsToStore(null);
    // resetProjectData();
    history.push('/home');
  }
  return(<>
  <div className='nav'>
    <ul>
  <li><div onClick={goToHome}>Oracle Survey</div></li>
  <li style={{float:'right',paddingRight:'10px'}}><div onClick={logout}>Signout</div></li>
</ul>
</div>
    </>)

}



export default Navbar;

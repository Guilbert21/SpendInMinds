import React from 'react'
import styled from 'styled-components'
import profile from "../../img/photo1.jpg"
import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/Icons'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

function Navigation({active, setActive}) {
    const {logout} = useLogout ()
    const { user } = useAuthContext()

    const handleClick = () =>{
        logout()
    }
  return (
    <NavStyled>
        <div className="user-container">
            <img src={profile}/>
            <div className="text">
            {user && (
               <h2>{user.name}</h2>
                 )}
                    <p>Your Money</p>
                </div>
        </div>
        <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active':''}
                        >
                            {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
    {user && (
    <li>
        <span style={{ color: 'white' }}>{user.email}</span>
        <button onClick={handleClick}>
            {signout}Log Out
        </button>
    </li>
    )}
</div>

    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: #46354A;
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-container{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: #AFB7B5;
        }
        p{
            color: #AFB7B5;
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: #AFB7B5;
            padding-left: 1rem;
            position: relative;
            i{
                color: #AFB7B5;
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: #AFB7B5 !important;
        i{
            color: #AFB7B5 !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #AFB7B5;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation
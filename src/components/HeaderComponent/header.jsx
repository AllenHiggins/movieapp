import React from 'react'
import './header.css'

const Header = () => {
    return(
        <div className="Header">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img width="50" src="Movies-icon.png" alt="logo" />
                        </td>
                        <td width="8" />
                        <td>
                            <h1>Movies-API Search</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Header;
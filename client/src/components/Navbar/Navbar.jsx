import React from "react";
import "./Navbar.css";
import { Search } from "@material-ui/icons"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from "react-bootstrap/DropdownButton"







export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <div>
                    <img src="/assets/AgoraLogo.png" alt="logopic" className="logo" />
                </div>
            </div>
            <div className="navbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search Agora" className="searchInput" />


                </div>
            </div>

            <div className="navbarRight">
                <div className="navbarLinks">
                    <DropdownButton id="dropdown-item-button" title="Menu">
                        <Dropdown.Item as="button">
                            <Link to="/CreatePost">
                                Create Post
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            <Link to="/Login">
                                Login
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            <Link to="/Register">
                                Register
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            <Link to="/Communities">
                                Communities
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            <Link to="/Profile">
                                Profile
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            <Link to="/">
                                Home
                            </Link>
                        </Dropdown.Item>

                    </DropdownButton>
                </div>
            </div>


        </div>
    )
}
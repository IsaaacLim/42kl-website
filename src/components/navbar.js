import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useState } from "react";
import SchoolLogo from "../images/logo-white.png";
import { FaFacebook } from "@react-icons/all-files/fa/FaFaceBook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { IconContext } from "@react-icons/all-files/lib";

// style
const NavbarMenu = styled.div`
  position: fixed;
  top: 4%;
  right: 2%;
  display: flex;
  z-index: 5;
`;

const Logo = styled((props) => <Link {...props} />)`
  position: fixed;
  left: 2%;
  img {
    width: 128px;
  }
`;
const ApplyBtn = styled((props) => <Link {...props} />)`
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom right, #00babc, #3d5aae);
  margin-right: 85px;
  padding: 8px 16px;
  border-radius: 28px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  opacity: ${({ sidebar }) => (sidebar ? "0" : "1")};
  pointer-events: ${({ sidebar }) => (sidebar ? "none" : "auto")};
  z-index: -1;
`;

const SidebarIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 48px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 28px;
    height: 3px;
    background: white;
    transform-origin: -2px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ sidebar }) => (sidebar ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ sidebar }) => (sidebar ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ sidebar }) => (sidebar ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const SidebarLinks = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  background: #00babc80;
  transition: transform 300ms;
  transform: ${({ sidebar }) =>
    sidebar ? "translateX(0)" : "translateX(100%)"};
  z-index: 1;
  ul {
    list-style: none;
    margin: 0;
    padding: 120px 48px 0px 48px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    transition: color 100ms;
    padding: 16px 0px;
    display: block;

    :hover {
      color: black;
    }
  }
`;

const Socials = styled.div`
  padding: 0px 48px 24px 48px;

  a {
    margin-left: 8px;
    display: inline;
  }
`;

// data
const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Curriculum",
    link: "/curriculum",
  },
  {
    title: "How to Apply",
    link: "#",
  },
  {
    title: "Is this for you?",
    link: "#",
  },
  {
    title: "Community",
    link: "#",
  },
  {
    title: "F.A.Q",
    link: "#",
  },
  {
    title: "For Investors",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "Apply Now",
    link: "#",
  },
];

const Navbar = () => {
  const [sidebar, showSidebar] = useState(false);
  return (
    <IconContext.Provider value={{ color: "fff", size: "32px" }}>
      <>
        <NavbarMenu>
          <Logo to="/">
            <img src={SchoolLogo} alt="42KL logo" />
          </Logo>
          <ApplyBtn to="#" sidebar={sidebar}>
            APPLY NOW
          </ApplyBtn>
          <SidebarIcon sidebar={sidebar} onClick={() => showSidebar(!sidebar)}>
            <div />
            <div />
            <div />
          </SidebarIcon>
        </NavbarMenu>
        <SidebarLinks sidebar={sidebar}>
          <ul>
            {links.map((page, i) => (
              <li key={i}>
                <Link to={page.link}>&lt;/{page.title}&gt;</Link>
              </li>
            ))}
          </ul>
          <Socials>
            <Link to="#">
              <FaFacebook />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
          </Socials>
        </SidebarLinks>
      </>
    </IconContext.Provider>
  );
};

export default Navbar;

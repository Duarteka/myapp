import styled from "styled-components";

interface INav {
  open: boolean;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

export const Menus = styled.div<INav>`
  width: 2rem;
  height: 0.25rem;
  background-color: #fff;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  cursor: pointer;
  font-size: 3rem;

  &:nth-child(1) {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    transform: ${(props) =>
      props.open ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  position: relative;

  @media (max-width: 678px) {
    width: 100vw;
`;

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  margin-top: 0px;
  min-width: 100vw;
  height: 50px;
  text-transform: uppercase;

  a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: #1f1c3a;
    position: fixed;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    top: -16px;

    height: 100%;
    width: 100vw;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: center;
    a {
      font-size: 5rem;
    }
  }
`;
export const Li = styled.li`
  outline: none;
  position: relative;
  margin: 10px 50px 0;
  padding: 5px;
  align-content: flex-end;
  textDecoration: "none",
  textTransform: "uppercase",
  color: "#ffff",
  background-color: #fff;
  
  &:after {
    display:block;
    content: '';
    border-bottom: solid 1.5px #F7F7F7;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  

  @media (max-width: 768px) {
    color: #000;
    margin-right: 34px;
  }
`;

export const Logo = styled.p`
  width: 100%;
  height: 70px;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 150px 20px 5%;
  }
`;

export const LogoUl = styled.p`
  margin: 30px 600px 20px 5%;
  color: #fdf41b;
  width: 100%;
  letter-spacing: -0.09em;
  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
    object-fit: contain;
  }
`;

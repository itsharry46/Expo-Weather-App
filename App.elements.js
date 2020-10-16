import styled from 'styled-components';
import cold from './assets/cold-bg.jpg';

export const Body = styled.div`
    box-sizing: border-box;
    font-family: 'montseratt', sans-serif;
`;

export const Apps = styled.div`
    background-image: url(${cold});
    background-size: cover;
    background-position: bottom;
`;


export const Main = styled.main`
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75));
    padding: 25px;
`;

export const SearchBox = styled.div`
width: auto;
margin-right:35px;
margin-top:0;
`;

export const SearchBar = styled.input`
    display: block;
    width: 100%;
    padding: 15px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0 0 16px 16px;
    margin-top: -25px;

    box-shadow: 0 5px rgba(0, 0, 0, 0.2);

    color: #313131;
    font-size: 20px;

    transition: 0.4s ease;
`;

export const Location = styled.div`
    margin-top: 30%;
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

export const Dates = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
`;

export const WeatherBox = styled.div`
    text-align: center;
`;

export const Temp = styled.div`
    position: relative;
    display: inline-block;
    margin: 30px auto;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;

    padding: 15px 25px;

    color: #fff;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
    text-align: center;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.2);    
`;

export const Weather = styled.div`
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;
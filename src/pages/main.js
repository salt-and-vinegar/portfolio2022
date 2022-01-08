import React, { Component } from "react";
import Header from "../components/header";

const youtubeUrl = "youtube.png";
const instaUrl = "instagram.png";

const Main =()=>{
	return(
        <>
		<Header></Header>
        <div id="instagram"><a href="https://www.instagram.com/salt.and.vinegar_portfolio/" target="_blank" alt="move to instagram page"><img src={instaUrl} alt="move to instagram"/></a></div>
        <div id="youtube"><a href="https://youtube.com/playlist?list=PLU8qRsahPwM0aoMy6431ZHbrJ8pePLwPu" target="_blank" alt="move to instagram page"><img src={youtubeUrl} alt="move to youtube channel"/></a></div>
        <div id="mainBg"></div>
        </>
	);
};

export default Main;
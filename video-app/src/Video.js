import React  from 'react'
import {useState, useRef} from 'react';
import './Video.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'; 
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import  short from "./short.png";
import { TableBody } from '@mui/material';





function Video({Id,Name,UserName,ProfilePic,Post,caption,tag}) {

     const [likecolor,setLikecolor]= useState(false)
     const [dislikecolor,setDislikecolor]= useState(false)
     const [playing, setPlaying] = useState(false);
     const videoRef = useRef(null);
    //  const formRef  = useRef(null);
     const [likes,setLikes]= useState(100)
     const [thumpsup,setThumpsup]= useState();
     const[box, setBox]= useState(true);


  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

   const handleLikes= ()=>{

   if(thumpsup !=false){
     
      setLikes(likes+1)
      setThumpsup(false)
      setLikecolor(true)
      setDislikecolor(false)
     
   }}
   
   const handleDislikes=()=>{ if(thumpsup!=true){
     
      setLikes(likes-1)
      setThumpsup(true)
      setDislikecolor(true)
      setLikecolor(false)
   }}

   const handleComment=(e)=>{
     e.preventDefault();
     if(box)
        {setBox(false)}
      else{setBox(true)}
     
   }
  
 

   
    
  return (<>
       
    <div className='single'>
       <button className='tag' id={Id} tag={tag}  >#{tag}</button>
       <img className='short' src={short} />
          <video className="post" src={Post}  width="540" height="800" loop onClick={onVideoPress}
          ref={videoRef} >{Post} </video>
        <h4>{Name}</h4>
        <p>{UserName}</p>
        <img className="pic"  src={ProfilePic} alt="pic"></img> 
        <div className='caption-div'><p className='caption'>{caption}</p></div>
       
       <div className='sidebar'>
        <div className='likes'>
        <ThumbUpOutlinedIcon onClick={handleLikes} className={`IconThumbUpOutlinedIcon'; ${likecolor==true&& "likeIcon"}`}/>  
        
        <sub>{likes}</sub>
        </div>
       
          <ThumbDownAltOutlinedIcon className={`ThumbDownAltOutlinedIcon ${dislikecolor==true&& "dislikeIcon"}`} onClick={ handleDislikes}/> 
         
      
          <label for="comment" onClick={handleComment}><ChatIcon/></label>

          
        
        
       </div>
           <form   className={`comment ${box&&'activebox'}`}>
           <input type='text' id="comment"></input>
          <button type='submit' className='comment-but' onClick={handleComment}>Comment</button></form>
  </div>
     
          
      </>
  )
}

export default Video
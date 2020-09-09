import React,{useState} from 'react'
import './Compare.css'



const Compare = (props) =>{

    const[name,setName]=useState('');
    const[followers,setFollowers]=useState('');
    const[following,setFollowing]=useState('');
    const[avatar,setAvatar]=useState('');
    const[location,setLocation]=useState('');
    
    fetch(`https://api.github.com/users/${props.username}`)
    .then(res => res.json())
    .then(data => {
        setData(data)
    });

  const setData = ({ avatar_url,name,followers,following,location}) => {
    setAvatar(avatar_url)
    setName(name);   
    setFollowers(followers);
    setFollowing(following);
    setLocation(location);

  }

    return <div class="bg-warning card"> 

<img src={avatar} alt="" height="200" width="200" />
<div class="bg-warning p-1">
<h3>{name}</h3>
<div class="text-dark">
<p>Followers:{followers}</p>
<p>Following:{following}</p>
<p>Location:{location}</p>
</div>
</div>

   
    
    
  </div>
    
}


export default Compare;
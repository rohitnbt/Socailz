import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useDispatch } from 'react-redux'
import { setPosts } from '../../store/postSlice'

export const LocalStorage = () => {
    const dispatch = useDispatch()
    const [post, setPost] = useState([]);
  const createData = [{
    "id": 1,
    "name": "John Doe",
    "username": "john_doe",
    "accountType": "gold-verify",
    "profilePicture": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "location": "New York",
    "profileBanner": "https://images.pexels.com/photos/4463934/pexels-photo-4463934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "Leaving footprints in the sand and memories in our hearts. 🏝️💖",
    "hashtags": ["#BeachDays", "#ForeverSumme", "#VacationMode", "#TropicalGetaway"],
    "time": "2024-02-10T08:00:00",
    "images": ["https://images.pexels.com/photos/7633609/pexels-photo-7633609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/2612405/pexels-photo-2612405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    "likes": 20,
    "isSaved": true,
    "comments": [{
            "id": 1,
            "profilePicture": "https://images.pexels.com/photos/2765557/pexels-photo-2765557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "username": "jane_smith",
            "name": "Jane Smith",
            "accountType": "silver",
            "comment": "Great post!",
            "time": "2024-02-10T08:05:00"
        },
        {
            "id": 2,
            "profilePicture": "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "username": "bob_jones",
            "name": "Bob Jones",
            "accountType": "gold",
            "comment": "Awesome!",
            "time": "2024-02-10T08:10:00"
        }
    ],
    "shares": 5,
    "chart": 5000
},
{
    "id": 2,
    "name": "Jane Smith",
    "username": "jane_smith",
    "accountType": "artist",
    "profilePicture": "https://images.pexels.com/photos/2765557/pexels-photo-2765557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "location": "Los Angeles",
    "profileBanner": "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "Paradise Found: Embracing serenity at the resort. 🌴",
    "hashtags": ["#ResortRetreat", "#VacationMode", "#LuxuryEscape"],
    "time": "2024-02-09T10:30:00",
    "images": ["https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    "likes": 15,
    "isSaved": false,
    "comments": [{
        "id": 1,
        "profilePicture": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "username": "john_doe",
        "name": "John Doe",
        "comment": "Nice post!",
        "time": "2024-02-09T10:35:00"
    }],
    "shares": 2,
    "chart": 2500
},
{
    "id": 3,
    "name": "Bob Jones",
    "username": "bob_jones",
    "accountType": "silver-verify",
    "profilePicture": "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "location": "Chicago",
    "profileBanner": "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "description": "Lost in the serenity of mountain vistas, where every step feels like a breath of fresh air. 🌄",
    "hashtags": ["MountainRetreat", "MountainRetreat", "#MountainViews"],
    "time": "2024-02-08T15:45:00",
    "images": ["https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    "likes": 30,
    "isSaved": false,
    "comments": [],
    "shares": 10,
    "chart": 6589
}
]
  const setInitialData = () => {
    setPost(createData);
    localStorage.setItem("items", JSON.stringify(createData));
    dispatch(setPosts(createData))
  };
  return (
    <div className='LocalStorage'>
        <button onClick={()=>setInitialData()}>Load</button>
    </div>
  )
}

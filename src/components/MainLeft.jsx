// import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import lists from "../lists.json";
function MainLeft() {
  return (
    <div className='MainLeftContainer'>
<div className="MainLeft">
    <div className="MainLeftName">
    <img src='https://avatars.githubusercontent.com/u/100133276?v=4' alt='profile'/>
    <h2>FayizIT</h2>
    <IoMdArrowDropdown/>
    </div>

    {/* line */}
    <div className="line"/>

    {/* Recent Repo */}
    <div className="recentRepo">
        <div className="recentRepos">
            <h2>Recent Repositories</h2>
            <button>New</button>
        </div>
        <div className="inputBox">
            <input type="text" placeholder='Find the repositories...' />
        </div>
    </div>

    <div className="MainLeftLists">
        {lists.map((item,idx)=>(
            <div className="item" key={idx}>
                <img src='https://avatars.githubusercontent.com/u/100133276?v=4' alt=''/>
                <div> 
                    <h2>{`${item.name}/${item.repo}`}</h2>
                </div>
            </div>
        ))}
        <a href='#'>Show more</a>
    </div>
    <div className="line/">
        <div className='recetRepo'>
            <div className="recetRepos">
                <h2>Your teams</h2>
            </div>
            <div className="inputBoxTwo">
                <input type='text' placeholder='find a team....'/>
            </div>
        </div>
    </div>
    
</div>

    </div>
  )
}

export default MainLeft
import React from 'react';
import Nav from 'src/components/Header'
import CreatePost from '../src/components/createPost';
import LeftSideNav from '../src/components/leftSideNav';
import NewsFeed from '../src/components/newsFeed';
import RightSideNav from '../src/components/RightSideNav';

function Main(){
    return(
        <>
        <Nav/>
        <CreatePost/>
        <div className="flex justify-between">
          <LeftSideNav/>
          <NewsFeed/>
          <RightSideNav/>
        </div>
        </>
    )
}

export default Main;
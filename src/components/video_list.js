/**
 * Created by User on 1/27/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

// STAGE 1
// This could be a simple functional Component
let VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
       return <VideoListItem
           onVideoSelect = {props.onVideoSelect}
           key={video.etag}
           video={video} />
    });
    return(
        <ul className='col-md-12 list-group'>
          {videoItems}
        </ul>
    )
};

export default VideoList;

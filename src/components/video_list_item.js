/**
 * Created by User on 1/27/2017.
 */
import React from 'react';

// STAGE 1
// This could be a simple functional Component
let VideoListItem = ({video, onVideoSelect}) => {
// let VideoListItem = (props) => {
    // const video = props.video;
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    const imageTitle = video.snippet.title;
    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {imageTitle}
                    </div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;

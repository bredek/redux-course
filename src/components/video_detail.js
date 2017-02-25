/**
 * Created by User on 1/27/2017.
 */
import React from 'react';

// STAGE 1
// This could be a simple functional Component
let VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const imageTitle = video.snippet.title;
    const imageDescription = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="ember-responsive-item"></iframe>
                <div className="details">
                    <div>{imageTitle}</div>
                    <div>{imageDescription}</div>
                </div>
            </div>
        </div>
    )
};

export default VideoDetail;

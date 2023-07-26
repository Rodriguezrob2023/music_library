import { useState } from "react";

export default function GalleryItem(props) {
    let [viewDetails, setViewDetails] = useState(false);

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'blue'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <img src={props.song.artworkUrl100} alt={props.song.trackName} />
                <p>{props.song.trackName}</p>
                <p>{props.song.artistName}</p>
            </div>
        );
    }

    const detailedView = () => {
        return (
            <div style={detailStyle}>
                <img src={props.song.artworkUrl100} alt={props.song.trackName} />
                <p>{props.song.trackName}</p>
                <p>{props.song.artistName}</p>
                <p>{props.song.collectionName}</p>
                <p>{props.song.primaryGenreName}</p>
                <p>{props.song.releaseDate}</p>
                <p>{props.song.trackTimeMillis}</p>
            </div>
        );
    }

    return (
        <div onClick={() => setViewDetails(!viewDetails)} style={{display: 'inline-block'}}>
            {viewDetails ? detailedView() : simpleView()}
        </div>
    );
}
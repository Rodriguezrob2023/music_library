import GalleryItem from './GalleryItem';

export default function Gallery(props) {
    const display = props.data.map((song, index) => {
        return (
            <GalleryItem key={index} song={song} />
        )
    })

    return (
        <div>
            {display}
        </div>
    );
}
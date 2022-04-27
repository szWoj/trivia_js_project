import {useState} from 'react';
import Sound from 'react-sound';
import Somewhere_Over_the_Rainbowl from '../static/Somewhere_Over_the_Rainbow';

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    
    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play Song' : 'Stop'}</button>
            <Sound 
                url={Somewhere_Over_the_Rainbowl}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={0}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    )
}

export default PlaySound;
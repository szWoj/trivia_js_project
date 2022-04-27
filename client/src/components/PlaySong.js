import Sound from 'react-sound';
import {useState} from 'react';
import OverTheRainbow from './static/OverTheRainbow'

const PlaySong =(handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) =>{


    const [isPlaying, setIsPlaying] = useState(false);


    return(
        <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'} </button>
        <Sound
        url={OverTheRainbow}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}/>
        </div>

    );
};

export default PlaySong;

// // Installed url loader and react sound 
// // Problem

// // // The main issue with the mp3 files was that they are not recognised on the server-side. 
// Audio support is a feature of the browser, not the server. So we will face an issue in running mp3s on the server-side.
// // // We need an npm package called url-loader which simply works with HTML files and converts
//  them into a data URL base 64 encoded string. Just like when you upload a PDF or image on the browser and convert them 
// // to base 64 to send it to the server.
// // // The conversion of HTML files into a data URL is important because the data URL is easily 
// recognised and understood by the server. We don’t need to convert it in real-time on the server; instead, we can use webpack to do it for us.

// // // // https://archive.org/details/78_over-the-rainbow_judy-garland-victor-young-and-his-orchestra-harold-arlen-e.-y.-har_gbia0004863a/Over+The+Rainbow+-+Judy+Garland+-+Victor+Young+and+his+Orchestra-restored.flac
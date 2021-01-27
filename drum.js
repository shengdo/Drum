//data object

const initialDrums = [{key: "Q",display: "Heater-1", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
         {key: "W",display: "Heater-2", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
         {key: "E",display: "Heater-3", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
         {key: "A",display: "Heater-4", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
         {key: "S",display: "Heater-6", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
         {key: "D",display: "Dsc_Oh", url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
         {key: "Z",display: "Kick_n_Hat", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
         {key: "X",display: "KICK_1", url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
         {key: "C",display: "H2", url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}]

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drums: initialDrums,
      output: ""
    }
    this.audioplay = this.audioplay.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  
  //use for play song and display
  audioplay(key, display){
    const song = document.getElementById(key);
    song.play();
    this.setState({output: display});
}
  
  componentDidMount(){
    document.addEventListener("keydown",this.keyPress);
  }
  
  
  keyPress(e){
    this.audioplay(String.fromCharCode(e.keyCode), "pressKey");
  }
  render(){
      return(
      <div id="drum-machine">
          <p id="display">{this.state.output}</p>
          {this.state.drums.map(drum => (
            <div className="drum-pad" id="drum" onClick={() => this.audioplay(drum.key, drum.display)}>
            <audio className="clip" id={drum.key} src={drum.url} />
              {drum.key}</div>))}
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
                      

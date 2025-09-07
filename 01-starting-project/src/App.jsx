import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'Easy'} targetTime={1}/>
        <TimerChallenge title={'Intermediate'} targetTime={5}/>
        <TimerChallenge title={'Hard'} targetTime={10}/>
        <TimerChallenge title={'Uff Leave it'} targetTime={60}/>
      </div>
    </>
  );
}

export default App;

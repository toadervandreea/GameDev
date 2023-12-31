import logo from './logo.svg';
import './App.css';
import Tile from './Tile';






function shuffle(tiles){
  for(let i = tiles.length -1; i>0; i--){
    const j =Math.floor( Math.random() *tiles.length); //[0:1)
    console.log('exchange ' + i + ' with ' + j);
    [tiles[i], tiles[j]]=[tiles[j], tiles[i]]
  }
  console.log(tiles)
}
//  const array1=[1,4,9,16]
function App() {
  let objects= [ 'bear', 'corgi', 'crab', 'fish', 'panda', 'parrot', 'pig', 'rabbit', 'rhinoceros', 'shark', 'snail', 'turtle'] ;
  objects=[...objects, ...objects];
  shuffle(objects)


  let a =5;
  let b =6;
  [a,b]=[b,a]
  console.log(a,b)

  return (
    <div className="App">
     
      <div className="grid grid-cols-6 gap-4 justify-items-center">
        {objects.map(function(object, index){
          return <Tile  tile={ object} altText={'icon of'+ object} culoare={'red'} index={index}/>
        })}
        {/* {array1.map(x=>x*2+'')} */}
      </div>
    </div>
  );
}

export default App;

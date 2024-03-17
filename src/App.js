import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
                {name: 'Dr. Mahfuz', job: 'singer'},
                {name: 'Runa Layla', job: 'singer'},
                {name: 'Arnob', job: 'singer'}
                ];
const singerStyle = {
  color: 'red',
  border: '3px solid red',
  padding: '20px',
  backgroundColor: 'yellow',
  borderRadius: '20px'
  
  
}

function App() {
  
  const nayoks = ['Rubel', 'BappaRaj', 'Kuber']

  return (
    <div className="App">

      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      
    {/* <h1 style={singerStyle}>Name: {singer.name}</h1> */}

      <Person></Person>
      <Person></Person>

      <h1 style={{marginTop: '200px'}}>Props tutorial</h1>
      <Nothing name="Rajjak" naika="Shabnur"></Nothing>
      <Nothing name="Bapparaj" naika="Moushumi"></Nothing>
      <Nothing name="Amir Khan" naika="Kareena Kapoor"></Nothing>


      <h1 style={{marginTop: '200px'}}>More Dynamic Props tutorial</h1>
      {
        nayoks.map(nayok => <Nothing2 name={nayok}></Nothing2>)
      }


      <h1 style={{marginTop: '200px'}}>Array to Dynamic Props tutorial</h1>
      {
        singers.map(singer => <Nothing3 name={singer.name}></Nothing3>)
      }
    </div>
  );
}

function Person(){
  console.log()
  return (
    <div className='person'>
    <h1>Sakib Al Hasan</h1>
    <p>Profession: Cricket</p>

    </div>
  )
}

function Nothing(props){
  console.log(props);
  return(
    <div className='container'>
    <h1>{props.name}</h1>
    <h3 style={{color: 'blue'}}>Naika: {props.naika}</h3>

    </div>
  )
}


function Nothing2(props){
  console.log(props);
  return(
    <div className='nothing'>
    <h1>{props.name}</h1>
    <h3 style={{color: 'blue'}}>{props.naika}</h3>

    </div>
  )
}


function Nothing3(props){
  return(
    <div className='nothing2'>
    <h1>{props.name}</h1>

    </div>
  )
}

export default App;

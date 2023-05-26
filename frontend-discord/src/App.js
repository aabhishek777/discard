
// import { useDispatch } from 'react-redux';
import './App.css';
// import { useEffect } from 'react';



import RouteComponents from './RouteComponents';
import Header from './pages/Header';

// const dummyData = {
//   name: 'Abhishek',
//   email: 'email@email.com',
// }


function App ()
{
  // const dispatch = useDispatch();
  // const setData = () => {
  //   dispatch( {
  //     type: "user",
  //     payload: dummyData,
  //   } )
  // }
  // useEffect( () => {
  //   setData();
  // }, [dispatch] );


  return (
    <>
      <Header />
      <RouteComponents />
    </>




  );
}

export default App;

import React,{Component} from 'react'
import './App.css'
import { Switch,Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './components/sign-in and sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'



class App extends Component{
  constructor(){
    super()

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){ //if exists
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot=>{
          //console.log(snapshot.data());
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
          //,()=>{
          //   console.log(this.state);
          // }
          console.log(this.state);
        })
      }
     // console.log(user);
      else{
        this.setState({
          currentUser:userAuth
       })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return(
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>

        <Route path="/signin">
          <SignInAndSignUpPage />
        </Route>



    </Switch>
    </div>
    )
  }
  
}


export default App;

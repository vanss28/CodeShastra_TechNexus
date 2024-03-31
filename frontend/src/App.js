import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Blog, Possibility, Features, Gpt3, Header } from './containers';
import { Cta, Brand, NavBar } from './component';
import './App.css';
import SignUp from './containers/Signup/Signup';
import SignIn from './containers/SignIn/Signin';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Wrap the Routes with AuthProvider */}
        <div className='App'>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={
              <>
                <div className='gradient__bg'>
                  <NavBar />
                  <Header />
                </div>
                <Gpt3 />
                <Features />
                <Possibility />
                <Cta />
                <Blog />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

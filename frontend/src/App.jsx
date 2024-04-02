import './App.scss'
import { LeftSideMenu } from './components/leftSIdeMenu/LeftSideMenu'
import { Home } from './pages/home/Home'
import { RightSideMenu } from './components/rightSideMenu/RightSideMenu'
import { Wrapper } from './components/wrapper/Wrapper'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { register } from 'swiper/element/bundle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Saved } from './pages/saved/Saved'
import { Appearance } from './pages/appearance/Appearance'
import { Messages } from './pages/messages/Messages'
import { Notification } from './pages/notification/Notification'
import { Profile } from './pages/profile/Profile'
import { Login } from './pages/login/Login'
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute'
import { SignUp } from './pages/signup/Signup'
import { EditProfile } from './pages/editProfile/EditProfile'
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";
import { useSelector } from 'react-redux'
import { StoryPreview } from './components/storyPreview/StoryPreview'
function App() {
  register();
  const storyPreview = useSelector((state) => state.story.storyPreview)

  return (
    <>
    <BrowserRouter>
    {
      storyPreview ? ( <StoryPreview /> ) : (
        <Wrapper>
          <LeftSideMenu />
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/saved" element={<ProtectedRoute><Saved /></ProtectedRoute>} />
                <Route path='/appearance' element={<ProtectedRoute><Appearance /></ProtectedRoute>} />
                <Route path='/messages' element={<ProtectedRoute><Messages /></ProtectedRoute>} />
                <Route path='/notification' element={<ProtectedRoute><Notification /></ProtectedRoute>} />
                <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path='/editProfile' element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          <RightSideMenu />
        </Wrapper>
        )
    }
    </BrowserRouter>
    </>
  )
}

export default App

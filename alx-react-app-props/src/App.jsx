import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };


  return (
    <>
      <WelcomeMessage />
      <Header />
      <Footer />
      <MainContent />
       <UserContext.Provider value={userData}>
       <ProfilePage userData={userData} /> 
       </UserContext.Provider>
      
      </>
  );
}

export default App;

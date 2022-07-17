import './App.css';
import ChatSection from './ChatSection';
import Header from './Header'
import Footer from './Footer'
import AddUser from './AddUser';
function App() {
  return (
    <div className="app">
        <Header />
        <ChatSection />
        <AddUser />
        <Footer />
    </div>
  );
}

export default App;

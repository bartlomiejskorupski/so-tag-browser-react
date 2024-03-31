import './App.css';
import Header from './components/Header';
import TagTable from './components/TagTable';
import MainSection from './components/MainSection';

function App() {
  return (
    <>
      <Header />
      <MainSection>
        <TagTable />
      </MainSection>
    </>
  );
}

export default App;

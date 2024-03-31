import './App.css';
import Header from './components/Header';
import TagTable from './components/TagTable';
import MainSection from './components/MainSection';
import PageConfiguration from './components/PageConfiguration';

function App() {
  return (
    <>
      <Header />
      <MainSection>
        <PageConfiguration />
        <TagTable />
      </MainSection>
    </>
  );
}

export default App;

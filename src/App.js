import "./App.css";
import ContentContainer from "./components/content-component/ContentContainer";
import HeadingContainer from "./components/heading-component/HeadingContainer";

function App() {
  return (
    <div className='app'>
      <HeadingContainer />
      <ContentContainer />
    </div>
  );
}

export default App;

import CommentList from './components/comments/CommentList';
import './components/comments/commentStyle.css'
import Header from './components/header/Header';
import RateLineBlock from './components/teacher_info/rateLine/RateLineBlock';
import TeacherBlock from './components/teacher_info/TeacherBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TeacherBlock />
        <RateLineBlock />
        <CommentList />
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container mt-3">
        <form action="/add" method="POST">
          <div class="form-group">
            <label>오늘의 할일</label>
            <input type="text" class="form-control" name="title" />
          </div>
          <div class="form-group">
            <label>날짜</label>
            <input type="text" class="form-control" name="date" />
          </div>
          <button type="submit" class="btn btn-outline-secondary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

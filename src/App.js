// import logo from './logo.svg';
import {NavLink, Route, Routes } from "react-router-dom";
import './App.css';

const Profile = () => {
  return(
    <h2>Это страница с профилем</h2>
  );
}

const Messages = () => {
  return(
    <h2>Это страница с сообщениями</h2>
  );
}

const Settings = () => {
  return(
    <h2>Это страница с настройками</h2>
  );
}

const Friends = () => {
  return(
    <h2>Это страница с друзьями</h2>
  );
}


function App() {
  return (
    <div className="container-fluid mt-3">
			<div className="row">
				<div className="col-sm-3">
					<div className="nav flex-column nav-pills" aria-orientation="vertical">
						<NavLink className="nav-link" to="profile">
							Профиль
						</NavLink>
						<NavLink className="nav-link" to="messages">
							Сообщения
						</NavLink>
						<NavLink className="nav-link" to="settings" role="tab">
							Настройки
						</NavLink>
            <NavLink className="nav-link" to="friends">
							Друзья
						</NavLink>
					</div>
				</div>

				<div className="col-sm-9">
          <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/friends" element={<Friends/>}/>
          </Routes>
        </div>
			</div>
		</div>
  );
}

export default App;

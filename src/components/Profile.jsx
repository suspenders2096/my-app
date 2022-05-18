import styles from "../components/Profile.module.css"

const h3Style = {
    color: "blue",
    fontSize: 25,
}

const Profile = (props) => {
    let user = props.function();
    console.log(user);
    return(
      <div className="row">
          <div className="col-sm-4">
              <img src={user.avatar} width="200px" alt="" />
          </div>
          <div className="col-sm-8">
              <h2 style={{color: "red"}}>ID: {user.id}, {user.name} {user.lastname}</h2>
              <h3 style={h3Style}>Обо мне</h3>
              <p className={styles.about}>{user.about}</p>
              <p>{user.email}</p>
          </div>
      </div>
    );
  }

  export default Profile;
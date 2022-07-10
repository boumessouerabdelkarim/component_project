import MyPhoto from "../../Myphoto.jpg"
import '../../Des.css'

function ProfilePhoto() {
    return (      
        <div className="move-area" >
        <div className='.container'>
          
          <img className="Portfolio" src={MyPhoto} alt ='MyPhoto'/>
        </div>
      </div>  
    
        );
  }
  
  export default ProfilePhoto;
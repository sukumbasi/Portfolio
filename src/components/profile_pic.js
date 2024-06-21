// import profilePic from '../components/images/kaushal.jpg' // Update the path if needed
import pp from '../components/images/pp.png'
// import kk from '../components/images/fbpp.png'
const ProfilePicture = () => {
    return (
        <div style={containerStyle}>
            <img src={pp} alt="Profile"  style={imageStyle}/>
        </div>
    );
};

const containerStyle = {
    display: 'block',
    marginBottom: '20px',
};

const imageStyle = {
    // borderRadius: '50%', // Circular image
    borderRadius: '50%', // Circular image
    width: '200px', // Adjust the size as needed
    height: '200px', // Adjust the size as needed
    objectFit: 'cover',
    // border: '3px solid #4CAF50', // Optional: Add border for better look
   
};

export default ProfilePicture;

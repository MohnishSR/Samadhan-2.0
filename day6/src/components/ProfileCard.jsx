import PropTypes from 'prop-types';
import './ProfileCard.css';

function ProfileCard({ name, bio, avatar }) {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <img src={avatar} alt={`${name}'s avatar`} />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileCard;

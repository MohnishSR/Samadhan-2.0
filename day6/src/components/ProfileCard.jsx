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

export default ProfileCard;

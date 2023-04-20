import PropTypes from 'prop-types';
import { ProfilePhoto, ProfileContainer, Description, Name, Links, Stats,  Item } from './profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <ProfileContainer>
        <Description>
            <ProfilePhoto
            src={ avatar }
            alt="User avatar"
            class="avatar"
            />
                <Name>{ username }</Name>
                <Links>@{ tag }</Links>
                <Links>{ location }</Links>
        </Description>

        <Stats>
            < Item>
                <span class="label">Followers:</span>
                <span class="quantity">{ stats.followers }</span>
            </ Item>
            < Item>
                <span class="label">Views:</span>
                <span class="quantity">{ stats.views }</span>
            </ Item>
            < Item>
                <span class="label">Likes:</span>
                <span class="quantity">{ stats.likes }</span>
            </ Item>
        </Stats>
    </ProfileContainer>
    );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
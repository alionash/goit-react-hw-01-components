import PropTypes from 'prop-types';
import { FriendList, Item, Name, Status } from './friends.styled';


export const FriendsList = ({ friends }) => {
    return (
        <FriendList>
            {friends.map(friend =>
                <Item key={friend.id}>
                    <Status isOnline = {friend.isOnline === true} >{ friend.isOnline }</Status>
                    <img src={ friend.avatar } alt="User avatar" width="48" />
                    <Name>{ friend.name }</Name>
                </Item>)}
        </FriendList>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
}
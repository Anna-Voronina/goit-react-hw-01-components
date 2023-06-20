import PropTypes from 'prop-types';
import { FriendsItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendsItem key={friend.id} friendInfo={friend} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

import css from './FriendListItem.module.css';

export const FriendsItem = ({ friendInfo: { name, isOnline, avatar } }) => {
  return (
    <li className={css.friendsItem}>
      <span
        className={`${css.status} ${
          isOnline ? `${css.online}` : `${css.offline}`
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

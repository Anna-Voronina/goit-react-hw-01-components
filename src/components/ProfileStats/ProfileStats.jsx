import css from './ProfileStats.module.css';

export const ProfileStats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      {Object.entries(stats).map(([key, value]) => {
        return (
          <li key={key} className={css.statsItem}>
            <span className={css.label}>{key}</span>
            <span className={css.quantity}>{value}</span>
          </li>
        );
      })}
    </ul>
  );
};

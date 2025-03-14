import { useTheme } from '../hooks/useTheme';
import styles from './ToggleThemeButton.module.css';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      {buttonText}
    </button>
  );
};

export default ToggleThemeButton;

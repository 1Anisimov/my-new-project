import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
// Icons
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();
    const { className } = props;

    return (
        <Button 
            theme={ThemeButton.CLEAR} 
            onClick={toggleTheme} 
            className={classNames(cls.themeSwitcher, {}, [className])}
            >
                {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
 );
}
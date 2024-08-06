import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
// import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
                    {t('Главная')}
                    {}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};

import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to={"/"} theme={AppLinkTheme.INVERTED}>
                    Главная
                </AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

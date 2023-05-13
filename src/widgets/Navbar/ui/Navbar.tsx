import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"} theme={AppLinkTheme.INVERTED}>
                    {t("Main")}
                </AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
                    {t("About")}
                </AppLink>
            </div>
        </div>
    );
};

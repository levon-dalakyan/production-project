import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { Button } from "shared/ui/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const onReload = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t("error_occured")}</h1>
            <Button onClick={onReload}>{t("reload_page")}</Button>
        </div>
    );
};

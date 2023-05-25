import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

// component for throwing errors to test error-boundary
export const BugButton = () => {
    const { t } = useTranslation();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    const onThrow = () => setIsError(true);

    return <Button onClick={onThrow}>{t("throw_error")}</Button>;
};

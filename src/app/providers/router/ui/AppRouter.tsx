import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { routeConfig } from "shared/config/routeConfig";

export const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <div className="page-wrapper">
            <Suspense fallback={t("Loading")}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

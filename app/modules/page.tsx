import ModulesList from "@/components/modules/modulesList";
import GlobalLayout from "@/components/nav/global";
import React from "react";

const ModulesPage = () => {
  return (
    <GlobalLayout title="Formations">
      <ModulesList />
    </GlobalLayout>
  );
};

export default ModulesPage;

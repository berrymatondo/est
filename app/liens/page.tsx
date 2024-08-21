import LiensList from "@/components/liens/page";
import GlobalLayout from "@/components/nav/global";
import React from "react";

const LiensPage = () => {
  return (
    <GlobalLayout title="Liens utiles">
      <LiensList />
    </GlobalLayout>
  );
};

export default LiensPage;

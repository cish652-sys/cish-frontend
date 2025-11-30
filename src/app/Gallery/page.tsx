import GalleryPage from "@/designs/templates/GalleryPage";
import React, { Suspense } from "react"; // <-- 1. Import Suspense

const GalleryLoadingFallback = () => {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: "80vh" }}>
      <p className="text-xl text-gray-600">Loading Gallery...</p>
    </div>
  );
};

const page = () => {
  return (
    <div>
      {/* 2. Wrap your component in Suspense */}
      <Suspense fallback={<GalleryLoadingFallback />}>
        <GalleryPage />
      </Suspense>
    </div>
  );
};

export default page;

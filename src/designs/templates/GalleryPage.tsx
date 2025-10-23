"use client";

import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { MainHeader } from "./MainHeader";
import { SectionHeader } from "../organisms/SectionHeader";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Image as ImageIcon,
  Video as VideoIcon,
} from "lucide-react";
import Image from "next/image";

// --- (GalleryItem type is unchanged) ---
type GalleryItem = {
  id: number;
  type: "image" | "video";
  title: string;
  date: string;
  itemsCount: number;
  imageUrl: string;
  videoUrl?: string;
};

// --- (Dummy data is unchanged, used for fallback) ---
const dummyImageData: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    title: "Independence day",
    date: "15/08/2025",
    itemsCount: 6,
    imageUrl: "/icons/Gallery1.svg",
  },
  {
    id: 2,
    type: "image",
    title: "FDP",
    date: "18/08/2025",
    itemsCount: 6,
    imageUrl: "/icons/Gallery2.svg",
  },
  {
    id: 3,
    type: "image",
    title: "One day training cum demonstration",
    date: "22/08/2025",
    itemsCount: 10,
    imageUrl: "/icons/Gallery3.svg",
  },
  {
    id: 4,
    type: "image",
    title: "lucknow aam mahotsav",
    date: "07/07/2025",
    itemsCount: 6,
    imageUrl: "/icons/Gallery4.svg",
  },
  {
    id: 5,
    type: "image",
    title: "Ek Ped Maa Ke Naam",
    date: "15/07/2025",
    itemsCount: 6,
    imageUrl: "/icons/Gallery1.svg",
  },
  {
    id: 6,
    type: "image",
    title: "Krishi Darshan Chaupal on general topics",
    date: "20/07/2025",
    itemsCount: 10,
    imageUrl: "/icons/Gallery2.svg",
  },
];

const dummyVideoData: GalleryItem[] = [
  {
    id: 101,
    type: "video",
    title: "CISH Foundation Day",
    date: "01/01/2025",
    itemsCount: 1,
    imageUrl: "/assets/gallery/video_thumb1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 102,
    type: "video",
    title: "Mango Festival Highlights",
    date: "10/06/2025",
    itemsCount: 1,
    imageUrl: "/assets/gallery/video_thumb2.jpg",
    videoUrl: "https://www.youtube.com/embed/someothervideo",
  },
  {
    id: 103,
    type: "video",
    title: "Research Farm Tour",
    date: "05/05/2025",
    itemsCount: 1,
    imageUrl: "/assets/gallery/video_thumb3.jpg",
    videoUrl: "https://www.youtube.com/embed/anotherone",
  },
];

// 1. Define the API response type
interface ApiMediaItem {
  id: number;
  type: "image" | "video";
  url: string;
}

// 2. Transformation function to "fake" missing data
const transformMedia = (items: ApiMediaItem[], type: "image" | "video"): GalleryItem[] => {
  return items.map((item, index) => ({
    id: item.id,
    type: type,
    // --- Faked Data ---
    title: `${type === "image" ? "Image" : "Video"} ${index + 1}`,
    date: "01/01/2025", // Sorting will not work correctly with this
    itemsCount: 1,
    // --- End Faked Data ---
    imageUrl: type === "image" ? item.url : "/assets/gallery/video_thumb1.jpg", // Use a default thumb for videos
    videoUrl: type === "video" ? item.url : undefined,
  }));
};

// --- (GalleryFilterBar component is unchanged) ---
const GalleryFilterBar: React.FC<{
  activeTab: "images" | "videos";
  setActiveTab: (tab: "images" | "videos") => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}> = ({ activeTab, setActiveTab, searchTerm, setSearchTerm, sortBy, setSortBy }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
    {/* Search Input */}
    <div className="relative w-full md:w-auto md:flex-grow max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#5b9a5d]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>

    {/* Tabs for Images/Videos */}
    <div className="flex bg-gray-100 p-1 ">
      <button
        className={`px-4 py-2 flex items-center gap-2  transition-colors ${
          activeTab === "images" ? "bg-[#5b9a5d] text-white" : "text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("images")}
      >
        <ImageIcon className="w-5 h-5" /> Images
      </button>
      <button
        className={`px-4 py-2 flex items-center gap-2  transition-colors ${
          activeTab === "videos" ? "bg-[#5b9a5d] text-white" : "text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("videos")}
      >
        <VideoIcon className="w-5 h-5" /> Videos
      </button>
    </div>

    {/* Sort By Dropdown */}
    <div className="relative w-full md:w-auto">
      <select
        className="appearance-none bg-white border border-gray-300  pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#5b9a5d] w-full"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="date-desc">Sort By Date (Newest)</option>
        <option value="date-asc">Sort By Date (Oldest)</option>
        <option value="title-asc">Sort By Title (A-Z)</option>
        <option value="title-desc">Sort By Title (Z-A)</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

// --- (GalleryCard component is unchanged) ---
const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => (
  <div className=" shadow-md hover:shadow-lg transition-shadow duration-300  overflow-hidden group">
    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={300}
        height={200}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-4xl">
          ▶
        </div>
      )}
      <button className="absolute top-3 right-3 bg-white text-gray-800 p-2  shadow-md group-hover:bg-[#5b9a5d] group-hover:text-white transition-colors duration-300">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
    <div className="p-4 flex flex-col items-start">
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#5b9a5d] transition-colors duration-300">
        {item.title}
      </h3>
      <div className="w-full flex justify-between">
        <p className="text-sm text-gray-600 mt-1">{item.date}</p>
        <span className="mt-2 inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 ">
          {item.itemsCount} ITEMS
        </span>
      </div>
    </div>
  </div>
);

// --- (GalleryGrid component is unchanged) ---
const GalleryGrid: React.FC<{ items: GalleryItem[] }> = ({ items }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
    {items.length === 0 && (
      <div className="text-center text-gray-600 text-lg py-10">
        No items found for this selection.
      </div>
    )}
  </div>
);

const GalleryPage = () => {
  // --- (Filter state is unchanged) ---
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  // 3. Add state for API data, initialized with fallback data
  const [imageData, setImageData] = useState<GalleryItem[]>(dummyImageData);
  const [videoData, setVideoData] = useState<GalleryItem[]>(dummyVideoData);
  const [isLoading, setIsLoading] = useState(true);

  // 4. useEffect to fetch data on mount
  useEffect(() => {
    const fetchMedia = async () => {
      setIsLoading(true);

      const imageEndpoint = "https://api.cish.org.in/api/media/get/image";
      const videoEndpoint = "https://api.cish.org.in/api/media/get/video"; // Assuming this endpoint

      const [imageResult, videoResult] = await Promise.allSettled([
        axios.get<ApiMediaItem[]>(imageEndpoint),
        axios.get<ApiMediaItem[]>(videoEndpoint),
      ]);

      // Process Image Data
      if (imageResult.status === "fulfilled" && imageResult.value.data.length > 0) {
        setImageData(transformMedia(imageResult.value.data, "image"));
      } else {
        console.error("Failed to fetch images, using fallback data.");
        // Fallback is already in state, so do nothing
      }

      // Process Video Data
      if (videoResult.status === "fulfilled" && videoResult.value.data.length > 0) {
        setVideoData(transformMedia(videoResult.value.data, "video"));
      } else {
        console.error("Failed to fetch videos, using fallback data.");
        // Fallback is already in state, so do nothing
      }

      setIsLoading(false);
    };

    fetchMedia();
  }, []); // Empty array runs this only once on mount

  // 5. useMemo now reads from state (which is either API or fallback)
  const filteredAndSortedItems = React.useMemo(() => {
    const dataToFilter = activeTab === "images" ? imageData : videoData;

    const filtered = dataToFilter.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.includes(searchTerm)
    );

    const parseDate = (dateString: string) => {
      const [day, month, year] = dateString.split("/").map(Number);
      return new Date(year, month - 1, day); // Month is 0-indexed
    };

    filtered.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      if (sortBy === "date-desc") {
        return dateB.getTime() - dateA.getTime();
      } else if (sortBy === "date-asc") {
        return dateA.getTime() - dateB.getTime();
      } else if (sortBy === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    return filtered;
  }, [activeTab, searchTerm, sortBy, imageData, videoData]); // Add state dependencies

  return (
    <>
      <MainHeader />
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "GALLERY" }]}
        iconProps={true}
        title="GALLERY"
        description={[""]}
      />

      <main className="bg-[#FBFAF0] py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">GALLERY</h2>
        </div>

        <GalleryFilterBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* 6. Add Loading State */}
        {isLoading ? (
          <div className="text-center text-gray-600 text-lg py-10">Loading Gallery...</div>
        ) : (
          <GalleryGrid items={filteredAndSortedItems} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;

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
  X, // For Modal
  ChevronLeft, // For Modal
} from "lucide-react";
import Image from "next/image";

// Represents a single media file (image or video)
interface ApiMediaItem {
  id: number;
  type: "image" | "video";
  url: string;
}

// Represents an "album" or "gallery item" shown in the grid
type GalleryItem = {
  id: number;
  type: "image" | "video";
  title: string;
  date: string;
  itemsCount: number;
  thumbnailUrl: string; // Renamed from imageUrl
  media: ApiMediaItem[]; // Array of actual media files
};

// --- DUMMY DATA (Updated with 'media' array) ---

const dummyImageData: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    title: "Independence day",
    date: "15/08/2025",
    itemsCount: 6,
    thumbnailUrl: "/icons/Gallery1.svg",
    media: [
      { id: 11, type: "image", url: "/icons/Gallery1.svg" },
      { id: 12, type: "image", url: "/icons/Gallery2.svg" },
      { id: 13, type: "image", url: "/icons/Gallery3.svg" },
      { id: 14, type: "image", url: "/icons/Gallery4.svg" },
      { id: 15, type: "image", url: "/icons/Gallery1.svg" },
      { id: 16, type: "image", url: "/icons/Gallery2.svg" },
    ],
  },
  {
    id: 2,
    type: "image",
    title: "FDP",
    date: "18/08/2025",
    itemsCount: 6,
    thumbnailUrl: "/icons/Gallery2.svg",
    media: [{ id: 21, type: "image", url: "/icons/Gallery2.svg" }],
  },
  {
    id: 3,
    type: "image",
    title: "One day training cum demonstration",
    date: "22/08/2025",
    itemsCount: 10,
    thumbnailUrl: "/icons/Gallery3.svg",
    media: [{ id: 31, type: "image", url: "/icons/Gallery3.svg" }],
  },
  {
    id: 4,
    type: "image",
    title: "lucknow aam mahotsav",
    date: "07/07/2025",
    itemsCount: 6,
    thumbnailUrl: "/icons/Gallery4.svg",
    media: [{ id: 41, type: "image", url: "/icons/Gallery4.svg" }],
  },
  {
    id: 5,
    type: "image",
    title: "Ek Ped Maa Ke Naam",
    date: "15/07/2025",
    itemsCount: 6,
    thumbnailUrl: "/icons/Gallery1.svg",
    media: [{ id: 51, type: "image", url: "/icons/Gallery1.svg" }],
  },
  {
    id: 6,
    type: "image",
    title: "Krishi Darshan Chaupal on general topics",
    date: "20/07/2025",
    itemsCount: 10,
    thumbnailUrl: "/icons/Gallery2.svg",
    media: [{ id: 61, type: "image", url: "/icons/Gallery2.svg" }],
  },
];

const dummyVideoData: GalleryItem[] = [
  {
    id: 101,
    type: "video",
    title: "CISH Foundation Day",
    date: "01/01/2025",
    itemsCount: 1,
    thumbnailUrl: "/assets/gallery/video_thumb1.jpg",
    media: [{ id: 1011, type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }],
  },
  {
    id: 102,
    type: "video",
    title: "Mango Festival Highlights",
    date: "10/06/2025",
    itemsCount: 1,
    thumbnailUrl: "/assets/gallery/video_thumb2.jpg",
    media: [{ id: 1021, type: "video", url: "https://www.youtube.com/embed/someothervideo" }],
  },
  {
    id: 103,
    type: "video",
    title: "Research Farm Tour",
    date: "05/05/2025",
    itemsCount: 1,
    thumbnailUrl: "/assets/gallery/video_thumb3.jpg",
    media: [{ id: 1031, type: "video", url: "https://www.youtube.com/embed/anotherone" }],
  },
];

// --- END DUMMY DATA ---

// Transforms the flat API response into GalleryItem "albums"
const transformMedia = (items: ApiMediaItem[], type: "image" | "video"): GalleryItem[] => {
  return items.map((item) => ({
    id: item.id,
    type: type,
    title: `${type === "image" ? "Image" : "Video"} ${item.id}`,
    date: "01/01/2025",
    itemsCount: 1,
    thumbnailUrl: type === "image" ? item.url : "/assets/gallery/video_thumb1.jpg",
    media: [item],
  }));
};

// --- THIS IS THE CORRECTED COMPONENT ---
type GalleryFilterBarProps = {
  activeTab: "images" | "videos";
  setActiveTab: (tab: "images" | "videos") => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
};

const GalleryFilterBar: React.FC<GalleryFilterBarProps> = ({
  activeTab,
  setActiveTab,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
}) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="relative w-full md:w-auto md:flex-grow max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#5b9a5d]"
        value={searchTerm} // <-- Was missing
        onChange={(e) => setSearchTerm(e.target.value)} // <-- Was missing
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>

    <div className="flex bg-gray-100 p-1 ">
      <button
        className={`px-4 py-2 flex items-center gap-2  transition-colors ${
          activeTab === "images" ? "bg-[#5b9a5d] text-white" : "text-gray-700 hover:bg-gray-200" // <-- Fixed logic
        }`}
        onClick={() => setActiveTab("images")} // <-- Was missing
      >
        <ImageIcon className="w-5 h-5" /> Images
      </button>
      <button
        className={`px-4 py-2 flex items-center gap-2  transition-colors ${
          activeTab === "videos" ? "bg-[#5b9a5d] text-white" : "text-gray-700 hover:bg-gray-200" // <-- Fixed logic
        }`}
        onClick={() => setActiveTab("videos")} // <-- Was missing
      >
        <VideoIcon className="w-5 h-5" /> Videos
      </button>
    </div>

    <div className="relative w-full md:w-auto">
      <select
        className="appearance-none bg-white border border-gray-300  pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#5b9a5d] w-full"
        value={sortBy} // <-- Was missing
        onChange={(e) => setSortBy(e.target.value)} // <-- Was missing
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
// --- END OF CORRECTION ---

// GalleryCard updated to accept an onClick prop
const GalleryCard: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => (
  <div className=" shadow-md hover:shadow-lg transition-shadow duration-300  overflow-hidden group">
    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
      <Image
        src={item.thumbnailUrl} // <-- Use thumbnailUrl
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
      <button
        className="absolute top-3 right-3 bg-white text-gray-800 p-2  shadow-md group-hover:bg-[#5b9a5d] group-hover:text-white transition-colors duration-300"
        onClick={onClick} // <-- Attach onClick to the button
      >
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

// GalleryGrid updated to pass click handler to cards
const GalleryGrid: React.FC<{
  items: GalleryItem[];
  onCardClick: (item: GalleryItem) => void;
}> = ({ items, onCardClick }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <GalleryCard
          key={item.id}
          item={item}
          onClick={() => onCardClick(item)} // <-- Pass click handler
        />
      ))}
    </div>
    {items.length === 0 && (
      <div className="text-center text-gray-600 text-lg py-10">
        No items found for this selection.
      </div>
    )}
  </div>
);

// --- NEW MODAL COMPONENT ---

const GalleryModal: React.FC<{
  items: ApiMediaItem[];
  onClose: () => void;
}> = ({ items, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [items.length]);

  if (!currentItem) return null;

  const isYouTube = currentItem.url.includes("youtube.com") || currentItem.url.includes("youtu.be");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        // Changed max-w-4xl to max-w-6xl
        className="relative w-full max-w-6xl max-h-[90vh] p-4 bg-white rounded-lg shadow-xl" // <-- CHANGED
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute -top-3 -right-3 z-10 p-1 text-white bg-gray-800 rounded-full hover:bg-gray-600 transition-all"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content Area */}
        <div className="w-full flex items-center justify-center">
          {currentItem.type === "image" && (
            <Image
              src={currentItem.url}
              alt="Gallery Image"
              width={1920}
              height={1080}
              // Changed max-h-[80vh] to max-h-[85vh]
              className="object-contain w-auto h-auto max-w-full max-h-[85vh]" // <-- CHANGED
            />
          )}
          {currentItem.type === "video" && isYouTube && (
            <iframe
              src={currentItem.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              // Changed max-h-[80vh] to max-h-[85vh]
              className="w-full aspect-video max-h-[85vh] rounded" // <-- CHANGED
            ></iframe>
          )}
          {currentItem.type === "video" && !isYouTube && (
            <video
              src={currentItem.url}
              controls
              autoPlay
              // Changed max-h-[80vh] to max-h-[85vh]
              className="w-full h-auto max-h-[85vh] rounded" // <-- CHANGED
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Prev Button */}
        {items.length > 1 && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 m-2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 m-2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            onClick={goToNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}

        {/* Counter */}
        {items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black bg-opacity-60 text-white text-sm rounded-md">
            {currentIndex + 1} / {items.length}
          </div>
        )}
      </div>
    </div>
  );
};

// --- END MODAL COMPONENT ---

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  const [imageData, setImageData] = useState<GalleryItem[]>(dummyImageData);
  const [videoData, setVideoData] = useState<GalleryItem[]>(dummyVideoData);
  const [isLoading, setIsLoading] = useState(true);

  // --- State for Modal ---
  const [modalMedia, setModalMedia] = useState<ApiMediaItem[] | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      setIsLoading(true);

      const imageEndpoint = "https://api.cish.org.in/api/media/get/image";
      const videoEndpoint = "https://api.cish.org.in/api/media/get/video";

      // Use dummy data as initial state
      setImageData(dummyImageData);
      setVideoData(dummyVideoData);

      const [imageResult, videoResult] = await Promise.allSettled([
        axios.get<ApiMediaItem[]>(imageEndpoint),
        axios.get<ApiMediaItem[]>(videoEndpoint),
      ]);

      if (imageResult.status === "fulfilled" && imageResult.value.data.length > 0) {
        setImageData(transformMedia(imageResult.value.data, "image"));
      } else {
        console.error("Failed to fetch images, using fallback data.");
      }

      if (videoResult.status === "fulfilled" && videoResult.value.data.length > 0) {
        setVideoData(transformMedia(videoResult.value.data, "video"));
      } else {
        console.error("Failed to fetch videos, using fallback data.");
      }

      setIsLoading(false);
    };

    fetchMedia();
  }, []);

  const filteredAndSortedItems = React.useMemo(() => {
    const dataToFilter = activeTab === "images" ? imageData : videoData;

    const filtered = dataToFilter.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.includes(searchTerm)
    );

    const parseDate = (dateString: string) => {
      const [day, month, year] = dateString.split("/").map(Number);
      return new Date(year, month - 1, day);
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
  }, [activeTab, searchTerm, sortBy, imageData, videoData]);

  // --- Click Handler for Cards ---
  const handleCardClick = (item: GalleryItem) => {
    if (item.media && item.media.length > 0) {
      setModalMedia(item.media);
    } else {
      console.warn("No media items found for this gallery card.");
    }
  };

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

        {isLoading ? (
          <div className="text-center text-gray-600 text-lg py-10">Loading Gallery...</div>
        ) : (
          <GalleryGrid
            items={filteredAndSortedItems}
            onCardClick={handleCardClick} // <-- Pass handler to grid
          />
        )}
      </main>
      <Footer />

      {/* --- Render Modal --- */}
      {modalMedia && <GalleryModal items={modalMedia} onClose={() => setModalMedia(null)} />}
    </>
  );
};

export default GalleryPage;

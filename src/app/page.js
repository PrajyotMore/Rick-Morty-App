"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import EpisodesList from "./components/EpisodesList";
import CharacterGrid from "./components/CharacterGrid";
import {
  fetchCharacters,
  fetchCharactersByEpisode,
  fetchEpisodes,
} from "./services/rickAndMortyApi";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    fetchEpisodes().then(setEpisodes);
    if (!selectedEpisode) {
      loadCharacters(currentPage);
    }
  }, [currentPage, selectedEpisode]);

  const loadCharacters = (page) => {
    fetchCharacters(page).then(({ characters, info }) => {
      setCharacters(characters);
      setPageInfo(info);
    });
  };

  const handleEpisodeClick = (episodeId) => {
    setSelectedEpisode(episodeId);
    setCurrentPage(1); // Reset to the first page when an episode is selected
    fetchCharactersByEpisode(episodeId).then((characters) => {
      setCharacters(characters);
      setPageInfo({}); // Reset pagination when viewing characters of a specific episode
    });
  };

  const handleClearSelection = () => {
    setSelectedEpisode(null);
    loadCharacters(1); // Load all characters again on clearing selection
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center p-5 w-full">
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <EpisodesList
            episodes={episodes}
            onEpisodeClick={handleEpisodeClick}
            selectedEpisode={selectedEpisode}
            onClearSelection={handleClearSelection}
          />
          <CharacterGrid characters={characters} />
        </div>
        <Pagination
          currentPage={currentPage}
          pageInfo={pageInfo}
          onPageChange={(newPage) => setCurrentPage(newPage)}
        />
      </main>

      <Footer />
    </div>
  );
}

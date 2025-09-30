import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to view its details</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ul>
          {episodes.map((episode) => {
            return (
              <li onClick={() => setSelectedEpisode(episode)} key={episode.id}>
                {episode.name}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
        <main>
          <EpisodeList />
          <EpisodeDetails />
        </main>
      </header>
    </>
  );
}

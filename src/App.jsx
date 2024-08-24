// src/App.js
import { useState } from "react";
import NewsTable from "./components/NewsTable";
import NewsDetailForm from "./components/NewsDetailForm";

const App = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleRowClick = (news) => {
    setSelectedNews(news);
  };

  const handleFormSubmit = (updatedNews) => {
    console.log("Ready to POST:", updatedNews);
  };

  return (
    <div className="App">
      <NewsTable onRowClick={handleRowClick} />
      {selectedNews && (
        <NewsDetailForm
          news={selectedNews}
          onSubmit={handleFormSubmit}
          onCancel={() => setSelectedNews(null)}
        />
      )}
    </div>
  );
};

export default App;

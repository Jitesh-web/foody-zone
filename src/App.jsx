import { useEffect, useState, useMemo } from "react";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/food");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredItems = useMemo(() => {
    let filteredData = data;

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (item) => item.type.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (inputValue) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    return filteredData;
  }, [data, selectedCategory, inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    setInputValue("");
  };

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
    <>
      <Navigation
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleInputBlur={handleInputBlur}
        handleCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
      <Main filteredItems={filteredItems} />
    </>
  );
}

export default App;

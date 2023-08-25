import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ShowImageCategoryList from "./ShowImageCategoryList";
const HomeHero = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }

    fetchPhotos();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="home-hero-full-area">
        <Container>
          <div className="hero-inner-container">
            <div className="hero-content-top">
              <h1>
                Your local source of high quality images and videos directly
                from their creators
              </h1>
              <div className="search-form-hero">
                <input type="text" id="search-photos" onChange={handleSearch} />
                <label htmlFor="search-photos">
                  <i className="bx bx-search-alt-2"></i>
                </label>
              </div>
              <p>Recommended: summer, food, covid-19, real estate, love</p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="category-data-show">
          <ShowImageCategoryList photos={photos} />
        </div>
      </Container>
      <div className="photo-list">
        <Container>
          <div className="image-header">
            <div className="header-left">
              <ul>
                <li>All</li>
                <li>Photos</li>
                <li>Videos</li>
                <li>Freebies</li>
                <li>360</li>
              </ul>
            </div>
            <div className="header-right">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
            >
              <Masonry>
                {filteredPhotos?.slice(0, 12)?.map((photo, idx) => (
                  <div className="photo-list-single" key={photo.id}>
                    <Image
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      width={"300"}
                      height={`200`}
                      loading="lazy"
                    />
                    {/* <p>{photo.title}</p> */}
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeHero;

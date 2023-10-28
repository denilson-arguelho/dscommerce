import "./style.css";


/* Components */
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import CatalogNextPage from "../../components/ButtonNextPage";

const Catalog = () => {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
            <SearchBar/>
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
          </div>
          <CatalogNextPage/>
        </section>
      </main>
    </>
  );
};

export default Catalog;
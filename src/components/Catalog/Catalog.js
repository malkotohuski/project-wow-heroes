import { CatalogInfo } from "./CatalogIfno";

export const Catalog = ({
    hero,
    _id,
}) => {
    return (
        <div className="catalog-heroes">
            <section _id="catalog-page">
                <h1>All Heroes</h1>

                {hero.map(x => <CatalogInfo key={x._id} {...x} />)}

                {hero.length === 0 && (
                    <h3 className="no-articles">No articles yet</h3>
                )}

            </section>
        </div>
    );
};
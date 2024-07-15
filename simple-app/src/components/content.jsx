import Figure from 'react-bootstrap/Figure';
import Browse from '/images/browse.jpg';
import Ingredients from '/images/ingredients.jpg';
import Cooking from '/images/cooking.jpg';
import { Link } from 'react-router-dom';
import Tools from '/images/cooking-tools.jpg';
import Community from '/images/community.jpg';
import Chopsticks from '/images/chopsticks.png';

export default function Content() {
  return (
    <>
      <Figure className="figure">
        <div className="content-links">
          <Link to="browse-recipes">
            <Figure.Image
              className="content-images"
              width={171}
              height={180}
              alt="171x180"
              src={Browse}
            />

            <Figure.Caption>
              <strong>Browse Recipes</strong>
            </Figure.Caption>
          </Link>
        </div>

        <div className="content-links">
          <Link to="share-recipes">
            <Figure.Image
              className="content-images"
              width={171}
              height={180}
              alt="171x180"
              src={Cooking}
            />

            <Figure.Caption>
              <strong>Share Recipes</strong>
            </Figure.Caption>
          </Link>
        </div>

        <div className="content-links">
          <Link to="ingredients">
            <Figure.Image
              className="content-images"
              width={171}
              height={180}
              alt="171x180"
              src={Ingredients}
            />
            <Figure.Caption>
              <strong>Ingredients</strong>
            </Figure.Caption>
          </Link>
        </div>
      </Figure>

      <Figure className="sub-categories">
        <div className="sub-content-links">
          <Figure.Image
            className="sub-content-images"
            width={250}
            height={180}
            alt="171x180"
            src={Tools}
          />
          <Figure.Caption className="caption">
            <strong>Cooking Tools</strong>
          </Figure.Caption>
        </div>
        <img className = "chopsticks" src={Chopsticks} />
        <div className="sub-content-links">
        <Figure.Caption className="caption">
            <strong>Join the Community!</strong>
          </Figure.Caption>
          <Figure.Image
            className="sub-content-images"
            width={250}
            height={180}
            alt="171x180"
            src={Community}
          />
        </div>
      </Figure>
    </>
  );
}

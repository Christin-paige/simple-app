import Figure from 'react-bootstrap/Figure';
import Veggies from '/images/veggies.jpg';
import Spices from '/images/spices.jpg';
import Soy from '/images/soy.jpg';
import Fish from '/images/fish.jpg';
import  Grains from '/images/grains.jpg';


export default function Ingredients(){
    return (
        <>
        <h1>Shop Ingredients</h1>

        <Figure className="figure">
            <div className="content-ingredients">
          
      <Figure.Image
        width={200}
        height={180}
        alt="171x180"
        src={Veggies}
        className="rounded-circle"
       
      />
     

      <Figure.Caption>
       <strong>Vegetables</strong> 
      </Figure.Caption>
      </div>
    

      <div className="content-ingredients">
      <Figure.Image
        width={230}
        height={180}
        alt="171x180"
        src={Spices}
        className="rounded-circle"
      />
      <Figure.Caption>
       <strong>Spices</strong>
      </Figure.Caption>
    </div>

    <div className="content-ingredients">
      <Figure.Image
        width={200}
        height={180}
        alt="171x180"
        src={Soy}
        className="rounded-circle"
      />
      <Figure.Caption>
        <strong>Soy</strong>
      </Figure.Caption>
      </div>

      <div className="content-ingredients">
      <Figure.Image
        width={200}
        height={180}
        alt="171x180"
        src={Grains}
        className="rounded-circle"
      />
      <Figure.Caption>
        <strong>Grains</strong>
      </Figure.Caption>
      </div>

      <div className="content-ingredients">
      <Figure.Image
        width={200}
        height={180}
        alt="171x180"
        src={Fish}
        className="rounded-circle"
      />
      <Figure.Caption>
        <strong>Fish</strong>
      </Figure.Caption>
      </div>
    </Figure>

  
        </>
    )
}
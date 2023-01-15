import React from "react";
import ContainerTwo from "../../components/ContainerTwo";

export default function LunchMenu() {
  const menuPrices = {
    regLunch: [5.49, 7.49],
    premLunch: [7, 12],
    lunchSpecial: [6, 10],
  };

  const entrees = {
    regLunch: [
      {
        name: "Steamed Chicken",
        image:
          "https://whereismyspoon.co/wp-content/uploads/2022/06/boiled-whole-chicken-pieces.jpg",
      },
      {
        name: "Oven Chicken",
        image:
          "https://www.johaprato.com/files/styles/flexslider_full/public/pollo_al_horno.jpg?itok=qGBPijjz",
      },
      {
        name: "Beef",
        image:
          "https://3.bp.blogspot.com/_Sl8374-mbMA/TJgez_oVIwI/AAAAAAAAFFI/9mfsF3LYImo/s1600/carne+guisada.JPG",
      },
      {
        name: "Sierra Fish",
        image:
          "https://www.marionskitchen.com/wp-content/uploads/2020/01/Crispy-Fish-with-Sweet-Sour-Sauce3.jpg",
      },
      {
        name: "Chicken Wings",
        image:
          "https://www.thetasteofkosher.com/wp-content/uploads/2018/12/fried_wings.jpg",
      },
      {
        name: "Tilipia",
        image:
          "https://colleenchristensennutrition.com/wp-content/uploads/2022/02/Three-pieces-of-air-fryer-tilapia-on-a-white-plate-with-lemon-slices..jpg",
      },
      {
        name: "Oven Baked Ribs",
        image:
          "https://fitfoodiefinds.com/wp-content/uploads/2021/08/oven-ribs-9sq.jpg",
      },
      {
        name: "Seasoned Steak",
        image:
          "https://therecipecritic.com/wp-content/uploads/2022/06/steakseasoning-1-2-750x1000.jpg",
      },
      {
        name: "Beef Fajitas",
        image:
          "https://addapinch.com/wp-content/uploads/2016/08/steak-fajitas-recipe-addapinch-1245.jpg",
      },
    ],
    premLunch: [
      {
        name: "Red Snapper",
        image:
          "https://www.acouplecooks.com/wp-content/uploads/2021/05/Grilled-Red-Snapper-005.jpg",
      },
      {
        name: "Salmon",
        image:
          "https://www.dinneratthezoo.com/wp-content/uploads/2019/04/pan-seared-salmon-3.jpg",
      },
      {
        name: "Pargo",
        image:
          "https://i0.wp.com/villahernandezrestaurant.com/wp-content/uploads/2021/12/pargo-frito.jpg?fit=576%2C576&ssl=1",
      },
      {
        name: "Shrimp",
        image:
          "https://assets.bonappetit.com/photos/58a4e12a9fda6d7fbc740e91/3:4/w_2498,h_3331,c_limit/shrimp-scampi.jpg",
      },
    ],
    lunchSpecial: [
      {
        name: "Mondongo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYg7TfYzYehg_U6-l-uMAMGGm9YH8tfQGyw&usqp=CAU",
      },
      {
        name: "Cuajito",
        image:
          "https://mofongorest.com/wp-content/uploads/2021/09/PORK-STEWED-TRIPES-600x600.jpg",
      },
      {
        name: "Caldo De Patita De Cerdo",
        image:
          "https://thetopmeal.com/wp-content/uploads/2021/04/pig-feet-recipe-9.jpg",
      },
      {
        name: "Sancocho",
        image:
          "https://mydominicankitchen.com/wp-content/uploads/2021/09/Sancocho-My-Dominican-Kitchen-4.jpg",
      },
    ],
  };

  const sides = {
    rice: [
      {
        name: "Pasta",
        image:
          "https://www.thespruceeats.com/thmb/tBZxoN88iSTjxUWzdnjMvKrvWxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pasta-with-garlic-and-cheese-recipe-482004-hero-01-2f4a00f6c39c4f3bb1209eef8b17f9cd.jpg",
      },
      {
        name: "White Rice",
        image:
          "https://addapinch.com/wp-content/uploads/2019/09/how-to-cook-white-rice-recipe-2669.jpg",
      },
      {
        name: "Yellow Rice",
        image:
          "https://familiakitchen.com/wp-content/uploads/2020/08/Pic-Sample-Post.jpg",
      },
      {
        name: "Rice w/ Vegetables",
        image:
          "https://amindfullmom.com/wp-content/uploads/2018/03/Fried-Rice-Recipe-2.jpg",
      },
      {
        name: "Brown Rice (Congri)",
        image:
          "https://cdn.shopify.com/s/files/1/0236/4175/1632/articles/congri_vertical_720x.jpg",
      },
      {
        name: "Rice w/ Red Beans",
        image:
          "https://familiakitchen.com/wp-content/uploads/2020/08/Pic-Sample-Post.jpg",
      },
      {
        name: "Concon",
        image:
          "https://mydominicankitchen.com/wp-content/uploads/2021/09/How-to-make-concon-pegao-My-Dominican-Kitchen-13-800x1200.jpg",
      },
    ],
    beans: [
      {
        name: "Red Beans",
        image:
          "https://www.foodandwine.com/thmb/NQDCDFo3sJvVyEFaNYo2ntTMvg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2012-r-xl-puerto-rican-red-beans-and-rice-c3acbbb8e5ba469c893aec61a08ba16a.jpg",
      },
      {
        name: "White Beans",
        image:
          "https://nutritionstripped.com/wp-content/uploads/2020/04/corona-bean-vegetarian-recipe-nutritionstripped.3jpg-scaled.jpg",
      },
      {
        name: "Black Beans",
        image:
          "https://assets.bonappetit.com/photos/59c924cf40052c2e91d45cd2/6:9/w_1466,h_2199,c_limit/1017%20WEB%20WEEK0815.jpg",
      },
      {
        name: "Garbanzo Beans",
        image:
          "https://challengedairy.com/sites/default/files/recipe/images/recipe_spicy_garbanzo_beans_with_caramelized_onions_2280.jpg",
      },
      {
        name: "Lentils",
        image:
          "https://www.aheadofthyme.com/wp-content/uploads/2020/03/easy-20-minute-one-pot-lentils-3.jpg",
      },
      {
        name: "Pigeon Peas",
        image: "https://i.ytimg.com/vi/ndnFt9zXqKI/maxresdefault.jpg",
      },
    ],
    extras: [
      {
        name: "Fried Plaintains (Tostones)",
        image:
          "https://asassyspoon.com/wp-content/uploads/cuban-tostones-twice-fried-plantains-4.jpg",
      },
      {
        name: "Sweet Plaintains",
        image:
          "https://www.africanbites.com/wp-content/uploads/2018/08/IMG_4496-3.jpg",
      },
      {
        name: "French Fries",
        image:
          "http://simpleveganblog.com/wp-content/uploads/2020/04/Baked-Frech-Fries-3.jpg",
      },
      {
        name: "Steamed Yuca",
        image:
          "https://www.kitchengidget.com/wp-content/uploads/2018/07/Yuca-en-Escabeche-3.jpg",
      },
      {
        name: "Steamed Bananas",
        image:
          "https://kitchendelujo.com/wp-content/uploads/2018/07/guineos-en-escabeche-4-682x1024.jpg",
      },
    ],
  };

  return (
    <div className="container-two lunch-menu">
      <h2>Main Kitchen Menu</h2>
      <div className="main-entrees">
        <div>
          <h3>
            Regular: {menuPrices.regLunch[0]} | | Large: {menuPrices.regLunch[1]}
          </h3>
          <section className="regular-entrees">
            <h4>Regular Entrees</h4>
            <ul>
              {entrees.regLunch.map((entree) => {
                return (
                  <li className="menu-item">
                    <img
                      src={entree.image}
                      alt={`${entree.name} stock image`}
                    />
                    <p>{entree.name}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div>
          <h3>
            Regular: {menuPrices.premLunch[0]} | | Large: {menuPrices.premLunch[1]}
          </h3>
          <section className="premium-entrees">
            <h4>Premium Entrees</h4>
            <ul>
              {entrees.premLunch.map((entree) => {
                return (
                  <li className="menu-item">
                    <img
                      src={entree.image}
                      alt={`${entree.name} stock image`}
                    />
                    <p>{entree.name}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
      <h4>Sides</h4>
      <span>'Select a portion from each column'</span>
      <section className="sides-div">
        <div className="sides">
          <ul>
            {sides.rice.map((side) => {
              return (
                <li className="menu-item">
                  <img src={side.image} alt={`${side.name} stock image`} />
                  <p>{side.name}</p>
                </li>
              );
            })}
          </ul>
          <ul>
            {sides.beans.map((side) => {
              return (
                <li className="menu-item">
                  <img src={side.image} alt={`${side.name} stock image`} />
                  <p>{side.name}</p>
                </li>
              );
            })}
          </ul>
          <ul>
            {sides.extras.map((side) => {
              return (
                <li className="menu-item">
                  <img src={side.image} alt={`${side.name} stock image`} />
                  <p>{side.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <h2>Lunch Special Menu</h2>
      <h3>
        Regular: {menuPrices.lunchSpecial[0]} | | Large:
        {menuPrices.lunchSpecial[1]}
      </h3>
      <div className="lunch-special">
        <section className="special-entrees">
          <h4>Entrees</h4>
          <ul>
            {entrees.lunchSpecial.map((entree) => {
              return (
                <li className="menu-item">
                  <img src={entree.image} alt={`${entree.name} stock image`} />
                  <p>{entree.name}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="special-sides">
          <h4>Sides</h4>
          <ul>
            {sides.rice.map((side) => {
              return (
                <li className="menu-item">
                  <img src={side.image} alt={`${side.name} stock image`} />
                  <p>{side.name}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import ContainerTwo from "../../components/ContainerTwo";

export default function CateringMenu() {
  const [display, setDisplay] = useState(null);
  const [caterOrder, setCaterOrder] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);


  const handleLineItem = (item) => {
    console.log(item);

    setCaterOrder([...caterOrder, item])        
    
    console.log(caterOrder);
  }

  const addQty = (item) => {

  }

  const cateringMenu = [
    {
      type: "",
      name: "",
      smSize: 0,
      lgSize: 0,
      image: require('../../assets/img/test_image_1.jpeg'),
    },
  ];

  const catering = {
    Platters: [
      {
        type: "Vianda",
        name: "GUINEO EN ESCABECHE",
        smSize: 25,
        lgSize: 40,
        image: 'https://kitchendelujo.com/wp-content/uploads/2018/07/guineos-en-escabeche-4-682x1024.jpg',
      },
      {
        type: "Vianda",
        name: "MADUROS",
        smSize: 30,
        lgSize: 50,
        image: 'https://www.africanbites.com/wp-content/uploads/2018/08/IMG_4496-3.jpg',
      },
      {
        type: "Vianda",
        name: "TOSTONES",
        smSize: 35,
        lgSize: 55,
        image: 'https://asassyspoon.com/wp-content/uploads/cuban-tostones-twice-fried-plantains-4.jpg',
      },
      {
        type: "Vianda",
        name: "MANGU",
        smSize: 35,
        lgSize: 55,
        image: 'https://t1.rg.ltmcdn.com/es/posts/8/1/6/mangu_dominicano_6618_600_square.jpg',
      },
      {
        type: "Vianda",
        name: "PURE DE PAPA",
        smSize: 25,
        lgSize: 40,
        image: 'https://simple-veganista.com/wp-content/uploads/2018/10/no-drain-best-instant-pot-mashed-potatoes-recipe-6.jpg',
      },
      {
        type: "Vianda",
        name: "YUCA",
        smSize: 20,
        lgSize: 35,
        image: 'https://www.kitchengidget.com/wp-content/uploads/2018/07/Yuca-en-Escabeche-3.jpg',
      },
    ],
    Rice: [
      {
        type: "Arroz",
        name: "ARROZ BLANCO",
        smSize: 25,
        lgSize: 40,
        image: 'https://addapinch.com/wp-content/uploads/2019/09/how-to-cook-white-rice-recipe-2669.jpg',
      },
      {
        type: "Arroz",
        name: "ARROZ CON GANDULES",
        smSize: 30,
        lgSize: 50,
        image: 'https://s6856.pcdn.co/wp-content/uploads/2011/02/Brown-Rice-Lentils.jpg',
      },
      {
        type: "Arroz",
        name: "ARROZ CONGRI",
        smSize: 30,
        lgSize: 50,
        image: 'https://cdn.shopify.com/s/files/1/0236/4175/1632/articles/congri_vertical_720x.jpg',
      },
      {
        type: "Arroz",
        name: "ARROZ MORO",
        smSize: 30,
        lgSize: 50,
        image: 'https://familiakitchen.com/wp-content/uploads/2020/08/Pic-Sample-Post.jpg',
      },
      {
        type: "Arroz",
        name: "ARROZ CON VEGETALES",
        smSize: 30,
        lgSize: 50,
        image: 'https://amindfullmom.com/wp-content/uploads/2018/03/Fried-Rice-Recipe-2.jpg',
      },
      {
        type: "Arroz",
        name: "HABICHUELAS VASO DE 32 OZ",
        smSize: 9,
        lgSize: 0,
        image: 'https://thenoshery.com/wp-content/uploads/2020/03/habichulas-guisadas-2-643x900.jpg',
      },
    ],
    Salad: [
      {
        type: "Ensaladas",
        name: "ENSALADA DE PAPA",
        smSize: 25,
        lgSize: 40,
        image: 'https://www.africanbites.com/wp-content/uploads/2014/06/IMG_3495.jpg',
      },
      {
        type: "Ensaladas",
        name: "ENSALADA VERDE",
        smSize: 25,
        lgSize: 40,
        image: 'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1-368x368.jpg',
      },
      {
        type: "Ensaladas",
        name: "ENSALADA DE CODITOS",
        smSize: 30,
        lgSize: 50,
        image: 'https://www.flavormosaic.com/wp-content/uploads/2019/05/Best-Classic-Macaroni-Salad-Recipe-10.jpg',
      },
    ],
    Fish: [
      {
        type: "Pescado",
        name: "BACALAO",
        smSize: 45,
        lgSize: 80,
        image: 'https://www.chefzeecooks.com/wp-content/uploads/2018/03/Bacalao.jpg',
      },
    ],
    Beef: [
      {
        type: "Carne De Res",
        name: "CARNE GUISADA",
        smSize: 55,
        lgSize: 95,
        image: 'https://3.bp.blogspot.com/_Sl8374-mbMA/TJgez_oVIwI/AAAAAAAAFFI/9mfsF3LYImo/s1600/carne+guisada.JPG',
      },
      {
        type: "Carne De Res",
        name: "ROPA VIEJA",
        smSize: 60,
        lgSize: 110,
        image: 'https://www.aspicyperspective.com/wp-content/uploads/2019/08/ropa-vieja-cuban-beef-recipe-9.jpg',
      },
      {
        type: "Carne De Res",
        name: "ALBONDIGAS",
        smSize: 45,
        lgSize: 80,
        image: 'https://honest-food.net/wp-content/uploads/2015/01/albondigas-al-chipotle-recipe.jpg',
      },
    ],
    Pork: [
      {
        type: "Carne De Cerdo",
        name: "PERNIL DELANTERO",
        smSize: 29.99,
        lgSize: 0,
        image: 'https://ensalpicadas.com/wp-content/uploads/2021/05/Pernil-al-Estilo-Puertorriqueno-1-of-1-2-386x512.jpg',
      },
      {
        type: "Carne De Cerdo",
        name: "PERNIL TRASERO",
        smSize: 60,
        lgSize: 0,
        image: 'https://www.plumrose.com/wp-content/uploads/2020/10/Punta-Trasera-de-Cerdo-2.jpg',
      },
      {
        type: "Carne De Cerdo",
        name: "PERNIL",
        smSize: 50,
        lgSize: 90,
        image: 'https://senseandedibility.com/wp-content/uploads/2020/08/Pernil-FB.jpg',
      },
      {
        type: "Carne De Cerdo",
        name: "COSTILLAS DE CERDO",
        smSize: 45,
        lgSize: 85,
        image: 'https://www.koreanbapsang.com/wp-content/uploads/2020/08/DSC2952-2-e1621710955568.jpg',
      },
    ],
    Poultry: [
      {
        type: "Aves",
        name: "PAVO HORNEADO",
        smSize: 65,
        lgSize: 0,
        image: 'https://www.thecountrycook.net/wp-content/uploads/2021/10/thumbnail-Roast-Turkey-scaled.jpg',
      },
      {
        type: "Aves",
        name: "POLLO ENTERO",
        smSize: 7.99,
        lgSize: 0,
        image: 'https://www.familyfoodonthetable.com/wp-content/uploads/2021/07/Whole-roasted-chicken-9.jpg',
      },
      {
        type: "Aves",
        name: "MUSLO Y CADERA FRITO",
        smSize: 30,
        lgSize: 55,
        image: 'https://www.recetas-puertorico.com/base/stock/Recipe/74-image/74-image_web.jpg',
      },
      {
        type: "Aves",
        name: "MUSLO Y CADERA GUISADO",
        smSize: 30,
        lgSize: 55,
        image: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2018/05/Muslos-de-pollo-al-horno.jpg',
      },
      {
        type: "Aves",
        name: "MUSLO/CADERA HORNEADO",
        smSize: 30,
        lgSize: 55,
        image: 'https://1.bp.blogspot.com/-cziBs4fiLS8/V8fuR1amdKI/AAAAAAADUWY/dPYbvxrZvlccbYeHiO5SlV9wMwfc3e3UwCLcB/s1600/Pollo-asado-provenzal12.jpg',
      },
      {
        type: "Aves",
        name: "POLLO HORNEADO",
        smSize: 35,
        lgSize: 60,
        image: 'https://www.johaprato.com/files/styles/flexslider_full/public/pollo_al_horno.jpg?itok=qGBPijjz',
      },
      {
        type: "Aves",
        name: "POLLO GUISADO",
        smSize: 35,
        lgSize: 60,
        image: 'https://www.delishdlites.com/wp-content/uploads/2016/08/polloguisado4-683x1024.png',
      },
    ],
  };

  const handleDisplay = (e) => {
    setDisplay(catering[e.target.name]);
  };

  return (
    <div className="container-one catering-select">
      <label htmlFor="dishes">Select a Catering Category: </label>
      <nav name="dishes" className="dishes">
        {Object.keys(catering).map((key, index) => {
          return (
            <a name={key} key={index} onClick={handleDisplay}>
              {key}
            </a>
          );
        })}
      </nav>
      <div className="catering-menu">
        {display &&
          display.map((item, index) => {
            return (
              <div className="menu-item" key={index}>
                <div className="item-details">
                  <img src={item.image} />
                  <p>{item.name}</p>
                </div>
                <div className="item-actions">
                  <section onClick={() => handleLineItem({
                    name: item.name,
                    size: "Regular",
                    price: item.smSize,
                    qty: 1 
                  })}>
                    <p>Reg: ${item.smSize}</p>
                    <a onClick={() => addQty(item)}>+</a>
                    <span>Qty{caterOrder[{name: item.name}]}</span>
                    {/* <a onClick={() => remQty(item)}>-</a> */}
                  </section>
                  {item.lgSize > 0 && <section onClick={() => handleLineItem({
                    name: item.name,
                    size: "Large",
                    price: item.lgSize,
                    qty: 1, 
                  })}>
                    <p>Lg: ${item.lgSize}</p>
                    <a onClick={() => addQty(item)}>+</a>
                    <span>Qty</span>
                    {/* <a onClick={() => remQty(item)}>-</a> */}
                  </section>}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

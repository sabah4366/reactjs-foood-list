import { useEffect, useState } from "react";
import './style.css'
import axios from "axios";


function Main() {

    const [items,setItems] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((res) => setItems(res.data.meals)).catch((err) => console.log(err))
    },[])

        const allItems = items.map((item) => {
                return(
                    <section className="card">
                        <img src={item.strMealThumb} alt=""/>
                        <section className="content">
                            <p>{item.strMeal}</p>
                            <p>#{item.idMeal}</p>
                        </section>

                    </section>
                   
                )
        })
        return <div className="items-container">{allItems}</div>

        
        
}

export default Main;
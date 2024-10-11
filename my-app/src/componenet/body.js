
import React from "react";
import { ResturantList } from "./ResturantList.js";

import "./Header.css"

const ResturantCard=({cloudinaryImageId,name,cuisines,sla})=>{
    return (
        <div className="resturantCart-item">
            <div className="card">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${cloudinaryImageId}`} alt="" />
                <div className="card-details">
                    <h2>{name}</h2>
                    <p>{cuisines.join(",")}</p>
                    <h2>{sla.slaString} </h2>
                </div>
            </div>
        </div>
    );
}
 export const Body=()=>{
    return(
        <>
        <div className="resturant-card">
{/*         
        <ResturantCard 
            cloudinaryImageId={ResturantList[0].info.cloudinaryImageId}
            name={ResturantList[0].info.name}
            cuisines={ResturantList[0].info.cuisines.join(",")}
            slaString={ResturantList[0].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[1].info.cloudinaryImageId}
            name={ResturantList[1].info.name}
            cuisines={ResturantList[1].info.cuisines.join(",")}
            slaString={ResturantList[1].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[3].info.cloudinaryImageId}
            name={ResturantList[3].info.name}
            cuisines={ResturantList[3].info.cuisines.join(",")}
            slaString={ResturantList[3].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[4].info.cloudinaryImageId}
            name={ResturantList[4].info.name}
            cuisines={ResturantList[4].info.cuisines.join(",")}
            slaString={ResturantList[4].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[5].info.cloudinaryImageId}
            name={ResturantList[5].info.name}
            cuisines={ResturantList[5].info.cuisines.join(",")}
            slaString={ResturantList[5].info.sla.slaString}
        /> */}
        {
            ResturantList.map((resturant)=>{
                return <ResturantCard {...resturant.info} key={resturant.info.id}/>
            })
        }
        </div>
        </>
    )
}
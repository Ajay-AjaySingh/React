
import React from "react";
import { ResturantList } from "./ResturantList.js";

import "./Header.css"

const ResturantCard=({cloudinaryImageId,name,cuisines,slaString})=>{
    return (
        <div className="resturantCart-item">
            <div className="card">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${cloudinaryImageId}`} alt="" />
                <div className="card-details">
                    <h2>{name}</h2>
                    <p>{cuisines}</p>
                    <h2>{slaString} </h2>
                </div>
            </div>
        </div>
    );
}
 export const Body=()=>{
    return(
        <>
        <div className="resturant-card">
        <ResturantCard 
            cloudinaryImageId={ResturantList[0].info.cloudinaryImageId}
            name={ResturantList[0].info.name}
            cuisines={ResturantList[0].info.cuisines.join(",")}
            slaString={ResturantList[0].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[0].info.cloudinaryImageId}
            name={ResturantList[0].info.name}
            cuisines={ResturantList[0].info.cuisines.join(",")}
            slaString={ResturantList[0].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[0].info.cloudinaryImageId}
            name={ResturantList[0].info.name}
            cuisines={ResturantList[0].info.cuisines.join(",")}
            slaString={ResturantList[0].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[0].info.cloudinaryImageId}
            name={ResturantList[0].info.name}
            cuisines={ResturantList[0].info.cuisines.join(",")}
            slaString={ResturantList[0].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[0].info.cloudinaryImageId}
            name={ResturantList[0].info.name}
            cuisines={ResturantList[0].info.cuisines.join(",")}
            slaString={ResturantList[0].info.sla.slaString}
        />
          <ResturantCard 
            cloudinaryImageId={ResturantList[0].info.cloudinaryImageId}
            name={ResturantList[0].info.name}
            cuisines={ResturantList[0].info.cuisines.join(",")}
            slaString={ResturantList[0].info.sla.slaString}
        />
        </div>
        </>
    );
}
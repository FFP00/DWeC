import { useState } from "react";
import Project from "../components/Projects/Project.jsx"
import Filtros from "../components/Projects/Filtros.jsx"

export default function Projects(){

  const [filterMember, setFilterMember] = useState("all");
  const [filterType, setFilterType] = useState("all");

    return(
        <>
            <Filtros         
                filterMember={filterMember}
                setFilterMember={setFilterMember}
                filterType={filterType}
                setFilterType={setFilterType}
            />
            <Project 
                filterMember={filterMember} 
                filterType={filterType} 
            />
        </>
    )
}
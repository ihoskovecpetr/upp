import React, {useEffect, useState} from "react"
import { connect } from "react-redux";

import { fetchProducts } from "../Actions/projectActions"

import Item from "./Item"
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';


function ItemsWrap({loading, error, projects, dispatch}){
    const classes = useStyles();
    const [selected, setSelected] = useState(0);


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleSelect = (idx) => {
        console.log(idx)
        setSelected(idx)
    }

    if(loading){return("Loading")} 
    if(error){return("Error")}
    if(projects){
       return projects.map((item, index) => {
           return( <Item name={item.name} selected={selected} idx={index} key={item.id} handleSelect={handleSelect} /> )     
        })
    }

    return(
        <>
            nic
        </>
    )
}

const StateToProps = (state) => {
    return{
        projects: state.projects.items,
        loading: state.projects.loading,
        error: state.projects.error,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
  }));

export default connect(StateToProps)(ItemsWrap)
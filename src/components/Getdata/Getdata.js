import React, { useState, useEffect } from 'react'
// import { Loading } from './Loading';
import moment from 'moment';

const Getdata = (props) => {

    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch(props.url);
            //  setLoading(false);
            setUsers(await response.json());
        } catch (error) { 
            // setLoading(false);
            // console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    // if (loading) {
    //     return <Loading />
    // }
    console.log(props.url);
    return (
        <>
            {users.map((item,i)=>{
                let hrs=Math.floor(users[i].duration/3600);
                let mins=((users[i].duration%3600))/60;
                let start_time=users[i].start_time;
                let my_date=moment(start_time).format('LLLL');
                let end_time=users[i].end_time;
                let my_endT=moment(end_time).format('LLLL');
                return <div className="contest-card" ><a href={users[i].url}>

                    <h3>Name: {users[i].name}</h3>
                    <p>Duration:{hrs} hrs {mins>0?String(mins)+" mins":""}</p>
                    <p>Start :{my_date}</p>
                    <p>End: {my_endT}</p>
                    </a></div>
            })}
        </>
    )
}

export default Getdata;
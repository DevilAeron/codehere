import React from 'react';
import Modall from './Modal';

function Contest(){
    return (
        <>
        <Modall url = {'https://kontests.net/api/v1/codeforces'} id = {'cf'} name = {'Codeforces'}/>
        <Modall url = {'https://kontests.net/api/v1/leet_code'} id = {'lc'} name = {'LeetCode'}/>
        <Modall url = {'https://kontests.net/api/v1/top_coder'} id = {'tc'} name = {'Top Coder'}/>
        <Modall url = {'https://kontests.net/api/v1/at_coder'} id = {'at'} name = {'At Coder'}/>
        <Modall url = {'https://kontests.net/api/v1/code_chef'} id = {'cc'} name = {'CodeChef'}/>
        <Modall url = {'https://kontests.net/api/v1/hacker_rank'} id = {'hr'} name = {'HackerRank'}/>
        <Modall url = {'https://kontests.net/api/v1/hacker_earth'} id = {'he'} name = {'HackerEarth'}/>
        </>
    )
}

export default Contest;
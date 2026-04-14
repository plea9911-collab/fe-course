import { useState, useEffect } from 'react';
import AvatarImageList from "../avatar/AvatarImageList.jsx";
import style from '../avatar/Avatar.module.css';
import { fetchData } from '../../util/fetch.js';


export default function EffectFetch2 () {
    const [data, setData] = useState([]);

    useEffect(()=>{   //useEffect는 await, async를 쓸 수 없음: useEffect는 렌더링할때 바로 실행되어야하기 때문 그래서 log는 끝나고 출력
        //비동기 함수 fetchData 작성 및 호출
        const loadData = async() => {
            const jsonData = await fetchData("http://localhost:5173/data/avatar.json");
            const newList = jsonData.list.map((item)=>({ 
                ...item, 
                style: style.avatar_img_circle
            }));
            // console.log(newList);
            setData(newList);
        }
        loadData();
    }, []);

    console.log('data--->', data);
    
    return(
        <>
            <AvatarImageList imgList={data} />
        </>
    )
}
/**
 * KOBIS, KMDB API 를 활용한 박스 오피스
 */
const kobis_key = `b75c1a60bfa46330543dee2a299406f6`;
const kmdb_key = '59H5F0U0OFQB3R2261VM';

/** KOBIS API - 박스오피스 가져오기 */
let date = new Date();
let year = new String(date.getFullYear);
let month = new String(date.getMonth);
let day = new String(date.getDate)

month = (month.length < 2) ? '0'.concat(month) : month;
day = (day.length < 2) ? '0'.concat(day) : day;

let today = year.concat(month).concat(day);
console.log(today);


async function getKobis() {
    let kobis_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${kobis_key}&targetDt=20260405`;
    let response = await fetch(kobis_url);
    return response.json();
}

/** KMDB API - 포스터 가져오기 */

async function getkmdb(movieNm, openDt) {
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api`;
    url += `/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}`;
    url += `&releaseDts=${openDt}&ServiceKey=${kmdb_key}`;
    let response = await fetch(url);
    let kmdb = await response.json();
    let posters = await kmdb?.Data?.[0]?.Result?.[0]?.posters?.split('|');

    return posters?.[0];
}

async function showList(list) {
    let slist = list.slice(0, 5).map(async (movie) => {
        let movieNm = movie.movieNm;
        let openDt = movie.openDt;
        let audiAcc = movie.audiAcc;
        let poster = await getKmdb(movie.movieNm, movie.openDt);

        return { movieNm, openDt, audiAcc, poster };
    });
    return await Promise(slist);
}

function createBoxoffice() {
    let kobis = getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;
    let outputList = showList(list);
    let output = `
        <ul>
        ${outputList.map((movie) => `
                <li>
                    <div>
                        <img src="${movie.poster}" 
                                    alt="moviechart img"
                                    width="200px">
                    </div>
                    <div><h5>${movie.movieNm}</h5></div>
                    <div><h5>누적관객수 ${parseInt(movie.audiAcc).toLocaleString()}</h5></div>
                </li>
            `).join("")
        }
    </ul>
    `;
    console.log(output);
    
        document.querySelector('#boxoffice').innerHTML = output;
}
window.addEventListener('DOMContentLoaded', () => {
        createBoxoffice();
});
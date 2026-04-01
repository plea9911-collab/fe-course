let key = `b75c1a60bfa46330543dee2a299406f6`;

let getMovieInfo = () => {
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targerDt}`
    let response = fetch(url)
    return response.json();
}

//handleBoxOffice의 함수 정의
const handleBoxOffice () => {
    let type = document.querySelector('#type')
    let sdate = document.querySelector('#sdate')

    if(type === 'default') {
        alert('타입을 선택해주세요')
    } else if (sdate === '') {
        alert('날짜를 선택해주세요')
    } else {
        targetDt = sdate.split("-").reduce((acc,cur) => acc+cur );
    }
}
/**
 * 로그인 처리
 */
class User {
    #id;
    #pwd;

    constructor(id, pwd) {
        this.#id = id;
        this.#pwd = pwd;
    }
    getId = () => this.#id;
    getPwd = () => this.#pwd;

    setId = (id) => this.#id;
    setPwd = (pwd) => this.#pwd;
}

function loginCheck() {
    //id, pwd 값 가져오기
    let id = document.querySelector('#id').value;
    let pwd = document.querySelector('#pwd').value;
    // console.log(id, pwd);

    //유효성 체크(Validation Check) - 데이터의 유, 무만 확인
    if(id === '') {
        alert('아이디를 입력해주세요.');
        document.querySelector('#id').focus();
    } else if (pwd === '') {
        alert('패스워드를 입력해주세요.');
        document.querySelector('#pwd').focus();
    } else {
        //User 클래스 생성
        let user = new User(id, pwd);
        let userObj = { id, pwd }; //{id: 'test', pwd: '1234'};
        console.log(user);

        // 비교 => did=test, dpass=1234
        if(user.getId() === 'test' && user.getPwd() === '1234') {
            alert('로그인 성공!!');
        } else {
            alert('아이디 혹은 패스워드가 일치하지 않습니다.')
        }

        //서버에 user 전송
    }
}
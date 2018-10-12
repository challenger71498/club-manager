class Message {
    constructor(status, code, message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }

    toJSON() {
        return {
            status: this.status,
            code: this.code,
            message: this.message
        };
    }

    static get NOT_GRANTED() {
        return new Message(401, 'NOT_GRANTED', '권한이 없습니다.');
    }
    static get API_NOT_FOUND() {
        return new Message(404, 'API_NOT_FOUND', '존재하지 않는 API입니다.');
    }
    static get DUPLICATED_ID(){
        return new Message(400, 'DUPLICATED_ID', '중복된 아이디입니다.')
    }
    static get MEMBER_NOT_EXIST(){
        return new Message(400, 'MEMBER_NOT_EXIST', '존재하지 않는 멤버입니다.');
    }
    static get DOCUMENT_NOT_EXIST(){
        return new Message(400, 'DOCUMENT_NOT_EXIST', '존재하지 않는 게시글입니다.');
    }
    static get BOARD_NOT_EXIST(){
        return new Message(400, 'BOARD_NOT_EXIST', '존재하지 않는 게시판입니다.');
    }
    static get STUDY_NOT_EXIST(){
        return new Message(400, 'STUDY_NOT_EXIST', '존재하지 않는 스터디입니다.');
    }
    static get GROUP_NOT_EXIST() {
        return new Message(400, 'GROUP_NOT_EXIST', '존재하지 않는 소모임입니다.');
    }
    static get PROJECT_NOT_EXIST(){
        return new Message(400, 'PROJECT_NOT_EXIST', '존재하지 않는 프로젝트입니다.');
    }
    static get GROUP_ALREADY_JOINED() {
        return new Message(400, 'GROUP_ALREADY_JOINED', '이미 가입된 소모임입니다.');
    }
    static get STUDY_ALREADY_JOINED(){
        return new Message(400, 'STUDY_ALREADY_JOINED', '이미 가입된 스터디입니다');
    }
    static get PROJECT_ALREADY_JOINED(){
        return new Message(400, 'PROJECT_ALREADY_JOINED', '이미 가입된 프로젝트입니다');
    }

    static INVALID_PARAMETER(name) {
        return new Message(400, `INVALID_PARAMETER:${name}`, `잘못된 ${name}이(가) 전송되었습니다.`)
    }
}

module.exports = Message;
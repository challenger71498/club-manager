export default {
    handleError(err) {
        if (!err || !err.response || !err.response.data || !err.response.data.message) {
            console.error(err);
            alert('알 수 없는 오류가 발생했습니다.');
            return;
        }

        alert(err.response.data.message);
    }
}
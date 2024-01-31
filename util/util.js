
const timestampToTimes = (timestamp) => {
    let date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M =
        (date.getMonth() + 1 < 10 ?
            '0' + (date.getMonth() + 1) :
            date.getMonth() + 1) + '-'
    let D =
        (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '

    return Y + M + D 
};
const timestampToTime = (timestamp) => {
    let date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let M =
        (date.getMonth() + 1 < 10 ?
            '0' + (date.getMonth() + 1) :
            date.getMonth() + 1) + '-'
    let D =
        (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    let h =
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let m =
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) 
    return M + D + h + m 
};
const timestampyue = (timestamp) => {
    let date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M =
        (date.getMonth() + 1 < 10 ?
            '0' + (date.getMonth() + 1) :
            date.getMonth() + 1) + '-'
    let D =
        (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '

    return M + D 
};


const isNotBlank = (value) => {
    if (value === undefined || value === null || value === '' || value === 'null') {
        return false;
    } else {
        return true;
    }
};

const isBlank = (value) => {
    if (value === undefined || value === null || value === '') {
        return true;
    } else {
        return false;
    }
};


const isPhoneNumber = (value) => {
    const regex = /^1[3456789]\d{9}$/;
   return  regex.test(value);
};


const isIdCard = (value) => {
    const regex = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[Xx\d]$/;
    return  regex.test(value);
};
const isSmsCode = (value) => {
    const regex = /^\d{6}$/;
    return  regex.test(value);
};
const isPassword = (value) => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    return  regex.test(value);
};

const isPayWord = (value) => {
    const regex = /^\d{6}$/;
    return  regex.test(value);
};

const isRealName = (value) => {
    const regex = /^([\u4e00-\u9fa5]{2,4}(·[\u4e00-\u9fa5]{2,4})?|[a-zA-Z.\s]{2,20})$/;
    return  regex.test(value);
};


const blidBoxType = (value) => {

    let blindBox = {}
    if (value===1){
        blindBox.name = "源氏";
        blindBox.image = "https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/story/1.jpg"
        return blindBox;
    }else if (value===2){
        blindBox.name = "织田";
        blindBox.image = "https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/story/2.jpg"
        return blindBox;
    }else if (value===3){
        blindBox.name = "丰臣";
        blindBox.image = "https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/story/3.jpg"
        return blindBox;
    }else if (value===4){
        blindBox.name = "北条";
        blindBox.image = "https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/story/4.jpg"
        return blindBox;
    }else if (value===5){
        blindBox.name = "平氏";
        blindBox.image = "https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/story/5.jpg"
        return blindBox;
    }else if (value===6){
        blindBox.name = "武田";
        blindBox.image = "https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/story/6.jpg"
        return blindBox;
    }
};

/**
 * 导出 
 **/
export {
    timestampToTimes,
	timestampToTime,
	timestampyue,
    isNotBlank,
    isBlank,
    isPhoneNumber,
    isIdCard,
    isSmsCode,
    isPassword,
    isPayWord,
    isRealName,
    blidBoxType
}
//randomly pick a item from array
function sample(list) {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
}

function generateTrashTalk(option) {
    //data to pick: 
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
    }

    const phrase = ['很簡單', '很容易', '很快', '很正常', '都不會嗎?']

    //將傳入的值翻成中文
    const translate = {
        engineer: '工程師',
        designer: '設計師',
        entrepreneur: '創業家'
    }

    //basic title
    const basicTitle = `身為一個${translate[option.profession]}`

    //pick a task
    let targetTaskList = task[option.profession] || []

    if (targetTaskList.length === 0) {
        return '沒有可用的幹話組合'
    }

    //random pick a task
    const randomTask = sample(targetTaskList)

    //random pick a phrase
    const randomPhrase = sample(phrase)

    //combine
    const result = basicTitle + randomTask + randomPhrase

    return result
}


module.exports = generateTrashTalk
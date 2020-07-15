const getWeek = () => {
    var now = new Date()
    var today_num = now.getDay()
    console.log(today_num, 'num')
    var today = new Intl.DateTimeFormat('en-US',{weekday:'short'}).format(now)
    console.log(today, 'day')
    var Sunday= now.getDate() - today_num //the date of Sunday
    now.setDate(Sunday)
    var month = now.getMonth() + 1
    var Sunday_date = now.getDate().toString()+'/'+month.toString()
    var Saturday= now.getDate() + 6 - today_num //the date of Sat
    now.setDate(Saturday)
    var Saturday_date = now.getDate().toString()+'/'+month.toString()
    var time = Sunday_date+' -- '+Saturday_date
    return time
}
export default getWeek;
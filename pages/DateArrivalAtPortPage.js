const { I } = inject();
class ArrivalDateAtPortPage {
    constructor(date) {
        // page locators
        this.locators = {
            dayField: '//input[@id="trip-date-day"]',
            monthField: '//input[@id="trip-date-month"]',
            yearField: '//input[@id="trip-date-year"]',
            timeDropDown: '//select[@id="time"]'
        };
        I.see('When should the 24hr permit start');
        this.someDate = new Date();
        if(0 == date.localeCompare('past')){
            this.someDate.setDate(this.someDate.getDate() - 10);
        }else if(0 == date.localeCompare('current')){
            this.someDate.setDate(this.someDate.getDate());
        }else if(0 == date.localeCompare('future')){
            this.someDate.setDate(this.someDate.getDate() + 10);
        }else if(0 == date.localeCompare('equal to 28')){
            this.someDate.setDate(this.someDate.getDate() + 28);
        }else{
            this.someDate.setDate(this.someDate.getDate() + 29); 
        }
        
        this.dd = this.someDate.getDate();
        // 0 is January, so we must add 1
        this.mm = this.someDate.getMonth() + 1;
        this.y = this.someDate.getFullYear();
    }
    enterDay() {     
        I.fillField(this.locators.dayField,this.dd);
    }
    enterMonth() {
        I.fillField(this.locators.monthField,this.mm);
    }
    enterYear() {   
        I.fillField(this.locators.yearField,this.y);
    }
    selectTime(time){
        if(0 == time.localeCompare('valid')){
        var time = this.someDate.getHours()-1;
        I.selectOption(this.locators.timeDropDown, time.toString()+':00');
        }else if(0 == time.localeCompare('empty')){
            //pass
        }      
        else{
            var time = this.someDate.getHours()+1;
            I.selectOption(this.locators.timeDropDown, time.toString()+':00');
        }
    } 

    validateErrorMessageForDateGreaterThan28(){
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = this.someDate.getDate()-1;
        var hours = this.someDate.getHours().toString() + ':00';
        
        var dateStr = date.toString();
        var year = this.someDate.getFullYear().toString();
        var nth = '';
            if (date > 3 && date < 21) nth = 'th';
            else{
            switch (date % 10) {
              case 1:  nth = "st";
              case 2:  nth = "nd";
              case 3:  nth = "rd";
              default: nth = "th";
            }
        }
        
        var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[this.someDate.getDay()-1];
        var month = monthNames[this.someDate.getMonth()]
          
        //var hours = this.someDate.getHours().toString();
        var msg = hours + ' '+ n + ' ' + dateStr +  nth + ' ' + month + ' ' + year;

        I.see(msg);

    }

    
}

module.exports = ArrivalDateAtPortPage;
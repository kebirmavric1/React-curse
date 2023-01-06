// File for class subject

// class Car {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     fullName() {
//        return  console.log(this.name + " " + this.type);
//     }
// };

// const newCar = new Car('Audi', 'Limo');

// console.log(newCar);

// newCar.fullName();


class User {
    constructor(name, lName,yearofBirth) {
        this.name = name;
        this.lName = lName;
        this.yearofBirth = yearofBirth;
        this.age = this.calculateYearOfBirth(this.yearofBirth);
    }

    fullName() {
        return console.log(this.name + " " + this.lName + " " + this.yearofBirth);
    }
    calculateYearOfBirth(yearOfBirth) {

        return  2022 - yearOfBirth;
    }
}


const newUser = new  User("Kebir", "Mavric", 2001);

console.log(newUser);

newUser.fullName();





class AdditionalInfo extends User {

    statesArr = [
            {
                state: "USA",
                cId: '+1'
            }, 
            {
                state: "UK",
                cId: '+44',
                
            },
            {
                state: "MEXICO",
                cId:"+52",
            },
             {
                state: "INDIA",
                cId:"+91",
            },
             {
                 state: "CHINA",
                 cId: "+86",
                }, 
                {
                    state: "SERBIA",
                    cId: "+381",
                },
            ]
            
            
            constructor(street, city, state, phoneNumber) {
                super(newUser.name, newUser.lName,newUser.yearofBirth);
                this.street = street;
                this.city = city;
                this.state = state;
                this.phoneNumber = phoneNumber;
                this.number = this.numberHandler(this.state, this.phoneNumber);
            }
            numberHandler(state, phoneNumber) {
                this.findState = this.statesArr.find ( (s) => s.state === state);
                return phoneNumber.replace(phoneNumber[0], this.findState.cId); 
            }
            
        }
        // console.log(replace);
        
        

const additional = new AdditionalInfo("Rifata B", 'Novi Pazar', 'SERBIA', '0693858100');
// console.log(newUser)


console.log(additional);
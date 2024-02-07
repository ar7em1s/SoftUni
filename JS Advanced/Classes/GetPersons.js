//TBFinished??

class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email
        }

        toArray() {
            let result = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
            return result;
        }
    }

        function createPersons(result) {
            let arr = [];
            arr.push(result);
        }
            // `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`

// <reference path="../../../typings/tsd.d.ts" />
"use strict";
const Mongoose = require("mongoose");
const Constants = require("./../../config/constants/Constants");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Connected to mongodb.');
        });
        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
DataAccess.connect();
module.exports = DataAccess;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YUFjY2Vzcy9EYXRhQWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQscUNBQXNDO0FBQ3RDLGdFQUFpRTtBQUVqRTtJQUlFO1FBQ0UsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsa0JBQWtCLEdBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Q0FFRjtBQUVELFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQixpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9kYXRhQWNjZXNzL0RhdGFBY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxuaW1wb3J0IE1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbmltcG9ydCBDb25zdGFudHMgPSByZXF1aXJlKCcuLy4uLy4uL2NvbmZpZy9jb25zdGFudHMvQ29uc3RhbnRzJyk7XG5cbmNsYXNzIERhdGFBY2Nlc3Mge1xuICBzdGF0aWMgbW9uZ29vc2VJbnN0YW5jZTogYW55O1xuICBzdGF0aWMgbW9uZ29vc2VDb25uZWN0aW9uOiBNb25nb29zZS5Db25uZWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBEYXRhQWNjZXNzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25uZWN0ICgpOiBNb25nb29zZS5Db25uZWN0aW9uIHtcbiAgICBpZiAodGhpcy5tb25nb29zZUluc3RhbmNlKSB7IHJldHVybiB0aGlzLm1vbmdvb3NlSW5zdGFuY2U7IH1cblxuICAgIHRoaXMubW9uZ29vc2VDb25uZWN0aW9uICA9IE1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgdGhpcy5tb25nb29zZUNvbm5lY3Rpb24ub25jZSgnb3BlbicsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKTtcbiAgICB9KTtcblxuICAgdGhpcy5tb25nb29zZUluc3RhbmNlID0gTW9uZ29vc2UuY29ubmVjdChDb25zdGFudHMuREJfQ09OTkVDVElPTl9TVFJJTkcpO1xuICAgcmV0dXJuIHRoaXMubW9uZ29vc2VJbnN0YW5jZTtcbiAgfVxuXG59XG5cbkRhdGFBY2Nlc3MuY29ubmVjdCgpO1xuZXhwb3J0ID0gRGF0YUFjY2VzcztcbiJdfQ==

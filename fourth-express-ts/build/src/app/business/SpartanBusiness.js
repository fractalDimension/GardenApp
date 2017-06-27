"use strict";
const SpartanRepository = require("./../repository/SpartanRepository");
class SpartanBusiness {
    constructor() {
        this._spartanRepository = new SpartanRepository();
    }
    create(item, callback) {
        this._spartanRepository.create(item, callback);
    }
    retrieve(callback) {
        this._spartanRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._spartanRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._spartanRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this._spartanRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._spartanRepository.findById(_id, callback);
    }
}
Object.seal(SpartanBusiness);
module.exports = SpartanBusiness;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MvU3BhcnRhbkJ1c2luZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RUFBd0U7QUFJeEU7SUFHSTtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBRSxJQUFtQixFQUFFLFFBQTJDO1FBQ3BFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxRQUFRLENBQUUsUUFBMkM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTSxDQUFFLEdBQVcsRUFBRSxJQUFtQixFQUFFLFFBQTJDO1FBQ2pGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUc7WUFDM0MsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO2dCQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSTtnQkFDQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWhFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE1BQU0sQ0FBRSxHQUFXLEVBQUUsUUFBMEM7UUFDM0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFFBQVEsQ0FBRSxHQUFXLEVBQUUsUUFBcUQ7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUVKO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QixpQkFBUyxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzcy9TcGFydGFuQnVzaW5lc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BhcnRhblJlcG9zaXRvcnkgPSByZXF1aXJlKFwiLi8uLi9yZXBvc2l0b3J5L1NwYXJ0YW5SZXBvc2l0b3J5XCIpO1xuaW1wb3J0IElTcGFydGFuQnVzaW5lc3MgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1NwYXJ0YW5CdXNpbmVzc1wiKTtcbmltcG9ydCBJU3BhcnRhbk1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9TcGFydGFuTW9kZWxcIik7XG5cbmNsYXNzIFNwYXJ0YW5CdXNpbmVzcyAgaW1wbGVtZW50cyBJU3BhcnRhbkJ1c2luZXNzIHtcbiAgICBwcml2YXRlIF9zcGFydGFuUmVwb3NpdG9yeTogU3BhcnRhblJlcG9zaXRvcnk7XG4gICAgXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9zcGFydGFuUmVwb3NpdG9yeSA9IG5ldyBTcGFydGFuUmVwb3NpdG9yeSgpO1xuICAgIH0gIFxuICAgICAgICBcbiAgICBjcmVhdGUgKGl0ZW06IElTcGFydGFuTW9kZWwsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fc3BhcnRhblJlcG9zaXRvcnkuY3JlYXRlKGl0ZW0sIGNhbGxiYWNrKTsgICBcbiAgICB9XG4gICBcbiAgICByZXRyaWV2ZSAoY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICAgdGhpcy5fc3BhcnRhblJlcG9zaXRvcnkucmV0cmlldmUoY2FsbGJhY2spO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUgKF9pZDogc3RyaW5nLCBpdGVtOiBJU3BhcnRhbk1vZGVsLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX3NwYXJ0YW5SZXBvc2l0b3J5LmZpbmRCeUlkKF9pZCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZihlcnIpIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgdGhpcy5fc3BhcnRhblJlcG9zaXRvcnkudXBkYXRlKHJlcy5faWQsIGl0ZW0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7ICAgIFxuICAgIH1cbiAgICBcbiAgICBkZWxldGUgKF9pZDogc3RyaW5nLCBjYWxsYmFjazooZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fc3BhcnRhblJlcG9zaXRvcnkuZGVsZXRlKF9pZCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBcbiAgICBmaW5kQnlJZCAoX2lkOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBJU3BhcnRhbk1vZGVsKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX3NwYXJ0YW5SZXBvc2l0b3J5LmZpbmRCeUlkKF9pZCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBcbn1cbk9iamVjdC5zZWFsKFNwYXJ0YW5CdXNpbmVzcyk7XG5leHBvcnQgPSBTcGFydGFuQnVzaW5lc3M7Il19
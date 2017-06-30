"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// <reference path='../../../typings/tsd.d.ts' />
const ClassifiedImageRepository = require("./../repository/ClassifiedImageRepository");
const date = require("date-and-time");
class ClassifiedImageBusiness {
    constructor() {
        this._classifiedImageRepository = new ClassifiedImageRepository();
    }
    create(req, callback) {
        console.log('trying to save the file named: ', req.file.originalname);
        // TODO move this section into a helper function
        const imageToClassify = {};
        imageToClassify.image_name = req.file.originalname;
        imageToClassify.date_uploaded = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
        imageToClassify.img = {
            data: req.file.buffer,
            content_type: getFileType(req.file.originalname)
        };
        this._classifiedImageRepository.create(imageToClassify, callback);
    }
    classify(res, callback) {
        console.log('I should do something with this id: ', res.locals._id);
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        function demo() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('Simulate 3 sec classify time');
                yield sleep(3000);
                console.log('done classifying');
                const err = null;
                const result = 'good jorb';
                callback(err, result);
            });
        }
        demo();
    }
    retrieve(callback) {
        this._classifiedImageRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._classifiedImageRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._classifiedImageRepository.update(res._id, item, callback);
            }
        });
    }
    delete(_id, callback) {
        this._classifiedImageRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._classifiedImageRepository.findById(_id, callback);
    }
}
Object.seal(ClassifiedImageBusiness);
function getFileType(fileName) {
    return 'image/' + fileName.split('.').slice(-1)[0];
}
module.exports = ClassifiedImageBusiness;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MvQ2xhc3NpZmllZEltYWdlQnVzaW5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaURBQWlEO0FBQ2pELHVGQUF3RjtBQUt4RixzQ0FBdUM7QUFLdkM7SUFHRTtRQUNFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVELE1BQU0sQ0FBRSxHQUF1QyxFQUFFLFFBQTJDO1FBRTFGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0RSxnREFBZ0Q7UUFDaEQsTUFBTSxlQUFlLEdBQWlELEVBQUUsQ0FBQztRQUN6RSxlQUFlLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELGVBQWUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDL0UsZUFBZSxDQUFDLEdBQUcsR0FBRztZQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3JCLFlBQVksRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDakQsQ0FBQztRQUVGLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxRQUFRLENBQUUsR0FBYSxFQUFFLFFBQTJDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwRSxlQUFlLEVBQU87WUFDcEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVEOztnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQzVDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBRWhDLE1BQU0sR0FBRyxHQUFRLElBQUksQ0FBQztnQkFDdEIsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDO2dCQUMzQixRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FBQTtRQUVELElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELFFBQVEsQ0FBRSxRQUEyQztRQUNuRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxNQUFNLENBQUUsR0FBVyxFQUFFLElBQTJCLEVBQUUsUUFBMkM7UUFFM0YsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRztZQUNyRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNSLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBRSxHQUFXLEVBQUUsUUFBNEM7UUFDL0QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUcsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFFBQVEsQ0FBRSxHQUFXLEVBQUUsUUFBOEQ7UUFDbkYsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUVGO0FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBSXJDLHFCQUFzQixRQUFnQjtJQUNwQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUxELGlCQUFTLHVCQUF1QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYnVzaW5lc3MvQ2xhc3NpZmllZEltYWdlQnVzaW5lc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8cmVmZXJlbmNlIHBhdGg9Jy4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHMnIC8+XG5pbXBvcnQgQ2xhc3NpZmllZEltYWdlUmVwb3NpdG9yeSA9IHJlcXVpcmUoJy4vLi4vcmVwb3NpdG9yeS9DbGFzc2lmaWVkSW1hZ2VSZXBvc2l0b3J5Jyk7XG5pbXBvcnQgSUNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL0NsYXNzaWZpZWRJbWFnZUJ1c2luZXNzJyk7XG5pbXBvcnQgSUNsYXNzaWZpZWRJbWFnZU1vZGVsID0gcmVxdWlyZSgnLi8uLi9tb2RlbC9pbnRlcmZhY2VzL0NsYXNzaWZpZWRJbWFnZU1vZGVsJyk7XG5pbXBvcnQgQ2xhc3NpZmllZEltYWdlTW9kZWwgPSByZXF1aXJlKCcuLy4uL21vZGVsL0NsYXNzaWZpZWRJbWFnZU1vZGVsJyk7XG5pbXBvcnQgSU11bHRlckZpbGVNb2RlbCA9IHJlcXVpcmUoJy4vLi4vbW9kZWwvaW50ZXJmYWNlcy9NdWx0ZXJGaWxlTW9kZWwnKTtcbmltcG9ydCBkYXRlID0gcmVxdWlyZSgnZGF0ZS1hbmQtdGltZScpO1xuXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuXG5cbmNsYXNzIENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzICBpbXBsZW1lbnRzIENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzIHtcbiAgcHJpdmF0ZSBfY2xhc3NpZmllZEltYWdlUmVwb3NpdG9yeTogQ2xhc3NpZmllZEltYWdlUmVwb3NpdG9yeTtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fY2xhc3NpZmllZEltYWdlUmVwb3NpdG9yeSA9IG5ldyBDbGFzc2lmaWVkSW1hZ2VSZXBvc2l0b3J5KCk7XG4gIH1cblxuICBjcmVhdGUgKHJlcTogUmVxdWVzdCAmIHtmaWxlOiBJTXVsdGVyRmlsZU1vZGVsfSwgY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuXG4gICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBzYXZlIHRoZSBmaWxlIG5hbWVkOiAnLCByZXEuZmlsZS5vcmlnaW5hbG5hbWUpO1xuXG4gICAgLy8gVE9ETyBtb3ZlIHRoaXMgc2VjdGlvbiBpbnRvIGEgaGVscGVyIGZ1bmN0aW9uXG4gICAgY29uc3QgaW1hZ2VUb0NsYXNzaWZ5OiBJQ2xhc3NpZmllZEltYWdlTW9kZWwgPSA8SUNsYXNzaWZpZWRJbWFnZU1vZGVsPnt9O1xuICAgIGltYWdlVG9DbGFzc2lmeS5pbWFnZV9uYW1lID0gcmVxLmZpbGUub3JpZ2luYWxuYW1lO1xuICAgIGltYWdlVG9DbGFzc2lmeS5kYXRlX3VwbG9hZGVkID0gZGF0ZS5mb3JtYXQobmV3IERhdGUoKSwgJ1lZWVkvTU0vREQgSEg6bW06c3MnKTtcbiAgICBpbWFnZVRvQ2xhc3NpZnkuaW1nID0ge1xuICAgICAgZGF0YTogcmVxLmZpbGUuYnVmZmVyLFxuICAgICAgY29udGVudF90eXBlOiBnZXRGaWxlVHlwZShyZXEuZmlsZS5vcmlnaW5hbG5hbWUpXG4gICAgfTtcblxuICAgIHRoaXMuX2NsYXNzaWZpZWRJbWFnZVJlcG9zaXRvcnkuY3JlYXRlKGltYWdlVG9DbGFzc2lmeSwgY2FsbGJhY2spO1xuICB9XG5cbiAgY2xhc3NpZnkgKHJlczogUmVzcG9uc2UsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICBjb25zb2xlLmxvZygnSSBzaG91bGQgZG8gc29tZXRoaW5nIHdpdGggdGhpcyBpZDogJywgcmVzLmxvY2Fscy5faWQpO1xuXG4gICAgZnVuY3Rpb24gc2xlZXAobXM6IGFueSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbW8oKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2ltdWxhdGUgMyBzZWMgY2xhc3NpZnkgdGltZScpO1xuICAgICAgYXdhaXQgc2xlZXAoMzAwMCk7XG4gICAgICBjb25zb2xlLmxvZygnZG9uZSBjbGFzc2lmeWluZycpO1xuXG4gICAgICBjb25zdCBlcnI6IGFueSA9IG51bGw7XG4gICAgICBjb25zdCByZXN1bHQgPSAnZ29vZCBqb3JiJztcbiAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICB9XG5cbiAgICBkZW1vKCk7XG4gIH1cblxuICByZXRyaWV2ZSAoY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2NsYXNzaWZpZWRJbWFnZVJlcG9zaXRvcnkucmV0cmlldmUoY2FsbGJhY2spO1xuICB9XG5cbiAgdXBkYXRlIChfaWQ6IHN0cmluZywgaXRlbTogSUNsYXNzaWZpZWRJbWFnZU1vZGVsLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG5cbiAgICB0aGlzLl9jbGFzc2lmaWVkSW1hZ2VSZXBvc2l0b3J5LmZpbmRCeUlkKF9pZCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NsYXNzaWZpZWRJbWFnZVJlcG9zaXRvcnkudXBkYXRlKHJlcy5faWQsIGl0ZW0sIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSAoX2lkOiBzdHJpbmcsIGNhbGxiYWNrOiAoIGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY2xhc3NpZmllZEltYWdlUmVwb3NpdG9yeS5kZWxldGUoX2lkICwgY2FsbGJhY2spO1xuICB9XG5cbiAgZmluZEJ5SWQgKF9pZDogc3RyaW5nLCBjYWxsYmFjazogKCBlcnJvcjogYW55LCByZXN1bHQ6IElDbGFzc2lmaWVkSW1hZ2VNb2RlbCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2NsYXNzaWZpZWRJbWFnZVJlcG9zaXRvcnkuZmluZEJ5SWQoX2lkLCBjYWxsYmFjayk7XG4gIH1cblxufVxuXG5cbk9iamVjdC5zZWFsKENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzKTtcbmV4cG9ydCA9IENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzO1xuXG5cbmZ1bmN0aW9uIGdldEZpbGVUeXBlKCBmaWxlTmFtZTogc3RyaW5nICkge1xuICByZXR1cm4gJ2ltYWdlLycgKyBmaWxlTmFtZS5zcGxpdCgnLicpLnNsaWNlKC0xKVswXTtcbn1cbiJdfQ==

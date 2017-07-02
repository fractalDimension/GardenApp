"use strict";
const FlowerSchema = require("./../dataAccess/schemas/FlowerSchema");
const RepositoryBase = require("./base/RepositoryBase");
class FlowerRepository extends RepositoryBase {
    constructor() {
        super(FlowerSchema);
    }
}
Object.seal(FlowerRepository);
module.exports = FlowerRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3NpdG9yeS9GbG93ZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxxRUFBc0U7QUFDdEUsd0RBQXlEO0FBRXpELHNCQUF3QixTQUFRLGNBQTRCO0lBQ3hEO1FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixpQkFBUyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3JlcG9zaXRvcnkvRmxvd2VyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbG93ZXJNb2RlbCA9IHJlcXVpcmUoJy4vLi4vbW9kZWwvRmxvd2VyTW9kZWwnKTtcbmltcG9ydCBJRmxvd2VyTW9kZWwgPSByZXF1aXJlKCcuLy4uL21vZGVsL2ludGVyZmFjZXMvRmxvd2VyTW9kZWwnKTtcbmltcG9ydCBGbG93ZXJTY2hlbWEgPSByZXF1aXJlKCcuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9GbG93ZXJTY2hlbWEnKTtcbmltcG9ydCBSZXBvc2l0b3J5QmFzZSA9IHJlcXVpcmUoJy4vYmFzZS9SZXBvc2l0b3J5QmFzZScpO1xuXG5jbGFzcyBGbG93ZXJSZXBvc2l0b3J5ICBleHRlbmRzIFJlcG9zaXRvcnlCYXNlPElGbG93ZXJNb2RlbD4ge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoRmxvd2VyU2NoZW1hKTtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKEZsb3dlclJlcG9zaXRvcnkpO1xuZXhwb3J0ID0gRmxvd2VyUmVwb3NpdG9yeTtcbiJdfQ==

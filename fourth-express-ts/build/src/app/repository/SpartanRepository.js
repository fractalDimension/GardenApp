"use strict";
const SpartanSchema = require("./../dataAccess/schemas/SpartanSchema");
const RepositoryBase = require("./base/RepositoryBase");
class SpartanRepository extends RepositoryBase {
    constructor() {
        super(SpartanSchema);
    }
}
Object.seal(SpartanRepository);
module.exports = SpartanRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3NpdG9yeS9TcGFydGFuUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsdUVBQXdFO0FBQ3hFLHdEQUF5RDtBQUV6RCx1QkFBeUIsU0FBUSxjQUE2QjtJQUMxRDtRQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBRUo7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDL0IsaUJBQVMsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9yZXBvc2l0b3J5L1NwYXJ0YW5SZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYXJ0YW5Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVsL1NwYXJ0YW5Nb2RlbFwiKTtcbmltcG9ydCBJU3BhcnRhbk1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9TcGFydGFuTW9kZWxcIik7XG5pbXBvcnQgU3BhcnRhblNjaGVtYSA9IHJlcXVpcmUoXCIuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9TcGFydGFuU2NoZW1hXCIpO1xuaW1wb3J0IFJlcG9zaXRvcnlCYXNlID0gcmVxdWlyZShcIi4vYmFzZS9SZXBvc2l0b3J5QmFzZVwiKTtcblxuY2xhc3MgU3BhcnRhblJlcG9zaXRvcnkgIGV4dGVuZHMgUmVwb3NpdG9yeUJhc2U8SVNwYXJ0YW5Nb2RlbD4ge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoU3BhcnRhblNjaGVtYSk7XG4gICAgfVxuICAgIFxufSBcblxuT2JqZWN0LnNlYWwoU3BhcnRhblJlcG9zaXRvcnkpO1xuZXhwb3J0ID0gU3BhcnRhblJlcG9zaXRvcnk7Il19

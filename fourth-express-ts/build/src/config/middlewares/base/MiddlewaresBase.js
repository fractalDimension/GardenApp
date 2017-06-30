"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MethodOverride = require("./../MethodOverride");
const BaseRoutes = require("./../../routes/base/BaseRoutes");
class MiddlewaresBase {
    static get configuration() {
        const app = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(cors()); // could be dangerous, probably should enable on per route basis
        /*
        app.use(expressWinston.logger({ // TODO move to own file
          transports: [
            new winston.transports.Console({
              json: true,
              colorize: true
            })
          ]
        }));
        */
        app.use(new BaseRoutes().routes);
        /*
        app.use(expressWinston.errorLogger({ // TODO move to own file
          transports: [
            new winston.transports.Console({
              json: true,
              colorize: true
            })
          ]
        }));
        */
        return app;
    }
}
Object.seal(MiddlewaresBase);
module.exports = MiddlewaresBase;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25maWcvbWlkZGxld2FyZXMvYmFzZS9NaWRkbGV3YXJlc0Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFvQztBQUNwQywwQ0FBMkM7QUFDM0MsNkJBQThCO0FBTTlCLHNEQUF1RDtBQUN2RCw2REFBOEQ7QUFHOUQ7SUFFRSxNQUFNLEtBQUssYUFBYTtRQUN0QixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0VBQWdFO1FBRWpGOzs7Ozs7Ozs7VUFTRTtRQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqQzs7Ozs7Ozs7O1VBU0U7UUFFRixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QixpQkFBUyxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2NvbmZpZy9taWRkbGV3YXJlcy9iYXNlL01pZGRsZXdhcmVzQmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuaW1wb3J0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG5cbi8vIHJlcXVlc3QgYW5kIGVycm9yIGxvZ2dpbmdcbmltcG9ydCBleHByZXNzV2luc3RvbiA9IHJlcXVpcmUoJ2V4cHJlc3Mtd2luc3RvbicpO1xuaW1wb3J0IHdpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJyk7IC8vIGZvciB0cmFuc3BvcnRzLkNvbnNvbGVcblxuaW1wb3J0IE1ldGhvZE92ZXJyaWRlID0gcmVxdWlyZSgnLi8uLi9NZXRob2RPdmVycmlkZScpO1xuaW1wb3J0IEJhc2VSb3V0ZXMgPSByZXF1aXJlKCcuLy4uLy4uL3JvdXRlcy9iYXNlL0Jhc2VSb3V0ZXMnKTtcblxuXG5jbGFzcyBNaWRkbGV3YXJlc0Jhc2Uge1xuXG4gIHN0YXRpYyBnZXQgY29uZmlndXJhdGlvbiAoKSB7XG4gICAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIGFwcC51c2UoTWV0aG9kT3ZlcnJpZGUuY29uZmlndXJhdGlvbigpKTtcbiAgICBhcHAudXNlKGNvcnMoKSk7IC8vIGNvdWxkIGJlIGRhbmdlcm91cywgcHJvYmFibHkgc2hvdWxkIGVuYWJsZSBvbiBwZXIgcm91dGUgYmFzaXNcbiAgICBcbiAgICAvKlxuICAgIGFwcC51c2UoZXhwcmVzc1dpbnN0b24ubG9nZ2VyKHsgLy8gVE9ETyBtb3ZlIHRvIG93biBmaWxlXG4gICAgICB0cmFuc3BvcnRzOiBbXG4gICAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XG4gICAgICAgICAganNvbjogdHJ1ZSxcbiAgICAgICAgICBjb2xvcml6ZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH0pKTtcbiAgICAqL1xuXG4gICAgYXBwLnVzZShuZXcgQmFzZVJvdXRlcygpLnJvdXRlcyk7XG5cbiAgICAvKlxuICAgIGFwcC51c2UoZXhwcmVzc1dpbnN0b24uZXJyb3JMb2dnZXIoeyAvLyBUT0RPIG1vdmUgdG8gb3duIGZpbGVcbiAgICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgICAgICBqc29uOiB0cnVlLFxuICAgICAgICAgIGNvbG9yaXplOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSkpO1xuICAgICovXG5cbiAgICByZXR1cm4gYXBwO1xuICB9XG59XG5PYmplY3Quc2VhbChNaWRkbGV3YXJlc0Jhc2UpO1xuZXhwb3J0ID0gTWlkZGxld2FyZXNCYXNlO1xuIl19

"use strict";
const DataAccess = require("./../../dataAccess/DataAccess");
const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;
class FlowerSchema {
    static get schema() {
        const schema = mongoose.Schema({
            common_name: {
                type: String,
                required: true
            },
            sci_name: {
                type: String,
                required: true
            },
            wiki_link: {
                type: String,
                required: false
            },
            in_garden: {
                type: Boolean,
                required: true
            }
        });
        return schema;
    }
}
const schema = mongooseConnection.model('Flowers', FlowerSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL0Zsb3dlclNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNERBQTZEO0FBRzdELE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM3QyxNQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6RDtJQUVFLE1BQU0sS0FBSyxNQUFNO1FBQ2YsTUFBTSxNQUFNLEdBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM5QixXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNELFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FFRjtBQUNELE1BQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBZSxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RGLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2RhdGFBY2Nlc3Mvc2NoZW1hcy9GbG93ZXJTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YUFjY2VzcyA9IHJlcXVpcmUoJy4vLi4vLi4vZGF0YUFjY2Vzcy9EYXRhQWNjZXNzJyk7XG5pbXBvcnQgSUZsb3dlck1vZGVsID0gcmVxdWlyZSgnLi8uLi8uLi9tb2RlbC9pbnRlcmZhY2VzL0Zsb3dlck1vZGVsJyk7XG5cbmNvbnN0IG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xuY29uc3QgbW9uZ29vc2VDb25uZWN0aW9uID0gRGF0YUFjY2Vzcy5tb25nb29zZUNvbm5lY3Rpb247XG5cbmNsYXNzIEZsb3dlclNjaGVtYSB7XG5cbiAgc3RhdGljIGdldCBzY2hlbWEgKCkge1xuICAgIGNvbnN0IHNjaGVtYSA9ICBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgY29tbW9uX25hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNjaV9uYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB3aWtpX2xpbms6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpbl9nYXJkZW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY2hlbWE7XG4gIH1cblxufVxuY29uc3Qgc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsPElGbG93ZXJNb2RlbD4oJ0Zsb3dlcnMnLCBGbG93ZXJTY2hlbWEuc2NoZW1hKTtcbmV4cG9ydCA9IHNjaGVtYTtcbiJdfQ==

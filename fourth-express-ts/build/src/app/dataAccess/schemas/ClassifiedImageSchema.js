"use strict";
const DataAccess = require("./../../dataAccess/DataAccess");
const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;
// NOTE!! I have not tested requiring nested fields. As it stands the image and
// predition fields are allowed to be empty...
class ClassifiedImageSchema {
    static get schema() {
        const schema = mongoose.Schema({
            image_name: {
                type: String,
                required: true
            },
            date_uploaded: {
                type: Date,
                required: true
            },
            img: {
                data: {
                    type: Buffer,
                    required: true
                },
                content_type: {
                    type: String,
                    required: true
                }
            },
            predictions: [
                {
                    date: Number,
                    model_version: String,
                    values_by_class: [
                        { class_name: String, probability: Number }
                    ]
                }
            ]
        });
        return schema;
    }
}
const schema = mongooseConnection.model('Classified Images', ClassifiedImageSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL0NsYXNzaWZpZWRJbWFnZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNERBQTZEO0FBRzdELE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM3QyxNQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6RCwrRUFBK0U7QUFDL0UsOENBQThDO0FBRTlDO0lBRUUsTUFBTSxLQUFLLE1BQU07UUFDZixNQUFNLE1BQU0sR0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzlCLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGO1lBQ0QsV0FBVyxFQUFFO2dCQUNYO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLGFBQWEsRUFBRSxNQUFNO29CQUNyQixlQUFlLEVBQUU7d0JBQ2YsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUM7cUJBQzFDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FFRjtBQUNELE1BQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBd0IsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEgsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL0NsYXNzaWZpZWRJbWFnZVNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhQWNjZXNzID0gcmVxdWlyZSgnLi8uLi8uLi9kYXRhQWNjZXNzL0RhdGFBY2Nlc3MnKTtcbmltcG9ydCBJQ2xhc3NpZmllZEltYWdlTW9kZWwgPSByZXF1aXJlKCcuLy4uLy4uL21vZGVsL2ludGVyZmFjZXMvQ2xhc3NpZmllZEltYWdlTW9kZWwnKTtcblxuY29uc3QgbW9uZ29vc2UgPSBEYXRhQWNjZXNzLm1vbmdvb3NlSW5zdGFuY2U7XG5jb25zdCBtb25nb29zZUNvbm5lY3Rpb24gPSBEYXRhQWNjZXNzLm1vbmdvb3NlQ29ubmVjdGlvbjtcblxuLy8gTk9URSEhIEkgaGF2ZSBub3QgdGVzdGVkIHJlcXVpcmluZyBuZXN0ZWQgZmllbGRzLiBBcyBpdCBzdGFuZHMgdGhlIGltYWdlIGFuZFxuLy8gcHJlZGl0aW9uIGZpZWxkcyBhcmUgYWxsb3dlZCB0byBiZSBlbXB0eS4uLlxuXG5jbGFzcyBDbGFzc2lmaWVkSW1hZ2VTY2hlbWEge1xuXG4gIHN0YXRpYyBnZXQgc2NoZW1hICgpIHtcbiAgICBjb25zdCBzY2hlbWEgPSAgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICAgIGltYWdlX25hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGVfdXBsb2FkZWQ6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBpbWc6IHsgLy8gbWlnaHQgcmVxdWlyZSB0byBiZSBhbiBvYmplY3QgZm9yIG5lc3RlZCBpdGVtc1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogQnVmZmVyLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRfdHlwZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZGljdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGU6IE51bWJlcixcbiAgICAgICAgICBtb2RlbF92ZXJzaW9uOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWVzX2J5X2NsYXNzOiBbXG4gICAgICAgICAgICB7Y2xhc3NfbmFtZTogU3RyaW5nLCBwcm9iYWJpbGl0eTogTnVtYmVyfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG59XG5jb25zdCBzY2hlbWEgPSBtb25nb29zZUNvbm5lY3Rpb24ubW9kZWw8SUNsYXNzaWZpZWRJbWFnZU1vZGVsPignQ2xhc3NpZmllZCBJbWFnZXMnLCBDbGFzc2lmaWVkSW1hZ2VTY2hlbWEuc2NoZW1hKTtcbmV4cG9ydCA9IHNjaGVtYTtcbiJdfQ==
